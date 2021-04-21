import React, { useEffect, useState } from 'react';
import style from './../../styles/categories.module.css'
import CategoriesItems from './CategoriesItems';


const Categories = (props) => {
    console.log(props)
    const [visibility, setVisibility] = useState(false)
    return (
        <div className = {style.wrapper}>
            <div className = {style.title__container}>
                <h2 className = {style.title}>Категории</h2>
                <button className = {`${style.link}`} onClick = {() => setVisibility(!visibility)}>Открыть категории</button>
            </div>
            {visibility ? <CategoriesItems searchString = {props.searchString} categoriesItems = {props.categoriesItems} /> : null}
        </div>
    )
}

export default Categories