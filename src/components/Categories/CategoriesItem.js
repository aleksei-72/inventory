import React, { useState } from 'react';
import { getItems } from '../../api/api';
import style from './../../styles/categories.module.css';
import { useDispatch } from 'react-redux';
import { setCategoryId } from './../../reducers/categories';
import { setCategoryTableItems } from './../../reducers/tableItems';
import deleteIcon from './../../img/icons/Delete.svg';
import editIcon from './../../img/icons/Edit.svg';
import Modal from './../Modal/Modal';

const CategoriesItem = (props) => {
    const [editCategory, setEditCategory] = useState(false)
    const [modalActive, setModalActive] = useState(false)
    console.log(props)
    const dispatch = useDispatch()
    let dataItem = {
        id: props.id,
        title: props.title
    }

    console.log(editCategory && false)
    return (
        <div
        onClick={(e) => {
            console.log(props)
            !props.visibilityButtons && getItems(0, props.id, '').then( res => {
                console.log(res)
                dispatch(setCategoryTableItems(res.data.items))
            })
            dispatch(setCategoryId(props.id))
            
            }} 
            className={`${style.item}`}>

            <input
                onBlur={(e) => {
                    dataItem.title = e.target.value
                    console.log(dataItem)
                    props.updateCategoriesItem(dataItem)
                }}
                onChange={(e) => {
                    e.stopPropagation()
                    console.log(e.target.value)
                }}
                disabled = { !editCategory && true}
                defaultValue={props.title}
                className={editCategory ? `${style.name__field} ${style.active_edit}` : `${style.name__field}`} />
            {(props.currentUser.role === "user" || props.currentUser.role === "admin" ) && <>

                {props.visibilityButtons ? <button onClick={(e) => {
                    setModalActive(true)
                    // props.deleteCategoriesItem(props.id)
                    e.stopPropagation()
                }} className={style.delete_btn}><img src={deleteIcon} alt="delete item" /></button> : <button onClick={(e) => {
                    // props.deleteCategoriesItem(props.id)
                    setEditCategory(!editCategory)
                    e.stopPropagation()
                }} className={`${style.delete_btn}`}><img src={editIcon} alt="delete item" /></button>}
            </>
            }
            {/* {props.visibilityButtons ? <button onClick={(e) => {
                props.deleteCategoriesItem(props.id)
                e.stopPropagation()
            }} className={style.delete_btn}><img src={deleteIcon} alt="delete item" /></button> : <button onClick={(e) => {
                // props.deleteCategoriesItem(props.id)
                setEditCategory(!editCategory)
                e.stopPropagation()
            }} className={`${style.delete_btn}`}><img src={editIcon} alt="delete item" /></button>} */}


            <Modal active = {modalActive} setActive = {setModalActive} categoryId = {props.id} deleteCategory = {props.deleteCategoriesItem} deleteItem = {props.deleteItem} id = {props.id}/>
        </div>
    )
}

export default CategoriesItem