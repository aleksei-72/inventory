import React from 'react';
import { getItems } from '../../api/api';
import style from './../../styles/categories.module.css';
// import { getCategoriesItems } from './../../api/api';
import { useDispatch } from 'react-redux';
import { setCategoryId } from './../../reducers/categories';
import { setCategoryTableItems } from './../../reducers/tableItems';


const CategoriesItem = (props) => {
    console.log(props)
    const dispatch = useDispatch()
    return (
        <div onClick={() => {
            getItems(0, props.id).then((res) => {
                console.log(res.data)
                dispatch(setCategoryTableItems(res.data.items))
            })
            dispatch(setCategoryId(props.id))
        }} className={`${style.item}`}>
            <div>{props.title}</div>
        </div>
    )
}

export default CategoriesItem