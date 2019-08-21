import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import {
  changeLoginStatus
} from '../../actions';
import * as API from '../../api';
import {
  Input,
  FormControl,
  InputLabel,
  Button,
  Paper,
  Grid,
  Typography,
  FormHelperText
} from '@material-ui/core'
import { Formik, Field } from 'formik';
import * as Yup from 'yup';

class Signin extends Component {
  state = {
    email: '',
    password: '',
  }
  validationSchema = Yup.object().shape({
    email: Yup.string()
      .required('Email is required')
      .email('Email is valid'),
    password: Yup.string()
      .required('Password is required')
      .min(8, 'Password must have min 8 characters')
  })
  Render = props => (
    <form onSubmit={props.handleSubmit}>
      <Grid container justify='center' alignContent='center'>
        <Grid item xs={6} md={4}>
          <Paper elevation={4} style={{ padding: '20px 15px', marginTop: '30px' }}>
            <Typography gutterBottom>Signin</Typography>
            <FormControl fullWidth margin='normal' error={props.touched.email && !!props.errors.email}>
              <InputLabel>Username</InputLabel>
              <Field
                name='email'
                render={({ field }) => (
                  <Input fullWidth {...field} />
                )} />
              {props.touched.email && <FormHelperText>{props.errors.email}</FormHelperText>}
            </FormControl>
            <FormControl fullWidth margin='normal' error={props.touched.password && !!props.errors.password}>
              <InputLabel>Password</InputLabel>
              <Field
                name="password"
                render={({ field }) => (
                  <Input fullWidth type="password" {...field} />
                )} />
            </FormControl>
            <FormControl fullWidth margin='normal'>
              <Button
                variant='outlined'
                type='submit'
                style={{ outline: 'none' }}
              >
                Signin
                                </Button>
            </FormControl>
            <FormControl fullWidth margin='normal'>
              <Link to="/signup" className="MuiButtonBase-root MuiButton-root MuiButton-outlined">Signup</Link>
            </FormControl>
          </Paper>
        </Grid>
      </Grid>
    </form>
  )
  onSubmit = (values, actions) => {
    API.post('/auth/sign-in', values)
      .then(res => {
        if (res.data.error) {
          alert(res.data.message);
          return;
        }
        localStorage.setItem('user', JSON.stringify(res.data));
        this.props.changeLoginStatus(true);
        this.props.history.push(this.props.pathName);
      })
      .catch(err => {
        console.log(err, err.message);
      })
  }
  render() {
    return (
      <div>
        <Formik
          initialValues={this.state}
          onSubmit={this.onSubmit}
          validationSchema={this.validationSchema}
          render={this.Render}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    pathName: state.AppReducer.pathName
  }
}
const mapDispatchToProps = {
  changeLoginStatus
}

export default connect(mapStateToProps, mapDispatchToProps)(Signin);