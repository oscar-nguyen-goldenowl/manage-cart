const jsonServer = require('json-server');
const path = require('path');
const server = jsonServer.create();
const router = jsonServer.router(path.resolve(__dirname, './fake-db.json'));
const middlewares = jsonServer.defaults();

server.use(middlewares);

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser);

// Add custom routes before JSON Server router
server.post('/session', (req, res) => {
  const { email } = req.body;
  const resData = router.db
    .get('session')
    .find({ email: email })
    .value();
  if (resData) {
    res.json(resData)
  } else {
    res.sendStatus(404)
  }
});

server.get('/products/count', (req, res) => {
  const resData = router.db.get('products').value();
  res.json({totalItems: resData.length});
})

server.get('/categories/:catId/products', (req, res) => {
    const { catId } = req.params;
    let { _page, _limit } = req.query;

    if (!catId) {
        return res.status(404);
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
})

server.use(router);
server.listen(3000, () => {
  console.log('JSON Server is running')
});
