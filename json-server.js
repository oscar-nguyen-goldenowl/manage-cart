const jsonServer = require('json-server');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const bcrypt = require('bcrypt');
const uuidv1 = require('uuid/v1')
const path = require('path');
const server = jsonServer.create();
const router = jsonServer.router(path.resolve(__dirname, './fake-db.json'));
const middlewares = jsonServer.defaults();
const SECRET_KEY = 'JS_TEAM_PRO';
const saltRounds = 10;

const protectedRoutes = [
  '/profile',
  '/orders',
];

const authenticationMiddleware = (req, res, next) => {
  if (protectedRoutes.includes(req.url)) {
    const token = req.headers['Authorization'] || req.headers['authorization'];
    console.log('token: ', token);
    if (!token) {
      res.json({
        error: true,
        message: 'Not Authorization'
      });
      return;
    }

    const data = JSON.parse(fs.readFileSync('./fake-db.json'));
    const { users } = data;
    const decoded = jwt.decode(token);
    const accessKey = decoded ? decoded.accessKey : null;

    if (!accessKey) {
      console.log('no access key: ', accessKey);
      res.json({
        error: true,
        message: 'Not Authentication',
      });
      return;
    }
    console.log('accessKey: ', accessKey);
    const existedUser = users.find(u => u.accessKey  === accessKey);

    if (!existedUser) {
      res.json({
        error: true,
        message: 'Not found!',
      });
      return;
    }

    delete existedUser.password;
    delete existedUser.accessKey;

    req.user = {...existedUser}
    next();
  } else {
    next();
  }
}

server.use(middlewares);
server.use(authenticationMiddleware);

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser);

server.post('/auth/sign-up', (req, res) => {
  const {
    username,
    email,
    password,
  } = req.body;

  const createdAt = (new Date()).toISOString();
  const hashedPassword = bcrypt.hashSync(password, saltRounds);
  const accessKey = uuidv1();
  const token = jwt.sign({ accessKey }, SECRET_KEY);
  const data = JSON.parse(fs.readFileSync('./fake-db.json'));
  const { users } = data;
  const existedUser = users.find(u => u.email  === email);
  if (existedUser) {
    res.json({
      error: true,
      message: 'User existed',
    });
    return;
  }
  const newUser = { id: users.length + 1, username, email, password: hashedPassword, accessKey, createdAt };
  users.push(newUser);
  data.users = [...users];
  fs.writeFileSync('./fake-db.json', JSON.stringify(data));
  delete newUser.accessKey;
  delete newUser.password;
  res.json({
    token: token,
    user: newUser,
  });
});

server.post('/auth/sign-in', (req, res) => {
  const {
    email,
    password,
  } = req.body;

  const data = JSON.parse(fs.readFileSync('./fake-db.json'));
  const { users } = data;
  const existedUser = users.find(u => u.email  === email);

  if (!existedUser) {
    res.json({
      error: true,
      message: 'Wrong user or password'
    });
    return;
  }

  if (!bcrypt.compareSync(password, existedUser.password)) {
    res.json({
      error: true,
      message: 'Wrong user or password'
    });
    return;
  }

  const accessKey = uuidv1();
  const token = jwt.sign({ accessKey }, SECRET_KEY);
  existedUser.accessKey = accessKey;
  const indexOfUser = users.findIndex(u => u.email === existedUser.email);
  users[indexOfUser] = {...existedUser};
  data.users = [...users];
  fs.writeFileSync('./fake-db.json', JSON.stringify(data));
  delete existedUser.accessKey;
  delete existedUser.password;
  res.json({
    token,
    user: existedUser
  });
})

server.get('/products/count', (req, res) => {
  const resData = router.db.get('products').value();
  res.json({totalItems: resData.length});
})

server.get('/categories/:catId/products', (req, res) => {
    const { catId } = req.params;
    let { _page, _limit } = req.query;

    if (!catId) {
        res.json({
          error: true,
          message: 'Bad request'
        });
    }

    if (!_limit) {
        _limit = 10;
    }

    if (!_page) {
        _page = 1;
    }

    const start = (+_page - 1) * +_limit;
    const end = (+start) + (+_limit);
    const products = router.db.get('products').filter({ categoryId: +catId }).value();
    const totalItems = products.length;
    products.splice(end);
    products.splice(0, start);
    res.json({
        totalItems,
        products: products || [],
        page: _page,
        limit: _limit
    })
});

server.get('/profile', (req, res, next) => {
  // res.json({text: 'hello'});
  const curUser = {...req.user};
  if (!curUser) {
    res.status(400);
    res.json({
      error: true,
      message: 'Not found user!',
    });
    return;
  }

  delete curUser.accessKey;
  delete curUser.password;
  res.json({
    user: curUser
  });
});

server.use(router);
server.listen(3000, () => {
  console.log('JSON Server is running')
});