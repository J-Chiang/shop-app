import React, { useEffect } from 'react';
import { Button } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategory } from '../../actions';

const Category = (props) => {

    const category = useSelector(state => state.category);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getAllCategory())
    }, []);

    const renderCategories = (categories) => {
        let myCategories = [];
        for (let category of categories) {
            myCategories.push(
                <li key={category.name}>
                    { category.name }
                </li>
            )
        }

        return myCategories;
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <h3>Category</h3>
            <Button>Add</Button>
            <ul>
                { renderCategories(category.categories)}
            </ul>
        </div>
    )
}

export default Category;
