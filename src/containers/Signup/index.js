import React from 'react';
import { Grid, TextField, Paper, makeStyles, Button } from '@material-ui/core';
import { useForm, Form } from '../../components/useForm';
import { Link, Redirect, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signup } from '../../actions';

const useStyles = makeStyles(theme => ({
    wrapper: {
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    pageContent: {
        width: '400px',
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
    firstName: '',
    lastName: '',
    email: '',
    password: ''
    // contactNumber: ''
}

const Signup = () => {

    const classes = useStyles();

    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if ('firstName' in fieldValues) {
            temp.firstName = fieldValues.firstName ? "" : "This field is required.";
        }
        if ('lastName' in fieldValues) {
            temp.lastName = fieldValues.lastName ? "" : "This field is required.";
        }
        if ('email' in fieldValues) {
            temp.email = (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/).test(fieldValues.email) ? "" : "Email is not valid.";
        }
        if ('password' in fieldValues) {
            temp.password = (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/).test(fieldValues.password) ? "" : "Minimum 8 characters, one lowercase letter, one uppercase letter and one number.";
        }
        // if ('contactNumber' in fieldValues) {
        //     temp.contactNumber = fieldValues.contactNumber === "" || (/((?:\+|00)[17](?: |\-)?|(?:\+|00)[1-9]\d{0,2}(?: |\-)?|(?:\+|00)1\-\d{3}(?: |\-)?)?(0\d|\([0-9]{3}\)|[1-9]{0,3})(?:((?: |\-)[0-9]{2}){4}|((?:[0-9]{2}){4})|((?: |\-)[0-9]{3}(?: |\-)[0-9]{4})|([0-9]{7}))/).test(fieldValues.contactNumber) ? "" : "Contact Number is not valid.";
        // }
        setErrors({
            ...temp
        });

        if (fieldValues === values) {
            return Object.values(temp).every(x => x === "");
        }
    }

    const { values, setValues, errors, setErrors, handleInputChange, resetForm } = useForm(initialValues, true, validate);
    const auth = useSelector(state => state.auth);
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validate()) {
            dispatch(signup(values));
            resetForm();
        }
    }

    if (auth.authenticate) {
        return <Redirect to={'/'} />
    }

    if (user.loading) {
        return <p>Loading ...</p>
    }

    return (
        <div className={classes.wrapper}>
            <Paper className={classes.pageContent}>
                <Form onSubmit={handleSubmit}>
                    <h1 className={classes.title}>Signup</h1>
                    {/* Il faudrait créer un toast pour faire propre */}
                    { user.message }
                    <Grid container>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                label="First Name"
                                name="firstName"
                                value={values.firstName}
                                onChange={handleInputChange}
                                error={errors.firstName ? true : false}
                                helperText={errors.firstName}
                            />
                            <TextField
                                variant="outlined"
                                label="Last Name"
                                name="lastName"
                                value={values.lastName}
                                onChange={handleInputChange}
                                error={errors.lastName ? true : false}
                                helperText={errors.lastName}
                            />
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
                            {/* <TextField
                                variant="outlined"
                                label="Contact Number"
                                name="contactNumber"
                                value={values.contactNumber}
                                onChange={handleInputChange}
                                error={errors.contactNumber ? true : false}
                                helperText={errors.contactNumber}
                            /> */}
                            <div className={classes.actions}>
                                <Link to="/signin" className="link">Have an account ?</Link>
                                <Button variant="contained" type="submit" color="primary" className={classes.actions} >Submit</Button>
                            </div>
                        </Grid>
                    </Grid>
                </Form>
            </Paper>
        </div>
    )
}

export default Signup;
