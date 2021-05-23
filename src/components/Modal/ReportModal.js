import React from 'react';
import style from './../../styles/modal.module.css'
import closeIcon from './../../img/icons/Close.svg';
import Select from 'react-select';
import { createReport } from '../../api/api';



const PrintModal = (props) => {
    console.log(props)


    let dataItem = {
        filters: {
            room_id: null,
            profile_id: null,
            category_id: null,
            department_id: null
        },
        sort: "updated_at",
        order: "ASC",
        columns: ["room", "profile", "category", "department", "count", "number", "title", "price", "comment", "created_at", "updatedAt"]
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


    // const OwnersSelect = () => <Select placeholder={!props.owner.name ? 'Не указано' : props.owner.name} defaultValue={props.owner.name} styles={customUsersSelectStyles} options={ownersOption} onChange={(e) => {
    //     dataItem.profile = e.id
    //     props.updateItem(dataItem)
    // }} />

    const OwnersSelect = () => <Select placeholder={'Выбрать'} defaultValue={'Выбрать'} styles={customUsersSelectStyles} options={ownersOption} onChange={(e) => {
        console.log(e)
        dataItem.filters.profile_id = e.id
        console.log(dataItem)

        // props.updateItem(dataItem)
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


    // const CategoriesSelect = () => <Select placeholder={props.categoryTitle} defaultValue={props.categoryTitle} styles={customCategoriesSelectStyles} options={categoriesOption} 
    // onChange={(e) => {
    //     dataItem.category = e.id    
    //     props.updateItem(dataItem)
    // }}     
    // />

    
    const CategoriesSelect = () => <Select placeholder={'Выбрать'} defaultValue={'Выбрать'} styles={customCategoriesSelectStyles} options={categoriesOption} 
    onChange={(e) => {
        console.log(e)

        dataItem.filters.category_id = e.id  
        console.log(dataItem)

        // props.updateItem(dataItem)
    }}     
    />


    const roomsOption = props.roomsItems.map( el => {
        return {value: `${el.number}`, label: `${el.number}`, id:el.id}
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

    // const LocationSelect = () => <Select placeholder={`${locationVal[0].department.title} (${locationVal[0].number})`} 
    //                                      defaultValue={`${locationVal[0].department.title} (${locationVal[0].number})`} 
    //                                      styles={customRoomsSelectStyles} options={roomsOption} 
    // onChange={(e) => {
    //     dataItem.location = e.id
    //     props.updateItem(dataItem)
    // }} />
    const LocationSelect = () => <Select placeholder={`Выбрать`} 
                                         defaultValue={`Выбрать`} 
                                         styles={customRoomsSelectStyles} options={roomsOption} 
    onChange={(e) => {
        console.log(e)

        dataItem.filters.room_id = e.id 
        console.log(dataItem)

        // props.updateItem(dataItem)
    }} />


    return (
        <div className={ props.active ? `${style.modal} ${style.active}` : `${style.modal}`} onClick = { () => props.setActive(false) }>
            <div className={`${style.modal__content}`} onClick = { e => e.stopPropagation() }>


                <div className={`${style.title__container}`}>
                    <h2 className={`${style.title}`}>Формирование отчета</h2>
                    <button className={style.close_btn} onClick={() => props.setActive(false)}><img src={closeIcon} alt="close" /></button> 
                </div>
                <div className={`${style.warning__container}`}>
                    <OwnersSelect />
                </div>
                <div className={`${style.warning__container}`}>
                    <CategoriesSelect />
                </div>
                <div className={`${style.warning__container}`}>
                    <LocationSelect />
                </div>
                <div className={`${style.button__container}`}>                    
                    <button onClick={() => props.setActive(false)} className={style.cancel_btn}>Отмена</button>
                    <button onClick={() => {
                        console.log('1')
                        createReport(dataItem)
                    }} className={style.delete_btn}>Сформировать</button>
                </div>  



            </div>
        </div>
    )
}

export default PrintModal