import React from 'react';
import style from './../../styles/modal.module.css'
import closeIcon from './../../img/icons/Close.svg';
import Select from 'react-select';
import { createReport } from '../../api/api';


const ReportModal = (props) => {
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
        columns: ["room", "profile", "category", "department", "count", "number", "title", "price", "comment", "created_at", "updated_at"]
    }


    const customUsersSelectStyles = {
        menu: (provided, state) => ({
            ...provided,
            width: state.selectProps.width,
            borderBottom: '1px dotted pink',
            // color: state.selectProps.menuColor,
            color: '#282828',
            padding: 2,
            position: 'absolute',
            width: 230,
            // right: 20,
            // top: 35
        }),
        placeholder: () => ({
            color: '#282828',
            fontSize: 14
        }),

        singleValue: () => ({
            color: '#282828',
            fontSize: 14
        }),
        dropdownIndicator: () => ({
            color: '#282828',
            position: 'absolute',
            top: 6,
            right: 10
        }),

        control: (_, { selectProps: { width } }) => ({
            width: 230,
            height: 35,
            // marginRight: 8,
            border: "1px solid #D1D1D1",
            borderRadius: "3px"
        })
    }

    const ownersOption = props.ownersTableItems.map(el => {
        return { value: el.name, label: el.name, id: el.id }
    })


    // const OwnersSelect = () => <Select placeholder={!props.owner.name ? 'Не указано' : props.owner.name} defaultValue={props.owner.name} styles={customUsersSelectStyles} options={ownersOption} onChange={(e) => {
    //     dataItem.profile = e.id
    //     props.updateItem(dataItem)
    // }} />

    const OwnersSelect = () => <Select placeholder={'Выбрать'} defaultValue={'Выбрать'} styles={customUsersSelectStyles} options={ownersOption} onChange={(e) => {
        console.log(e)
        dataItem.filters.profile_id = e.id
        console.log(dataItem)
    }} />



    const categoriesOption = props.categoriesItems.map(el => {
        return { value: el.title, label: el.title, id: el.id }
    })

    const customCategoriesSelectStyles = {
        menu: (provided, state) => ({
            ...provided,
            width: state.selectProps.width,
            borderBottom: '1px dotted pink',
            color: '#282828',
            padding: 2,
            position: 'absolute',
            width: 145,
            // left: -9
            // right: -20,
            // top: 35
        }),
        placeholder: () => ({
            color: '#282828',
            fontSize: 14
        }),

        singleValue: () => ({
            color: '#282828',
            fontSize: 14
        }),
        dropdownIndicator: () => ({
            color: '#282828',
            position: 'absolute',
            top: 6,
            right: 10
        }),

        control: (_, { selectProps: { width } }) => ({
            width: 145,
            height: 35,
            // marginLeft: -10,
            hyphens: 'auto',
            border: "1px solid #D1D1D1",
            borderRadius: "3px"
            // border: '1px solid #000'
        })
    }

    const CategoriesSelect = () => <Select placeholder={'Выбрать'} defaultValue={'Выбрать'} styles={customCategoriesSelectStyles} options={categoriesOption}
        onChange={(e) => {
            console.log(e)
            dataItem.filters.category_id = e.id
            console.log(dataItem)
        }}
    />


    const roomsOption = props.roomsItems.map(el => {
        return { value: `${el.number}`, label: `${el.number}`, id: el.id }
    })


    const customRoomsSelectStyles = {
        menu: (provided, state) => ({
            ...provided,
            width: state.selectProps.width,
            borderBottom: '1px dotted pink',
            color: '#282828',
            padding: 2,
            position: 'absolute',
            width: 115,
            // right: 20,
            // top: 35
        }),
        placeholder: () => ({
            color: '#282828',
            fontSize: 14
        }),

        singleValue: () => ({
            color: '#282828',
            fontSize: 14
        }),
        dropdownIndicator: () => ({
            color: '#282828',
            position: 'absolute',
            top: 6,
            right: 10
        }),

        control: (_, { selectProps: { width } }) => ({
            width: 115,
            height: 35,
            // marginRight: 8,
            border: "1px solid #D1D1D1",
            borderRadius: "3px"
        }),
    }

    const LocationSelect = () => <Select placeholder={`Выбрать`}
        defaultValue={`Выбрать`}
        styles={customRoomsSelectStyles} options={roomsOption}
        onChange={(e) => {
            console.log(e)
            dataItem.filters.room_id = e.id
            console.log(dataItem)
        }} />




    // columns: ["room", "profile", "category", "department", "count", "number", "title", "price", "comment", "created_at", "updatedAt"]


    const columnsOption = [
        { value: 'room', label: 'Кабинеты' },
        { value: 'profile', label: 'Ответсвенный' },
        { value: 'category', label: 'Категория' },
        { value: 'department', label: 'Место' },
        { value: 'count', label: 'Количество' },
        { value: 'number', label: 'Номер' },
        { value: 'title', label: 'Наименование' },
        { value: 'price', label: 'Цена' },
        { value: 'comment', label: 'Комментарий' },
        { value: 'created_at', label: 'Дата создания' },
        { value: 'updated_at', label: 'Дата обновления' },
    ];
    // console.log(categoriesOption)


    const customColumnsSelectStyles = {
        menu: (provided, state) => ({
            ...provided,
            width: state.selectProps.width,
            borderBottom: '1px dotted pink',
            color: '#282828',
            padding: 2,
            position: 'absolute',
            width: "500px",
            // right: 20,
            // top: 35
        }),
        placeholder: () => ({
            color: '#282828',
            fontSize: 14
        }),

        singleValue: () => ({
            color: '#282828',
            fontSize: 14
        }),
        dropdownIndicator: () => ({
            color: '#282828',
            position: 'absolute',
            top: 8,
            right: 10
        }),
        indicatorContainer: () => ({
            color: '#282828'
        }),
        control: (_, { selectProps: { width } }) => ({
            width: "500px",
            height: 35,
            margin: "0px auto",
            hyphens: 'auto',
            border: "1px solid #D1D1D1",
            borderRadius: "3px"

            // border: '1px solid #000'
        }),
        indicatorsContainer: () => ({
            position: "absolute",
            width: 66,
            display: "flex",
            justifyContent: "space-between",
            right: 0,
            top: 0
        })
    }


    const ColumnsSelect = () => <Select isMulti={true} placeholder={'Выбрать'} defaultValue={'Выбрать'} styles={customColumnsSelectStyles} options={columnsOption}
        onChange={(e) => {
            console.log(e)
            let selectedColumns = []
            e.forEach(item => {
                console.log(item)
                selectedColumns.push(item.value)
            })

            console.log(selectedColumns)
            dataItem.columns = selectedColumns
            console.log(dataItem)

            // props.updateItem(dataItem)
        }}
    />






    return (
        <div className={props.active ? `${style.modal} ${style.active} ${style.reportModal}` : `${style.modal} ${style.reportModal}`} onClick={() => props.setActive(false)}>
            <div className={`${style.modal__content} ${style.reportModal__content}`} onClick={e => e.stopPropagation()}>


                <div className={`${style.title__container}`}>
                    <h2 className={`${style.title}`}>Формирование отчета</h2>
                    <button className={style.close_btn} onClick={() => props.setActive(false)}><img src={closeIcon} alt="close" /></button>
                </div>

                <div className={`${style.reportParams__container}`}>
                    <div className={`${style.reportParams__item}`}>
                        <div className={`${style.reportParams__title}`}>Кабинет</div>
                        <LocationSelect />
                    </div>
                    <div className={`${style.reportParams__item}`}>
                        <div className={`${style.reportParams__title}`}>Ответственный</div>
                        <OwnersSelect />
                    </div>
                    <div className={`${style.reportParams__item}`}>
                        <div className={`${style.reportParams__title}`}>Категория</div>
                        <CategoriesSelect />
                    </div>
                </div>

                <div className={`${style.reportColumns__container}`}>
                    <div className={`${style.reportColumns__item}`}>
                        <div className={`${style.reportColumns__title}`}>Выбранные колонки</div>
                        <ColumnsSelect />
                    </div>
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

export default ReportModal