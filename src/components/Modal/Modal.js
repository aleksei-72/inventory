import React from 'react';
import style from './../../styles/modal.module.css'
import closeIcon from './../../img/icons/Close.svg';



const Modal = (props) => {
    return (
        <div className={ props.active ? `${style.modal} ${style.active}` : `${style.modal}`} onClick = { () => props.setActive(false) }>
            <div className={`${style.modal__content}`} onClick = { e => e.stopPropagation() }>
                <div className={`${style.title__container}`}>
                    <h2 className={`${style.title}`}>Удаление элемента</h2>
                    <button className={style.close_btn} onClick={() => props.setActive(false)}><img src={closeIcon} alt="close" /></button> 
                </div>
                <div className={`${style.warning__container}`}>
                    <p className={`${style.warning__container_text}`}>Вы действительно хотите <span>удалить данный элемент?</span></p>
                    <p className={`${style.warning__container_text}`}>Оменить данное действие будет <span>невозможно</span>.</p>
                </div>
                
                <div className={`${style.button__container}`}>                    
                    <button onClick={() => props.setActive(false)} className={style.cancel_btn}>Отмена</button>
                    <button onClick={props.categoryId ? () => {props.deleteCategory(props.categoryId)} : () => {props.deleteItem(props.id)}} className={style.delete_btn}>Удалить</button>
                </div> 
                   
            </div>
        </div>
    )
}

export default Modal