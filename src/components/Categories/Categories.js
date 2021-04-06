import React, { useState } from 'react';
import style from './../../styles/categories.module.css'
import CategoriesItems from './CategoriesItems';


const Categories = (props) => {
    console.log(props)
    const [visibility, setVisibility] = useState(true)
    return (
        <div className = {style.wrapper}>
            <h2>Категории</h2>
            <button onClick = {() => setVisibility(!visibility)}>Открыть категории</button>
            {visibility ? <CategoriesItems /> : null}
        </div>
    )
}

export default Categories