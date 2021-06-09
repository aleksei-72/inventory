import React, { useState } from 'react';
import style from './../../styles/users.module.css';
import deleteIcon from './../../img/icons/Delete.svg';
// import { NavLink } from 'react-router-dom';
import Select from 'react-select'
// import { updateUserPassword } from '../../api/api';


function normalEndingForWord(number, variants) {
    let cases = [2, 0, 1, 1, 1, 2];
    return number + " " + variants[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
}


function dateTimeToNormal(dateTime) {

    //return dateTime
    let date = new Date(Date.parse(dateTime))
    let now = new Date()

    //Разница в минутах
    let delta = (now - date)/1000/60


    //Отрицательная разница во времени
    if (delta < 0) {
        return date.toLocaleString("ru", { year: 'numeric', month: 'long', day: 'numeric',
            hour: 'numeric', minute: 'numeric'})
    }

    if (delta < 1) {
        return "Меньше минуты назад"
    }

    if (delta < 60) {
        return normalEndingForWord(Math.floor(delta), ['минута', 'минуты', 'минут']) + " назад"
    }

    if (delta <= 60 * 24) {
        return normalEndingForWord(Math.floor(delta / 60), ['час', 'часа', 'часов']) +  "  назад"
    }

    return normalEndingForWord(Math.floor(delta / (60 * 24)), ['день', 'дня', 'дней']) + " назад"

}

const UsersTableItem = (props) => {
    console.log(props)
    // let locationItem = props.location.map(el => <div key={el.id} className={style.location_item}>{`${el.department.title} (${el.number})`}</div>);    
    const [blocked, setBlockedStatus] = useState(props.blocked)
    // const [id, setId] = useState(props.id)
    const [name, setName] = useState(props.name)
    const [username, setUsername] = useState(props.username)
    const [role, setRole] = useState(props.role)


    let dataItem = {
        id: props.id,
        name: name,
        username: username,
        role: role,
        blocked: blocked
    }

    let itemPassword = {
        id: props.id,
        password: ''
    }

    function auto_grow(element) {
        element.style.height = "5px";
        element.style.height = (element.scrollHeight) + "px";
    }

    const roleOptions = [
        { value: 'admin', label: 'admin' },
        { value: 'reader', label: 'reader' },
        { value: 'user', label: 'user' }
    ]

    const statusOptions = [
        { value: false, label: 'Активен' },
        { value: true, label: 'Заблокирован' }
    ]

    const statusStyles = {
        selectContainer: {
            background: '#fff'
        },
        select: {}
    }
    const customStyles = {
        menu: (provided, state) => ({
            ...provided,
            width: state.selectProps.width,
            borderBottom: '1px dotted pink',
            color: state.selectProps.menuColor,
            padding: 2,
            position: 'absolute',
            right: 15,
            top: 35,
            width: 85,
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

        // group: () => ({
        //     fontSize: 18
        // }),

        dropdownIndicator: () => ({
            color:'#282828',
            position: 'absolute',
            top: 17,
            right: 20
        }),

        control: (_, { selectProps: { width } }) => ({
            width: 90,
            height: 35,
            margin: 10,
            marginLeft: -7,
            // border: '1px solid #000'
        }),

        // singleValue: (provided, state) => {
        //     const opacity = state.isDisabled ? 0.5 : 1;
        //     const transition = 'opacity 300ms';

        //     return { ...provided, opacity, transition };
        // }
    }


    const customStatusStyles = {
        ...customStyles,
        menu: (provided, state) => ({
            ...provided,
            width: state.selectProps.width,
            borderBottom: '1px dotted pink',
            color: state.selectProps.menuColor,
            padding: 2,
            position: 'absolute',
            right: 15,
            top: 35,
            width: 140,
            fontFamily: "Inter",
            fontStyle: "normal",
            fontWeight: "normal",
            lineHeight: "19px"
        }),
        control: (_, { selectProps: { width } }) => ({
            width: 140,
            height: 35,
            margin: 10,
            marginLeft: -7,
            // border: '1px solid #000'
        }),
    }

    const RoleComponent = () => <Select placeholder={props.role} defaultValue={`${props.role}`} styles={customStyles} options={roleOptions} onChange={(e) => {
        console.log(props)
        console.log(e)
        dataItem.role = e.value
        setRole(e.value)
        props.updateUser(dataItem)
    }} />
    const StatusComponent = () => <Select placeholder={!props.blocked ? 'Активен' : 'Заблокирован'} styles={customStatusStyles} options={statusOptions} onChange={(e) => {
        console.log(e)
        console.log(props)
        console.log(e.value)
        // console.log(props)
        dataItem.blocked = e.value
        // setBlockedStatus(e.value)
        props.updateUser(dataItem)
    }} />




    return (
        
            <div className={style.item}>
                <div className={`${style.cell__container}  ${style.name}`}>
                    <div className={`${style.cell}`}>
                        <input
                            // onKeyPress={(e) => auto_grow(e.currentTarget)}
                            onBlur={(e) => {
                                console.log(dataItem)
                                props.updateUser(dataItem)
                            }}
                            onChange={(e) => {
                                setName(e.target.value)
                                console.log(e.currentTarget)
                                console.log(name)
                            }}
                            defaultValue={props.name}
                            className={`${style.name__field} ${style.field}`} />
                    </div>
                </div>

                <div className={`${style.cell__container} ${style.username}`}>
                    <input
                        // onKeyPress={(e) => auto_grow(e.currentTarget)}
                        onBlur={(e) => props.updateUser(dataItem)}
                        onChange={(e) => {
                            setUsername(e.target.value)
                            console.log(e.currentTarget)
                            console.log(username)
                        }}
                        defaultValue={props.username}
                        className={`${style.username__field} ${style.field}`} />
                </div>


                <div className={`${style.cell__container} ${style.role}`}>
                     <RoleComponent />
                </div>





                <div className={`${style.cell__container} ${style.lastVisit}`}>
                    <input
                        // onKeyPress={(e) => auto_grow(e.currentTarget)}
                        onBlur={(e) => props.updateUser(dataItem)}
                        onChange={(e) => {
                            // setAmount(e.currentTarget.value)
                            console.log(e.currentTarget.value)
                            // console.log(amount)
                        }}
                        // defaultValue={!props.lastActiveAt ? 'Не был в системе' : props.lastActiveAt}
                        // defaultValue={!props.lastActiveAt ? 'Не был в системе' : dateTimeToNormal(props.lastActiveAt)}
                        defaultValue={!props.lastActiveAt ? 'Не был в системе' : dateTimeToNormal(props.lastActiveAt)}
                        className={`${style.role__field}`} />
                </div>





                <div className={`${style.cell__container} ${style.password}`}>
                    <input
                        type='password'
                        // onKeyPress={(e) => auto_grow(e.currentTarget)}
                        onBlur={(e) => props.updateUserPassword(itemPassword)}
                        onChange={(e) => {
                            // setAmount(e.currentTarget.value)
                            itemPassword.password = e.currentTarget.value
                            console.log(e.currentTarget.value)
                            // console.log(amount)
                        }}
                        placeholder={`Пароль`}
                        className={`${style.password__field} ${style.field}`} />
                </div>
                <div className={`${style.cell__container} ${style.status__container}`}>
                    {props.deletedAt === null ? <StatusComponent style={statusStyles.selectContainer} /> : <div className={`${style.delete_status}`}>Удален</div>}                    
                </div>

                {/* <button onClick={() => props.deleteTableItem(props.id)} className={style.delete_btn}><img src={deleteIcon} alt="delete item" /></button> */}
            </div>

        


    )
}

export default UsersTableItem