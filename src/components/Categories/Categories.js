import React, { useState } from 'react';
import style from './../../styles/categories.module.css'
import CategoriesItems from './CategoriesItems';
import { printItems } from './../../print';
import printIcon from './../../img/icons/Print.svg'
import addIcon from './../../img/icons/Add.svg'
import PrintModal from '../Modal/ReportModal';
import { importFiles } from '../../api/api';

const Categories = (props) => {
    console.log(props)
    const [visibility, setVisibility] = useState(false)
    const [printVisibility, setPrintVisibility] = useState(false)


    return (
        <div className={style.wrapper}>
            <div className={style.title__container}>
                <h2 className={style.title}>Категории</h2>
                <button className={`${style.link}`} onClick={() => setVisibility(!visibility)}>Открыть категории</button>
            </div>
            {visibility ? <CategoriesItems addCategoriesItem = {props.addCategory} deleteCategoriesItem = {props.deleteCategory} updateCategoriesItem = {props.updateCategory} searchString={props.searchString} categoriesItems={props.categoriesItems} /> : null}


            {(props.currentUser.role === "user" || props.currentUser.role === "admin" ) && <div className={style.button__container}>
                <button onClick={() => printItems()} className={style.print_button}>
                    <img src={printIcon} alt="print" className={style.button_icon} />
                </button>



                <button onClick={() => setPrintVisibility(!printVisibility)} className={style.add_item_button}>
                    Сформировать отчет
                </button>


                <input id = "uploadFile" type='file' multiple required 
                onClick={() => {
                    console.log('111')

                }}
                onChange = { (e) => {
                    console.log(e.target.files)
                    importFiles(e.target.files)
                } }
                className={style.import_file_input}
                />
                <label className={`${style.add_item_button} ${style.import_file_button}`} for = 'uploadFile'>Загрузить файл</label>


                <button onClick={props.addTableItem} className={style.add_item_button}>Добавить поле
                    <img src={addIcon} alt="add" className={style.button_icon} />
                </button>
            </div>}

            <PrintModal active = {printVisibility} setActive = {setPrintVisibility} ownersTableItems = {props.ownersTableItems} categoriesItems = {props.categoriesItems} roomsItems = {props.roomsItems}/>
            


        </div>
    )
}

export default Categories