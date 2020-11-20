import React from 'react';
import { TextField, Grid, Paper, Button, makeStyles } from '@material-ui/core';
import { Form, useForm } from '../../components/useForm';
import { Link, Redirect } from 'react-router-dom';
import { login } from '../../actions';
import { useDispatch, useSelector } from 'react-redux';

const useStyles = makeStyles(theme => ({
    wrapper: {
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    pageContent: {
        width: '30%',
        minWidth: '280px',
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    },
    actions: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: theme.spacing(1,0)
    },
    title: {
        textAlign: 'center'
    }
}))

const initialValues = {
    email: '',
    password: '',
}

const Signin = () => {

    
    const classes = useStyles();
    
    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        
        if ('email' in fieldValues) {
            temp.email = fieldValues.email ? "" : "Email is required";
        }

        if ('password' in fieldValues) {
            temp.password = fieldValues.password ? "" : "Password is required";
        }
        
        setErrors({
            ...temp
        });

        if (fieldValues === values) {
            return Object.values(temp).every(x => x === "");
        }
    }
    
    const { values, setValues, errors, setErrors, handleInputChange, resetForm } = useForm(initialValues, true, validate);
    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validate()) {
            dispatch(login(values));
            resetForm();
        }

    }
    
    if (auth.authenticate) {
        return <Redirect to={'/'} />
    }
    
    return (
        <div className={classes.wrapper}>
            <Paper className={classes.pageContent}>
                <Form onSubmit={handleSubmit}>
                    <h1 className={classes.title}>Signin</h1>
                    <Grid container>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                label="Email"
                                name="email"
                                value={values.email}
                                onChange={handleInputChange}
                                error={errors.email ? true : false}
                                helperText={errors.email}
                            />
                            <TextField
                                variant="outlined"
                                label="Password"
                                name="password"
                                value={values.password}
                                onChange={handleInputChange}
                                error={errors.password ? true : false}
                                helperText={errors.password}
                                type="password"
                            />
                            <div className={classes.actions}>
                                <Link to="/signup">Create an account</Link>
                                <Button variant="contained" type="submit" color="primary" className={classes.submitButton} >Submit</Button>
                            </div>
                        </Grid>
                    </Grid>
                </Form>
            </Paper>
        </div>
    )
}

export default Signin;
