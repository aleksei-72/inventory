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
    const [amount, setAmount] = useState(props.count)
    const [comment, setComment] = useState(props.comment)
    const [modalActive, setModalActive] = useState(false)


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
        comment: comment
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
            top: 35
        }),
        placeholder: () => ({
            color:'#282828',
            fontSize: 14
        }),

        singleValue: () => ({
            fontSize: 14
        }),
        dropdownIndicator: () => ({
            color:'#282828',
            position: 'absolute',
            top: 17,
            right: 20
        }),

        control: (_, { selectProps: { width } }) => ({
            width: 165,
            height: 35,
            margin: 10,
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
            top: 35
        }),
        placeholder: () => ({
            color:'#282828',
            fontSize: 14
        }),

        singleValue: () => ({
            fontSize: 14
        }),
        dropdownIndicator: () => ({
            color:'#282828',
            position: 'absolute',
            top: 17,
            right: 20
        }),

        control: (_, { selectProps: { width } }) => ({
            width: 175,
            height: 35,
            margin: 10,
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
            fontSize: 14
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

            // border: '1px solid #000'
        }),

        // singleValue: (provided, state) => {
        //     const opacity = state.isDisabled ? 0.5 : 1;
        //     const transition = 'opacity 300ms';

        //     return { ...provided, opacity, transition };
        // }
    }


    const CategoriesSelect = () => <Select placeholder={props.categoryTitle} defaultValue={props.categoryTitle} styles={customCategoriesSelectStyles} options={categoriesOption} 
    onChange={(e) => {
        dataItem.category = e.id    
        props.updateItem(dataItem)
    }}     
    />

    return (
        <div className={style.item}>
            <div className={`${style.cell__container} ${style.check}`}>
                <input checked={check} onChange={(e) => {
                    setCheck(e.currentTarget.checked)
                }} className={`${style.cell}`} type="checkbox" />
            </div>


            <div className={`${style.cell__container}  ${style.number}`}>
                <div className={`${style.cell}`}>
                    <textarea
                        onKeyPress={(e) => auto_grow(e.currentTarget)}
                        rows={1}
                        cols={8}
                        onBlur={() => props.updateItem(dataItem)}
                        onChange={(e) => {
                            setNumber(e.target.value)
                            console.log(e.currentTarget)
                            console.log(number)
                        }}
                        defaultValue={props.number}
                        className={`${style.number__field}`} />
                </div>
            </div>


            <div className={`${style.cell__container} ${style.category}`}>
                <CategoriesSelect />
            </div>


            <div className={`${style.cell__container} ${style.name}`}>

                <textarea
                    onKeyPress={(e) => auto_grow(e.currentTarget)}
                    // rows={2}
                    cols={26}
                    onBlur={(e) => props.updateItem(dataItem)}
                    onChange={(e) => {
                        setTitle(e.currentTarget.value)
                        console.log(e.currentTarget)
                        console.log(title)
                    }}
                    defaultValue={props.title}
                    className={`${style.title__field}`} />

            </div>

            <div className={`${style.cell__container} ${style.owner}`}>
                <OwnersSelect/>
            </div>

            <div className={`${style.cell__container} ${style.location}`}>
                <LocationSelect/>
            </div>

            <div className={`${style.cell__container} ${style.amount}`}>
                <textarea
                    onKeyPress={(e) => auto_grow(e.currentTarget)}
                    rows={1}
                    cols={5}


                    onBlur={(e) => props.updateItem(dataItem)}


                    onChange={(e) => {
                        setAmount(e.currentTarget.value)
                    }}
                    defaultValue={!props.count ? '0' : props.count}
                    className={`${style.amount__field}`} />
            </div>


            <div className={`${style.cell__container} ${style.comment}`}>
                <textarea
                    onKeyPress={(e) => auto_grow(e.currentTarget)}
                    rows={1}
                    cols={25}


                    onBlur={(e) => props.updateItem(dataItem)}


                    onChange={(e) => {
                        setComment(e.currentTarget.value)
                        console.log(e.currentTarget.value)
                        console.log(comment)
                    }}
                    defaultValue={!props.comment ? 'Исправно' : props.comment}
                    className={`${style.commemt__field}`} />
            </div>

            <button onClick={() => setModalActive(true)} className={style.delete_btn}><img src={deleteIcon} alt="delete item" /></button>

            <Modal active = {modalActive} setActive = {setModalActive} deleteItem = {props.deleteItem} id = {props.id}/>
        </div>
    )
}

export default TableItem