import React, { useState } from 'react';
import style from './../../styles/tableItem.module.css';
import deleteIcon from './../../img/icons/Delete.svg';
import Select from 'react-select';
import Modal from '../Modal/Modal';


const TableItem = (props) => {
    // console.log(props)

    const [check, setCheck] = useState(false)
    const [number, setNumber] = useState(props.number)
    // const [category, setCategory] = useState(props.categoryId)
    const [title, setTitle] = useState(props.title)
    const owner = props.owner.name
    // const [location, setLocation] = useState('')
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
        // console.log(locationItem)
        return locationItem
    }
    let locationVal = checkLocation(props.location)

    // console.log(locationVal)

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

    const customUsersSelectStyles = {
        menu: (provided, state) => ({
            ...provided,
            width: state.selectProps.width,
            borderBottom: '1px dotted pink',
            color: state.selectProps.menuColor,
            padding: 2,
            position: 'absolute',
            right: 20,
            top: 35,
            fontFamily: "Inter",
            fontStyle: "normal",
            fontWeight: "normal",
            lineHeight: "19px"
        }),
        placeholder: () => ({
            color:'#282828',
            fontSize: 14,
            fontFamily: "Inter",
            fontStyle: "normal",
            fontWeight: "normal",
            lineHeight: "19px"
        }),
        menuList: () => ({
            color:'#282828',
            fontSize: 14,
            fontFamily: "Inter",
            fontStyle: "normal",
            fontWeight: "normal",
            lineHeight: "19px"
        }),
        singleValue: () => ({
            fontSize: 14
        }),
        dropdownIndicator: () => ({
            color:'#282828',
            position: 'absolute',
            top: 7,
            right: 20
        }),

        control: (_, { selectProps: { width } }) => ({
            width: 165,
            height: 25,
            marginLeft: 10,
        }),

        // singleValue: (provided, state) => {
        //     const opacity = state.isDisabled ? 0.5 : 1;
        //     const transition = 'opacity 300ms';

        //     return { ...provided, opacity, transition };
        // }
    }

    const ownersOption = props.ownersTableItems.map( el => {
        return {value: el.name, label: el.name, id:el.id}
    } )


    const OwnersSelect = () => <Select placeholder={!props.owner.name ? 'Не указано' : props.owner.name} defaultValue={props.owner.name} styles={customUsersSelectStyles} options={ownersOption} onChange={(e) => {
        dataItem.profile = e.id
        props.updateItem(dataItem)
    }} />



    const roomsOption = props.roomsItems.map( el => {
        return {value: `${el.department.title} (${el.number})`, label: `${el.department.title} (${el.number})`, id:el.id}
    } )


    const customRoomsSelectStyles = {
        menu: (provided, state) => ({
            ...provided,
            width: state.selectProps.width,
            borderBottom: '1px dotted pink',
            color: state.selectProps.menuColor,
            padding: 2,
            position: 'absolute',
            right: 20,
            // maxHeight: 150,
            // overflowY: "scroll",
            // overflowX: "hidden",
            top: 35,
            fontFamily: "Inter",
            fontStyle: "normal",
            fontWeight: "normal",
            lineHeight: "19px"
        }),
        menuList: () => ({
            color:'#282828',
            fontSize: 14,
            fontFamily: "Inter",
            fontStyle: "normal",
            fontWeight: "normal",
            lineHeight: "19px"
        }),
        placeholder: () => ({
            color:'#282828',
            fontSize: 14,
            fontFamily: "Inter",
            fontStyle: "normal",
            fontWeight: "normal",
            lineHeight: "19px"
        }),

        singleValue: () => ({
            fontSize: 14
        }),
        dropdownIndicator: () => ({
            color:'#282828',
            position: 'absolute',
            top: 7,
            right: 20
        }),

        control: (_, { selectProps: { width } }) => ({
            width: 175,
            height: 25,
            marginLeft: 10,
        }),

        // singleValue: (provided, state) => {
        //     const opacity = state.isDisabled ? 0.5 : 1;
        //     const transition = 'opacity 300ms';

        //     return { ...provided, opacity, transition };
        // }
    }

    const LocationSelect = () => <Select placeholder={`${locationVal[0].department.title} (${locationVal[0].number})`} 
                                         defaultValue={`${locationVal[0].department.title} (${locationVal[0].number})`} 
                                         styles={customRoomsSelectStyles} options={roomsOption} 
    onChange={(e) => {
        dataItem.location = e.id
        props.updateItem(dataItem)
    }} />


    const categoriesOption = props.categoriesItems.map( el => {
        return {value: el.title, label: el.title, id:el.id}
    } )
    // console.log(categoriesOption)


    const customCategoriesSelectStyles = {
        menu: (provided, state) => ({
            ...provided,
            width: state.selectProps.width,
            borderBottom: '1px dotted pink',
            color: state.selectProps.menuColor,
            padding: 2,
            position: 'absolute',
            right: 20,
            top: 35
        }),
        placeholder: () => ({
            color:'#282828',
            fontSize: 14,
            fontFamily: "Inter",
            fontStyle: "normal",
            fontWeight: "normal",
            lineHeight: "19px"
        }),
        menuList: () => ({
            color:'#282828',
            fontSize: 14,
            fontFamily: "Inter",
            fontStyle: "normal",
            fontWeight: "normal",
            lineHeight: "19px"
        }),
        singleValue: () => ({
            fontSize: 14
        }),
        dropdownIndicator: () => ({
            color:'#282828',
            position: 'absolute',
            top: 7,
            right: 20
        }),

        control: (_, { selectProps: { width } }) => ({
            width: 145,
            height: 35,
            marginLeft: -10,
            hyphens: 'auto'
        }),

    }


    const CategoriesSelect = () => <Select placeholder={props.categoryTitle} defaultValue={props.categoryTitle} styles={customCategoriesSelectStyles} options={categoriesOption} 
    onChange={(e) => {
        dataItem.category = e.id    
        props.updateItem(dataItem)
    }}     
    />


        let checkStringLength = (string, stringLength) => {
            if(string === undefined || string === null) {
                string = "Наименование"
            }
            // console.log(Math.ceil(string.length/stringLength))
            if(string.length >= 30) {
                let res  =  (Math.ceil((string.length + 2)/stringLength)) * 25
                return res
            }
                return 26
        }

        let setPadding = (string) => {
            if(string === undefined || string === null) {
                // console.log(true)
                string = "Наименование"
            }
            if(string.length >= 30) {
                return 8
            }
            return 2
        }

    return (
        <div className={style.item}>
            <div className={`${style.cell__container} ${style.check}`}>
                <input checked={check} onChange={(e) => {
                    setCheck(e.currentTarget.checked)
                }} className={`${style.cell}`} type="checkbox" />
            </div>


            <div className={`${style.cell__container}  ${style.number}`}>
                <div className={`${style.cell}`}>

                    {(props.currentUser.role === "user" || props.currentUser.role === "admin" ) ? <textarea
                        onKeyPress={(e) => auto_grow(e.currentTarget)}
                        rows={1}
                        cols={10}
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
                    // onKeyPress={(e) => auto_grow(e.currentTarget)}
                    // rows={checkStringLength(props.title, 28)}
                    style = { {height: checkStringLength(props.title, 28), paddingTop: setPadding(props.title)} }
                    
                    cols={26}
                    onBlur={(e) => props.updateItem(dataItem)}
                    onChange={(e) => {
                        e.target.style.height = '32px';
                        e.target.style.height = e.target.scrollHeight + 'px';
                        setTitle(e.currentTarget.value)
                        console.log(e.currentTarget)
                        console.log(title)
                        // console.log(checkStringLength(props.title, 28))
                    }}
                    defaultValue={!props.title ? "Наименование" : props.title}
                    className={`${style.title__field} ${style.field}`}/> : <p>{!props.title ? "Наименование" : props.title}</p>}
               

            </div>

            {/* <div onMouseOver = { () => setInputVisibility(true) } onMouseLeave = { () => setInputVisibility(false) } className={`${style.cell__container} ${style.name}`}>

                {((props.currentUser.role === "user" || props.currentUser.role === "admin") && inputVisibility) ? <textarea
                    // onKeyPress={(e) => auto_grow(e.currentTarget)}
                    // rows={checkStringLength(props.title, 28)}
                    cols={26}
                    onBlur={(e) => props.updateItem(dataItem)}
                    onChange={(e) => {
                        e.target.style.height = '32px';
                        e.target.style.height = e.target.scrollHeight + 'px';
                        setTitle(e.currentTarget.value)
                        console.log(e.currentTarget)
                        console.log(title)
                        // console.log(checkStringLength(props.title, 28))
                    }}
                    defaultValue={!props.title ? "Наименование" : props.title}
                    className={`${style.title__field} ${style.field}`} /> : <p>{!props.title ? "Наименование" : props.title}</p>}

            </div> */}

            <div className={`${style.cell__container} ${style.owner}`}>
                {(props.currentUser.role === "user" || props.currentUser.role === "admin" ) ? <OwnersSelect/> : <p>{!props.owner.name ? 'Не указано' : props.owner.name}</p>}
                {/* <OwnersSelect/> */}
            </div>

            <div className={`${style.cell__container} ${style.location}`}>
                {(props.currentUser.role === "user" || props.currentUser.role === "admin" ) ? <LocationSelect/> : <p>{`${locationVal[0].department.title} (${locationVal[0].number})`}</p>}
                {/* <LocationSelect/> */}
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
                    // defaultValue={ '0' }
                    className={`${style.amount__field} ${style.field}`} /> : <p>{!props.count ? '0 шт' : props.count}</p>}
                
            </div>


            <div className={`${style.cell__container} ${style.price}`}>
                {(props.currentUser.role === "user" || props.currentUser.role === "admin" ) ? <textarea
                    rows={1}

                    onKeyPress={(e) => auto_grow(e.currentTarget)}
                    onBlur={(e) => props.updateItem(dataItem)}
                    onChange={(e) => {
                        setPrice(e.currentTarget.value)
                        console.log(price)
                    }}
                    defaultValue={!props.price? 0 : props.price}
                    className={`${style.amount__field} ${style.field}`} /> : <p>{!props.price? 0 : props.price}</p>}
                
            </div>



            <div className={`${style.cell__container} ${style.cost}`}>
                {(props.currentUser.role === "user" || props.currentUser.role === "admin" ) ? <textarea
                    rows={1}

                    disabled="disabled"
                    defaultValue={!NaN ? props.price * parseInt(props.count, 10) : 0}
                    // defaultValue={!props.cost ? "0" : props.cost}
                    className={`${style.amount__field} ${style.field}`} /> : <p>{!NaN ? props.price * parseInt(props.count, 10) : 0}</p>}
               
            </div>


            <div className={`${style.cell__container} ${style.comment}`}>
                {(props.currentUser.role === "user" || props.currentUser.role === "admin" ) ? <textarea
                style = { {height: checkStringLength(props.comment, 28), paddingTop: setPadding(props.comment)} }
                    onKeyPress={(e) => auto_grow(e.currentTarget)}
                    // rows={1}
                    // contenteditable="true"
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