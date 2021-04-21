import React, { useState } from 'react';
import style from './../../styles/tableItem.module.css';
import deleteIcon from './../../img/icons/Delete.svg';
// import { NavLink } from 'react-router-dom';

const TableItem = (props) => {
    // console.log(props)
    // let locationItem = props.location.map(el => <div key={el.id} className={style.location_item}>{`${el.department.title} (${el.number})`}</div>);    
    const [check, setCheck] = useState(false)
    const [number, setNumber] = useState(props.number)
    const [category, setCategory] = useState('')
    const [title, setTitle] = useState(props.title)
    const [owner, setOwner] = useState()
    const [location, setLocation] = useState('')
    const [amount, setAmount] = useState(props.count)
    const [comment, setComment] = useState(props.comment)

    let dataItem = {
        id: props.id,
        check: check,
        category:category,
        number: number,
        title: title,
        owner:owner,
        location: location,
        count: amount,
        comment: comment
    }

    function auto_grow(element) {
        element.style.height = "5px";
        element.style.height = (element.scrollHeight) + "px";
    }


    let locationItem = props.location.map(el => {
            // console.log('el',props.title, el)
            // console.log(props.title)
            return <div key={el.id} className={style.location_item}>
            <textarea
                onKeyPress={(e) => auto_grow(e.currentTarget)}
                rows={1}
                cols={15}


                onBlur={(e) => props.upadteItem(dataItem)}


                onChange={(e) => {
                    setLocation(e.currentTarget.value)
                    console.log(e.currentTarget.value)
                    // console.log(location)
                    // console.log(`${el.department.title} (${el.number})`)
                }}
                defaultValue={`${el.department.title} (${el.number})`}
                className={`${style.location__field}`} />
        </div>        
        
    })
    // console.log('locatioItem', locationItem)
    if(locationItem.length === 0) {
        // console.log(0)
    }
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



                        onBlur={(e) => props.upadteItem(dataItem)}



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

            <div className={`${style.cell__container} ${style.category}`}>
                <textarea
                    onKeyPress={(e) => auto_grow(e.currentTarget)}
                    rows={1}
                    cols={8}
                    onBlur={(e) => props.upadteItem(dataItem)}
                    onChange={(e) => {
                        setCategory(e.target.value)
                        console.log(e.currentTarget)
                        console.log(category)
                    }}
                    defaultValue={props.categoryTitle}
                    className={`${style.category__field}`} />
            </div>

            {/* <div className={`${style.cell__container} ${style.name}`}>
                <p className={`${style.cell}`}>{props.title}</p>
            </div> */}

            <div className={`${style.cell__container} ${style.name}`}>

                <textarea
                    onKeyPress={(e) => auto_grow(e.currentTarget)}
                    // rows={2}
                    cols={26}


                    onBlur={(e) => props.upadteItem(dataItem)}


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

            <div className={`${style.cell__container} ${style.owner}`}>
                <textarea
                    onKeyPress={(e) => auto_grow(e.currentTarget)}
                    rows={1}
                    cols={26}


                    onBlur={(e) => props.upadteItem(dataItem)}


                    onChange={(e) => {
                        setOwner(e.currentTarget.value)
                        console.log(e.currentTarget)
                        console.log(owner)
                    }}
                    defaultValue={!props.owner.name ? 'Не указано' : props.owner.name}
                    className={`${style.title__field}`} />
            </div>

            <div className={`${style.cell__container} ${style.location}`}>
                <p className={`${style.cell} `}>{props.location.length === 0 ?
                    <textarea
                        onKeyPress={(e) => auto_grow(e.currentTarget)}
                        rows={1}
                        cols={15}
                        onBlur={(e) => props.upadteItem(dataItem)}
                        onChange={(e) => {
                            setLocation(e.currentTarget.value)
                            console.log(e.currentTarget.value)
                            console.log(location)
                        }}
                        defaultValue={`Не указано`}
                        className={`${style.location__field}`} 
                    /> : locationItem}</p>
            </div>

            {/* <div className={`${style.cell__container} ${style.amount}`}>
                <p className={`${style.cell}`}>{!props.count ? '0' : props.count}</p>
            </div> */}

            <div className={`${style.cell__container} ${style.amount}`}>
                <textarea
                    onKeyPress={(e) => auto_grow(e.currentTarget)}
                    rows={1}
                    cols={5}


                    onBlur={(e) => props.upadteItem(dataItem)}


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


                    onBlur={(e) => props.upadteItem(dataItem)}


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