import React,{ Component } from 'react';
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
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    }
    validationSchema = Yup.object().shape({
        username: Yup.string()
                    .required('Username is required')
                    .min(5, 'Username must have min 5 characters')
                    .max(10, 'Usernme have max 10 charaters'),
        email: Yup.string()
                .required('Email is required')
                .email('Email is valid'),
        password: Yup.string()
                    .required('Password is required')
                    .min(8, 'Password must have min 8 characters'),
        confirmPassword: Yup.string()
                            .required('Password is required')
                            .min(8, 'Password must have min 8 characters')
                            .test('passwords-match', 'Passwords must match', function(value) {
                                return this.parent.password === value;
                            }),
    })
    Render = props => (
        <form onSubmit={props.handleSubmit}>
            <Grid container justify='center' alignContent='center'>
                <Grid item xs={6} md={4}>
                    <Paper elevation={4} style={{ padding: '20px 15px', marginTop: '30px' }}>
                        <Typography gutterBottom>Signup</Typography>
                        <FormControl fullWidth margin='normal' error={props.touched.username && !!props.errors.username}>
                            <InputLabel>Username</InputLabel>
                            <Field 
                                name='username'
                                render={({field}) => (
                                    <Input fullWidth {...field}/>
                                )}/>
                            {props.touched.username && <FormHelperText>{props.errors.username}</FormHelperText>}
                        </FormControl>
                        <FormControl fullWidth margin='normal' error={props.touched.email && !!props.errors.email}>
                            <InputLabel>Email</InputLabel>
                            <Field 
                                name='email'
                                render={({field}) => (
                                    <Input fullWidth {...field}/>
                            )}/>
                            {props.touched.email && <FormHelperText>{props.errors.email}</FormHelperText>}
                        </FormControl>
                        <FormControl fullWidth margin='normal' error={props.touched.password && !!props.errors.password}>
                            <InputLabel>Password</InputLabel>
                            <Field 
                                name="password"
                                secureTextEntry
                                render={({field}) => (
                                    <Input fullWidth type="password" {...field}/>
                            )}/>
                            {props.touched.password && <FormHelperText>{props.errors.password}</FormHelperText>}
                        </FormControl>
                        <FormControl fullWidth margin='normal' error={props.touched.confirmPassword && !!props.errors.confirmPassword}>
                            <InputLabel>Confirm Password</InputLabel>
                            <Field 
                                name='confirmPassword'
                                secureTextEntry
                                render={({field}) => (
                                    <Input fullWidth type="password" {...field}/>
                            )}/>
                            {props.touched.confirmPassword && <FormHelperText>{props.errors.confirmPassword}</FormHelperText>}
                        </FormControl>
                        <FormControl fullWidth margin='normal'>
                            <Button
                                variant="outlined"
                                type='submit'
                                style={{outline: 'none'}}
                            >
                                Signup
                            </Button>
                        </FormControl>
                    </Paper>
                </Grid>
            </Grid>
        </form>
    )
    onSubmit = (values, actions) => {
        console.log(values);
    }
    render() {
        return (
            <Formik 
                initialValues={this.state}
                onSubmit={this.onSubmit}
                validationSchema={this.validationSchema}
                render={this.Render} />
        );
    }
}


export default Signin;