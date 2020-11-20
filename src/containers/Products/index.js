import React, { useState } from 'react';
import Layout from '../../components/Layout';
import Card from '../../components/Card';
import { Grid, IconButton, InputAdornment, makeStyles, TextField } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import { Search } from '@material-ui/icons';

const useStyle = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        margin: theme.spacing(3)
    },
    search: {
        margin: theme.spacing(2, 0),
        display: 'flex'
    },
    searchBar: {
        flexGrow: 1,
        paddingRight: '0'
    },
    pagination: {
        display: 'flex',
        justifyContent: 'center'
    }
}))


const Products = () => {

    const [category, setCategory] = useState('');
    const [search, setSearch] = useState('');

    const categories = [
        { value: 1, label: 'Jeu'},
        { value: 2, label: 'Livre'},
        { value: 3, label: 'Musique'},
        { value: 4, label: 'Bricolage'}
    ]

    const classes  = useStyle();

    const handlePressedEnter = (e) => {
        if (e.key === "Enter")  {
            e.preventDefault();
            handleSearch();
        }
    }

    const handleSearch = () => {
        alert(search);
    }

    return (
        <div className={classes.root}>
            <div className={classes.search}>
                <TextField
                    id="select-category"
                    select
                    label="Category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    SelectProps={{
                        native: true,
                    }}
                    variant="filled"
                    >
                        {categories.map((option) => (
                            <option key={option.value} value={option.value}>
                            {option.label}
                            </option>
                        ))}
                </TextField>
                <TextField 
                    className={classes.searchBar} 
                    id="search" 
                    label="Search" 
                    type="search"
                    variant="outlined" 
                    value={search}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton color="secondary" onClick={handleSearch}>
                                    <Search />
                                </IconButton>
                            </InputAdornment>
                        )
                    }}
                    onKeyPress={handlePressedEnter}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>
            <Grid container spacing={3}>
                <Grid item xs={6} md={2}>
                    <Card></Card>
                </Grid>
                <Grid item xs={6} md={2}>
                    <Card></Card>
                </Grid>
                <Grid item xs={6} md={2}>
                    <Card></Card>
                </Grid>
                <Grid item xs={6} md={2}>
                    <Card></Card>
                </Grid>
                <Grid item xs={6} md={2}>
                    <Card></Card>
                </Grid>
                <Grid item xs={6} md={2}>
                    <Card></Card>
                </Grid>
                <Grid item xs={6} md={2}>
                    <Card></Card>
                </Grid>
                <Grid item xs={6} md={2}>
                    <Card></Card>
                </Grid>
                <Grid item xs={6} md={2}>
                    <Card></Card>
                </Grid>
                <Grid item xs={6} md={2}>
                    <Card></Card>
                </Grid>
                <Grid item xs={6} md={2}>
                    <Card></Card>
                </Grid>
                <Grid item xs={6} md={2}>
                    <Card></Card>
                </Grid>
                <Grid item xs={6} md={2}>
                    <Card></Card>
                </Grid>
            </Grid>
            <Pagination count={10} color="primary" showFirstButton showLastButton className={classes.pagination}/>
        </div>
    )
}

export default Products;
