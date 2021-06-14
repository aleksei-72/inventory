import React, { useState } from 'react';
import style from './../../styles/tableItem.module.css';
import deleteIcon from './../../img/icons/Delete.svg';
import Select from 'react-select';
import Modal from '../Modal/Modal';
import { checkStringLength, setPadding } from '../../setInputsWidth';
import { customRoomsSelectStyles, customUsersSelectStyles } from '../../styles/selects/reactSelectStyles';
import { customCategoriesSelectStyles } from './../../styles/selects/reactSelectStyles';


const TableItem = (props) => {
    const [check, setCheck] = useState(false)
    const [number, setNumber] = useState(props.number)
    const [title, setTitle] = useState(props.title)
    const owner = props.owner.name
    const [amount, setAmount] = useState(`${props.count}`)
    const [comment, setComment] = useState(props.comment)
    const [price, setPrice] = useState(props.price)
    const [modalActive, setModalActive] = useState(false)
    const [inputVisibility, setInputVisibility] = useState(false)


    function auto_grow(element) {
        element.style.height = "5px";
        element.style.height = (element.scrollHeight) + "px";
    }

    let checkLocation = (locationItem) => {
        if(locationItem.length === 0) {
            locationItem = [{
                number:'', 
                department: {title: 'Не указано'}
            }]
        }
        return locationItem
    }
    let locationVal = checkLocation(props.location)

    let dataItem = {
        id: props.id,
        check: check,
        category:props.categoryId,
        number: number,
        title: title,
        profile:owner,
        location: locationVal[0].id,
        count: amount,
        comment: comment,
        price: price
    }

    const ownersOption = props.ownersTableItems.map( el => {
        return {value: el.name, label: el.name, id:el.id}
    } )

    const roomsOption = props.roomsItems.map( el => {
        return {value: `${el.department.title} (${el.number})`, label: `${el.department.title} (${el.number})`, id:el.id}
    } )

    const categoriesOption = props.categoriesItems.map( el => {
        return {value: el.title, label: el.title, id:el.id}
    } )


    const OwnersSelect = () => <Select placeholder={!props.owner.name ? 'Не указано' : props.owner.name} defaultValue={props.owner.name} styles={customUsersSelectStyles} options={ownersOption} onChange={(e) => {
        dataItem.profile = e.id
        props.updateItem(dataItem)
    }} />

    const LocationSelect = () => <Select placeholder={`${locationVal[0].department.title} (${locationVal[0].number})`} 
                                         defaultValue={`${locationVal[0].department.title} (${locationVal[0].number})`} 
                                         styles={customRoomsSelectStyles} options={roomsOption} 
    onChange={(e) => {
        dataItem.location = e.id
        props.updateItem(dataItem)
    }} />

    const CategoriesSelect = () => <Select placeholder={props.categoryTitle} defaultValue={props.categoryTitle} styles={customCategoriesSelectStyles} options={categoriesOption} 
    onChange={(e) => {
        dataItem.category = e.id    
        props.updateItem(dataItem)
    }}     
    />

    return (
        <div className={style.item}>
            {/* <div className={`${style.cell__container} ${style.check}`}>
                <input checked={check} onChange={(e) => {
                    setCheck(e.currentTarget.checked)
                }} className={`${style.cell}`} type="checkbox" />
            </div> */}

            <div className={(props.currentUser.role === "admin" || props.currentUser.role === "user") ? `${style.cell__container}  ${style.number}` : `${style.cell__container}  ${style.number} ${style.cell__container_user}`}>
                <div className={`${style.cell}`}>

                    {(props.currentUser.role === "user" || props.currentUser.role === "admin" ) ? <textarea
                        onKeyPress={(e) => auto_grow(e.currentTarget)}
                        rows={1}
                        cols={13}
                        onBlur={() => props.updateItem(dataItem)}
                        onChange={(e) => {
                            setNumber(e.target.value)
                            console.log(e.currentTarget)
                            console.log(number)
                        }}
                        defaultValue={props.number}
                        className={`${style.number__field} ${style.field}`}  placeholder="0"/> : <p>{props.number}</p>}
                    
                </div>
            </div>


            <div className={`${style.cell__container} ${style.category}`}>
                {(props.currentUser.role === "user" || props.currentUser.role === "admin" ) ? <CategoriesSelect /> : <p>{props.categoryTitle}</p>}
                
            </div>


            <div className={`${style.cell__container} ${style.name}`}>
            {(props.currentUser.role === "user" || props.currentUser.role === "admin" ) ? <textarea
                    style = { {height: checkStringLength(props.title, 28), paddingTop: setPadding(props.title)} }
                    
                    cols={26}
                    onBlur={(e) => props.updateItem(dataItem)}
                    onChange={(e) => {
                        e.target.style.height = '32px';
                        e.target.style.height = e.target.scrollHeight + 'px';
                        setTitle(e.currentTarget.value)
                        console.log(e.currentTarget)
                        console.log(title)
                    }}
                    defaultValue={!props.title ? "Наименование" : props.title}
                    className={`${style.title__field} ${style.field}`}/> : <p>{!props.title ? "Наименование" : props.title}</p>}
               

            </div>

            <div className={`${style.cell__container} ${style.owner}`}>
                {(props.currentUser.role === "user" || props.currentUser.role === "admin" ) ? <OwnersSelect/> : <p>{!props.owner.name ? 'Не указано' : props.owner.name}</p>}
            </div>

            <div className={`${style.cell__container} ${style.location}`}>
                {(props.currentUser.role === "user" || props.currentUser.role === "admin" ) ? <LocationSelect/> : <p>{`${locationVal[0].department.title} (${locationVal[0].number})`}</p>}
            </div>


            <div className={`${style.cell__container} ${style.amount}`}>
                {(props.currentUser.role === "user" || props.currentUser.role === "admin" ) ? <textarea
                    onKeyPress={(e) => auto_grow(e.currentTarget)}
                    rows={1}
                    cols={5}
                    onBlur={(e) => props.updateItem(dataItem)}
                    onChange={(e) => {
                        setAmount(e.currentTarget.value)
                        console.log(amount)
                    }}
                    defaultValue={!props.count ? '0 шт' : props.count}
                    className={`${style.amount__field} ${style.field}`} /> : <p>{!props.count ? '0 шт' : props.count}</p>}
                
            </div>


            <div className={`${style.cell__container} ${style.price}`}>
                {(props.currentUser.role === "user" || props.currentUser.role === "admin" ) ? <textarea
                    rows={1}
                    onKeyPress={(e) => auto_grow(e.currentTarget)}
                    onBlur={(e) => {
                        let newPrice = parseInt(e.currentTarget.value.replace(/[^\d]/g, ''))

                        if (isNaN(newPrice)) {
                            newPrice = 0
                        }
                        newPrice = new Intl.NumberFormat('ru-RU').format(newPrice)

                        e.currentTarget.value = newPrice
                        props.updateItem(dataItem)
                    }}
                    onChange={(e) => {
                        let newPrice = e.currentTarget.value.replace(/[^\d]/g, '')
                        
                        if (isNaN(parseInt(newPrice))) {
                            newPrice = 0
                        }
                        setPrice(newPrice)

                        console.log(price)
                    }}
                    defaultValue={!props.price? 0 : (new Intl.NumberFormat('ru-RU').format(props.price))}
                    className={`${style.amount__field} ${style.field}`} /> : <p>{!props.price? 0 : props.price}</p>}                
            </div>



            {/* <div className={`${style.cell__container} ${style.cost}`}>
                {(props.currentUser.role === "user" || props.currentUser.role === "admin" ) ? <textarea
                    rows={1}

                    disabled="disabled"
                    defaultValue={!NaN ? props.price * parseInt(props.count, 10) : 0}
                    className={`${style.amount__field} ${style.field}`} /> : <p>{!NaN ? props.price * parseInt(props.count, 10) : 0}</p>}
               
            </div> */}

            <div className={`${style.cell__container} ${style.cost}`}>
                {<textarea
                    rows={1}

                    disabled="disabled"
                    value={!NaN ? new Intl.NumberFormat('ru-RU').format(props.price * parseInt(props.count, 10)) : 0}
                    className={`${style.amount__field} ${style.field}`} />}
               
            </div>


            <div className={`${style.cell__container} ${style.comment}`}>
                {(props.currentUser.role === "user" || props.currentUser.role === "admin" ) ? <textarea
                style = { {height: checkStringLength(props.comment, 28), paddingTop: setPadding(props.comment)} }
                    onKeyPress={(e) => auto_grow(e.currentTarget)}
                    cols={25}
                    onBlur={(e) => props.updateItem(dataItem)}
                    onChange={(e) => {
                        setComment(e.currentTarget.value)
                        console.log(e.currentTarget.value)
                        console.log(comment)
                    }}
                    defaultValue={!props.comment ? 'Исправно' : props.comment}
                    className={`${style.commemt__field} ${style.field}`} /> : <p>{!props.comment ? 'Исправно' : props.comment}</p>}
               
            </div>

            {(props.currentUser.role === "user" || props.currentUser.role === "admin" ) && <button onClick={() => setModalActive(true)} className={style.delete_btn}><img src={deleteIcon} alt="delete item" /></button>}

            <Modal active = {modalActive} setActive = {setModalActive} deleteItem = {props.deleteItem} id = {props.id}/>
        </div>
    )
}


export default TableItem