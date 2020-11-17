import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core';

// source: https://youtu.be/-XKaSCU0ZLM

export function useForm(initialValues, validateOnChange=false, validate) {

    const [ values, setValues ] =  useState(initialValues); 
    const [errors, setErrors]  = useState({});
    
    const handleInputChange = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
        if(validateOnChange){
            validate({[name]: value});
        }
    }

    const resetForm = () => {
        setValues(initialValues);
        setErrors({})
    }

    return {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm
    }
}

const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiFormControl-root': {
            width: '100%',
            margin: theme.spacing(1,0),
        }
    }
}))

export function Form(props) {

    const classes = useStyles();
    const { children, ...other } = props;
    return (
        <form {...other} className={classes.root} autoComplete="off">
            {props.children}
        </form>
    )
}
