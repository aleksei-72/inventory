import React, { useState } from 'react';
import style from './../../styles/users.module.css';
import Select from 'react-select'
import { customStyles } from '../../styles/selects/reactSelectStyles';
import dateTimeToNormal from '../../normalDate';
import { customStatusStyles } from './../../styles/selects/reactSelectStyles';


const UsersTableItem = (props) => {
    console.log(props)
    const [blocked, setBlockedStatus] = useState(props.blocked)
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


    const RoleComponent = () => <Select placeholder={props.role} defaultValue={`${props.role}`} styles={customStyles} options={roleOptions} onChange={(e) => {
        dataItem.role = e.value
        setRole(e.value)
        props.updateUser(dataItem)
    }} />
    const StatusComponent = () => <Select placeholder={!props.blocked ? 'Активен' : 'Заблокирован'} styles={customStatusStyles} options={statusOptions} onChange={(e) => {
        dataItem.blocked = e.value
        props.updateUser(dataItem)
    }} />

    return (

        <div className={style.item}>
            <div className={`${style.cell__container}  ${style.name}`}>
                <div className={`${style.cell}`}>
                    <input
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
                    onBlur={(e) => props.updateUser(dataItem)}
                    onChange={(e) => {
                        console.log(e.currentTarget.value)
                    }}
                    defaultValue={!props.lastActiveAt ? 'Не был в системе' : dateTimeToNormal(props.lastActiveAt)}
                    className={`${style.role__field}`} />
            </div>

            <div className={`${style.cell__container} ${style.password}`}>
                <input
                    type='password'
                    onBlur={(e) => props.updateUserPassword(itemPassword)}
                    onChange={(e) => {
                        itemPassword.password = e.currentTarget.value
                        console.log(e.currentTarget.value)
                    }}
                    placeholder={`Пароль`}
                    className={`${style.password__field} ${style.field}`} />
            </div>
            <div className={`${style.cell__container} ${style.status__container}`}>
                {props.deletedAt === null ? <StatusComponent style={statusStyles.selectContainer} /> : <div className={`${style.delete_status}`}>Удален</div>}
            </div>
        </div>

    )
}

export default UsersTableItem