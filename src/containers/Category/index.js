import React, { useEffect, useState } from 'react';
import { Button } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategory } from '../../actions';
import { Add } from '@material-ui/icons';
import Popup from '../../components/Popup';

const Category = (props) => {

    const [openPopup, setOpenPopup] = useState(false);
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
                    { category.children.length > 0 ? (<ul>{renderCategories(category.children)}</ul>) : null}
                </li>
            )
        }

        return myCategories;
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <h3>Category</h3>
            <Button 
                variant="outlined"
                startIcon={<Add/>}
                onClick={() => setOpenPopup(true)}>Add</Button>
            <ul>
                { renderCategories(category.categories)}
            </ul>
            <Popup
                title="Add Category"
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}>

            </Popup>
        </div>
    )
}

export default Category;
