import React, { useEffect, useState } from 'react';
import { Button, TextField, Select, FormControl, InputLabel } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategory, addCategory } from '../../actions';
import { Add } from '@material-ui/icons';
import Popup from '../../components/Popup';
import Notification from '../../components/Notification';

const Category = (props) => {

    const [openPopup, setOpenPopup] = useState(false);
    const [notify, setNotify] = useState({ isOpen: false, message: '', type: '' });
    const [categoryName, setCategoryName] = useState('');
    const [parentCategoryId, setParentCategoryId] = useState('');
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

    const createCategoryList = (categories, options= []) => {
        for (let category of categories) {
            options.push({ value: category._id, name: category.name });
            if (category.children.length > 0) {
                createCategoryList(category.children, options);
            }
        }

        return options;
    } 

    const handleCreateCategory = () => {
        const form = new FormData();

        form.append('name', categoryName);
        form.append('parentId', parentCategoryId);

        dispatch(addCategory(form));
        setOpenPopup(false);
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
                setOpenPopup={setOpenPopup}
                confirmPopup={handleCreateCategory}>
                <TextField
                    autoFocus
                    margin="dense"
                    id="category"
                    label="Category"
                    variant="outlined"
                    fullWidth
                    required
                    value={categoryName}
                    onChange={(e) => setCategoryName(e.target.value)}
                />
                <FormControl>   
                    <InputLabel htmlFor="parentCategory">Parent Category</InputLabel>       
                    <Select
                        native
                        value={parentCategoryId}
                        onChange={(e) => setParentCategoryId(e.target.value)}
                        inputProps={{
                            name: 'parentCategory',
                            id: 'parentCategory',
                        }}
                    >
                        <option aria-label="None" value="" />
                        {
                            createCategoryList(category.categories).map(option => 
                                <option key={option.value} value={option.value}>{option.name}</option> 
                            )
                        }
                    </Select>
                </FormControl>
            </Popup>
            <Notification 
            notify={notify}
            setNotify={setNotify}/>
        </div>
    )
}

export default Category;
