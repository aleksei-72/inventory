import React, { useEffect, useState } from 'react';
import CategoriesItem from './CategoriesItem';
import { useDispatch } from 'react-redux';
import { getCategories } from './../../api/api';
import { setCategoriesItems } from './../../reducers/categories';
import style from './../../styles/categories.module.css';


const CategoriesItems = (props) => {
    console.log(props)

    const [visibilityButtons, setVisibilityButtons] = useState(false)

    const dispatch = useDispatch()


    useEffect(() => {
        getCategories().then(res => {
            console.log(res)
            dispatch(setCategoriesItems(res))
        })
    }, [])



    return (
        <div className = {`${style.categoriesItems__container}`}>
            {
                props.categoriesItems.map((el) => {
                    // console.log(el)
                    return <CategoriesItem  visibilityButtons ={visibilityButtons} deleteCategoriesItem = {props.deleteCategoriesItem} updateCategoriesItem = {props.updateCategoriesItem} searchString = {props.searchString} title = {el.title} key= {el.id} id = {el.id}/>
                })
            }
            <button onClick = { (e) => {
                    e.stopPropagation()
                    props.addCategoriesItem()
                } } className = {`${style.categoriesItems__button} ${style.categoriesItems__button_add}`}>Добавить категорию</button>
            <button onClick = { () => setVisibilityButtons(!visibilityButtons)} className = {`${style.categoriesItems__button} ${style.categoriesItems__button_delete}`}>{!visibilityButtons ? 'Удалить категорию' : 'Применить изменения'}</button>
        </div>
    )
}

export default CategoriesItems