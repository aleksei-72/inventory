import React from 'react';
import style from './../../styles/modal.module.css'
import closeIcon from './../../img/icons/Close.svg';
import Select from 'react-select';
import { createReport } from '../../api/api';
import { customUsersReportSelectStyles } from '../../styles/selects/reactSelectStyles';
import { customCategoriesReportSelectStyles, customRoomsReportSelectStyles, customColumnsReportSelectStyles } from './../../styles/selects/reactSelectStyles';


const ReportModal = (props) => {
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

   

    const ownersOption = props.ownersTableItems.map(el => {
        return { value: el.name, label: el.name, id: el.id }
    })

    const OwnersSelect = () => <Select placeholder={'Выбрать'} defaultValue={'Выбрать'} styles={customUsersReportSelectStyles} options={ownersOption} onChange={(e) => {
        console.log(e)
        dataItem.filters.profile_id = e.id
        console.log(dataItem)
    }} />



    const categoriesOption = props.categoriesItems.map(el => {
        return { value: el.title, label: el.title, id: el.id }
    })

    

    const CategoriesSelect = () => <Select placeholder={'Выбрать'} defaultValue={'Выбрать'} styles={customCategoriesReportSelectStyles} options={categoriesOption}
        onChange={(e) => {
            console.log(e)
            dataItem.filters.category_id = e.id
            console.log(dataItem)
        }}
    />


    const roomsOption = props.roomsItems.map(el => {
        return { value: `${el.number}`, label: `${el.number}`, id: el.id }
    })


    

    const LocationSelect = () => <Select placeholder={`Выбрать`}
        defaultValue={`Выбрать`}
        styles={customRoomsReportSelectStyles} options={roomsOption}
        onChange={(e) => {
            console.log(e)
            dataItem.filters.room_id = e.id
            console.log(dataItem)
        }} />


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


    const ColumnsSelect = () => <Select isMulti={true} placeholder={'Выбрать'} defaultValue={'Выбрать'} styles={customColumnsReportSelectStyles} options={columnsOption}
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