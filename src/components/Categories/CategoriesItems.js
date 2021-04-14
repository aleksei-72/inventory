import React, { useEffect } from 'react';
import CategoriesItem from './CategoriesItem';
import { useDispatch } from 'react-redux';
import { getCategories } from './../../api/api';
import { setCategoriesItems } from './../../reducers/categories';


const CategoriesItems = (props) => {
    console.log(props)
    const dispatch = useDispatch()
    useEffect(() => {
        getCategories().then(res => {
            console.log(res)
            dispatch(setCategoriesItems(res))
        })
    }, [])
    return (
        <div>
            {
                props.categoriesItems.map((el) => {
                    console.log(el)
                    return <CategoriesItem title = {el.title} id = {el.id}/>
                })
            }
        </div>
    )
}

export default CategoriesItems