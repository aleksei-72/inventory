import React, { useState } from 'react';
import style from './../../styles/categories.module.css'
import CategoriesItems from './CategoriesItems';
import { printItems } from './../../print';
import printIcon from './../../img/icons/Print.svg'
import addIcon from './../../img/icons/Add.svg'

const Categories = (props) => {
    console.log(props)
    const [visibility, setVisibility] = useState(false)
    return (
        <div className={style.wrapper}>
            <div className={style.title__container}>
                <h2 className={style.title}>Категории</h2>
                <button className={`${style.link}`} onClick={() => setVisibility(!visibility)}>Открыть категории</button>
            </div>
            {visibility ? <CategoriesItems searchString={props.searchString} categoriesItems={props.categoriesItems} /> : null}



            <div className={style.button__container}>
                <button onClick={() => printItems()} className={style.print_button}>
                    <img src={printIcon} alt="print" className={style.button_icon} />
                </button>



                <button onClick={props.addTableItem} className={style.add_item_button}>Добавить поле
                    <img src={addIcon} alt="add" className={style.button_icon} />
                </button>
            </div>





        </div>
    )
}

export default Categories