import React, { useState } from 'react';
import style from './../../styles/tableItem.module.css';
import deleteIcon from './../../img/icons/Delete.svg';
import Select from 'react-select';

// import { NavLink } from 'react-router-dom';

const TableItem = (props) => {
    console.log(props)
    // let locationItem = props.location.map(el => <div key={el.id} className={style.location_item}>{`${el.department.title} (${el.number})`}</div>);    

    const [check, setCheck] = useState(false)
    const [number, setNumber] = useState(props.number)
    const [category, setCategory] = useState('')
    const [title, setTitle] = useState(props.title)
    const [owner, setOwner] = useState(props.owner.name)
    const [location, setLocation] = useState('')
    const [amount, setAmount] = useState(props.count)
    const [comment, setComment] = useState(props.comment)

    let dataItem = {
        id: props.id,
        check: check,
        category:category,
        number: number,
        title: title,
        profile:owner,
        location: location,
        count: amount,
        comment: comment
    }

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


    // let locationItem = props.location.map(el => {
    //         // console.log('el',props.title, el)
    //         // console.log(props.title)
    //         return <div key={el.id} className={style.location_item}>
    //         <textarea
    //             onKeyPress={(e) => auto_grow(e.currentTarget)}
    //             rows={1}
    //             cols={15}


    //             onBlur={(e) => props.updateItem(dataItem)}


    //             onChange={(e) => {
    //                 setLocation(e.currentTarget.value)
    //                 console.log(e.currentTarget.value)
    //                 // console.log(location)
    //                 // console.log(`${el.department.title} (${el.number})`)
    //             }}
    //             defaultValue={`${el.department.title} (${el.number})`}
    //             className={`${style.location__field}`} />
    //     </div>        
        
    // })
    // console.log('locatioItem', locationItem)
    // if(locationItem.length === 0) {
    //     // console.log(0)
    // }

    // console.log(locationItem)



    const statusStyles = {
        selectContainer: {
            background: '#fff'
        },
        select: {}
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

        singleValue: (provided, state) => {
            const opacity = state.isDisabled ? 0.5 : 1;
            const transition = 'opacity 300ms';

            return { ...provided, opacity, transition };
        }
    }

    const ownersOption = props.ownersTableItems.map( el => {
        return {value: el.name, label: el.name, id:el.id}
    } )

    // console.log(ownersOption)

    const OwnersSelect = () => <Select placeholder={props.owner.name} defaultValue={props.owner.name} styles={customUsersSelectStyles} options={ownersOption} onChange={(e) => {
        console.log(props)
        console.log(e)
        setOwner(e.id)
        console.log(dataItem)
        console.log(owner)
        props.updateItem(dataItem)
    }} />



    const roomsOption = props.roomsItems.map( el => {
        return {value: `${el.department.title} (${el.number})`, label: `${el.department.title} (${el.number})`, id:el.id}
    } )

    // console.log(roomsOption)

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

        singleValue: (provided, state) => {
            const opacity = state.isDisabled ? 0.5 : 1;
            const transition = 'opacity 300ms';

            return { ...provided, opacity, transition };
        }
    }

    const LocationSelect = () => <Select placeholder={`${locationVal[0].department.title} (${locationVal[0].number})`} 
                                         defaultValue={`${locationVal[0].department.title} (${locationVal[0].number})`} 
                                         styles={customRoomsSelectStyles} options={roomsOption} 
    onChange={(e) => {
        console.log(props)
        console.log(e)
        // console.log(checkLocation(props.location.department))
        setLocation(e.id)
        props.updateItem(dataItem)
    }} />

    // const LocationSelect = () => <Select placeholder={`${checkLocation(props.location).department.title} ${checkLocation(props.location).number}`}
    //     defaultValue={`${checkLocation(props.location).department.title} ${checkLocation(props.location).number}`}
    //     styles={customUsersSelectStyles} options={roomsOption}
    //     onChange={(e) => {
    //         console.log(props)
    //         console.log(e)
    //         console.log(checkLocation(props.location).department.title)
    //         // setOwner(e.value)
    //         // props.updateItem(dataItem)
    //     }} />

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

        singleValue: (provided, state) => {
            const opacity = state.isDisabled ? 0.5 : 1;
            const transition = 'opacity 300ms';

            return { ...provided, opacity, transition };
        }
    }



    const CategoriesSelect = () => <Select placeholder={props.categoryTitle} defaultValue={props.categoryTitle} styles={customCategoriesSelectStyles} options={categoriesOption} 
    onChange={(e) => {
        console.log(props)
        setCategory(e.id)
        console.log(e)
        console.log(category)
        props.updateItem(dataItem)
    }} 
    // onBlur = {(e) => props.updateItem(dataItem)}
    
    />




    return (
        <div className={style.item}>

            <div className={`${style.cell__container} ${style.check}`}>
                <input checked={check} onChange={(e) => {
                    setCheck(e.currentTarget.checked)
                    // console.log(check)
                    // console.log(e.target)
                }} className={`${style.cell}`} type="checkbox" />
            </div>



            {/* <div className={`${style.cell__container}  ${style.number}`}>
                <div onChange = { (e) => console.log(e.target.value) } className={`${style.cell}`}>{props.number}</div>
            </div> */}

            <div className={`${style.cell__container}  ${style.number}`}>
                <div className={`${style.cell}`}>
                    <textarea
                        onKeyPress={(e) => auto_grow(e.currentTarget)}
                        rows={1}
                        cols={8}



                        onBlur={(e) => props.updateItem(dataItem)}



                        onChange={(e) => {
                            setNumber(e.target.value)
                            console.log(e.currentTarget)
                            console.log(number)
                        }}
                        defaultValue={props.number}
                        className={`${style.number__field}`} />
                </div>
            </div>




            {/* <div className={`${style.cell__container} ${style.category}`}>
                <NavLink className={`${style.cell}`} to="#">{props.categoryTitle}</NavLink>
            </div> */}

            {/* <div className={`${style.cell__container} ${style.category}`}>
                <textarea
                    onKeyPress={(e) => auto_grow(e.currentTarget)}
                    rows={1}
                    cols={8}
                    onBlur={(e) => props.updateItem(dataItem)}
                    onChange={(e) => {
                        setCategory(e.target.value)
                        console.log(e.currentTarget)
                        console.log(category)
                    }}
                    defaultValue={props.categoryTitle}
                    className={`${style.category__field}`} />
            </div> */}

            <div className={`${style.cell__container} ${style.category}`}>
                <CategoriesSelect />
            </div>

            {/* <div className={`${style.cell__container} ${style.name}`}>
                <p className={`${style.cell}`}>{props.title}</p>
            </div> */}

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







            {/* <div className={`${style.cell__container} ${style.owner}`}>
                <p className={`${style.cell}`}>{!props.owner.name ? 'Не указано' : props.owner.name}</p>
            </div> */}

            {/* <div className={`${style.cell__container} ${style.owner}`}>
                <textarea
                    onKeyPress={(e) => auto_grow(e.currentTarget)}
                    rows={1}
                    cols={26}


                    onBlur={(e) => props.updateItem(dataItem)}


                    onChange={(e) => {
                        setOwner(e.currentTarget.value)
                        console.log(e.currentTarget)
                        console.log(owner)
                    }}
                    defaultValue={!props.owner.name ? 'Не указано' : props.owner.name}
                    className={`${style.title__field}`} />
            </div> */}



            <div className={`${style.cell__container} ${style.owner}`}>
                <OwnersSelect/>
            </div>

            {/* <div className={`${style.cell__container} ${style.location}`}>
                <p className={`${style.cell} `}>{props.location.length === 0 ?
                    <textarea
                        onKeyPress={(e) => auto_grow(e.currentTarget)}
                        rows={1}
                        cols={15}
                        onBlur={(e) => props.updateItem(dataItem)}
                        onChange={(e) => {
                            setLocation(e.currentTarget.value)
                            console.log(e.currentTarget.value)
                            console.log(location)
                        }}
                        defaultValue={`Не указано`}
                        className={`${style.location__field}`} 
                    /> : locationItem}</p>
            </div> */}

            <div className={`${style.cell__container} ${style.location}`}>
                <LocationSelect/>
            </div>



            {/* <div className={`${style.cell__container} ${style.amount}`}>
                <p className={`${style.cell}`}>{!props.count ? '0' : props.count}</p>
            </div> */}

            <div className={`${style.cell__container} ${style.amount}`}>
                <textarea
                    onKeyPress={(e) => auto_grow(e.currentTarget)}
                    rows={1}
                    cols={5}


                    onBlur={(e) => props.updateItem(dataItem)}


                    onChange={(e) => {
                        setAmount(e.currentTarget.value)
                        console.log(e.currentTarget.value)
                        console.log(amount)
                    }}
                    defaultValue={!props.count ? '0' : props.count}
                    className={`${style.amount__field}`} />
            </div>

            {/* <div className={`${style.cell__container} ${style.comments}`}>
                <p className={`${style.cell}`}>{!props.comment ? 'Исправно' : props.comment}</p>
            </div> */}

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

            <button onClick={() => props.deleteItem(props.id)} className={style.delete_btn}><img src={deleteIcon} alt="delete item" /></button>
        </div>
    )
}

export default TableItem