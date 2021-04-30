import React, { useState, Component } from 'react';
import style from './../../styles/users.module.css';
import deleteIcon from './../../img/icons/Delete.svg';
// import { NavLink } from 'react-router-dom';
import Select from 'react-select'



const UsersTableItem = (props) => {
    console.log(props)
    // let locationItem = props.location.map(el => <div key={el.id} className={style.location_item}>{`${el.department.title} (${el.number})`}</div>);    
    const [blocked, setBlockedStatus] = useState(props.blocked)
    const [id, setId] = useState(props.id)
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

    function auto_grow(element) {
        element.style.height = "5px";
        element.style.height = (element.scrollHeight) + "px";
    }

    const roleOptions = [
        { value: 'admin', label: 'admin' },
        { value: 'reader', label: 'reader' },
        { value: 'view', label: 'view' }
    ]

    const statusOptions = [
        { value: true, label: 'active' },
        { value: false, label: 'blocked' }
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
            // border: '1px solid #000'
        }),

        singleValue: (provided, state) => {
            const opacity = state.isDisabled ? 0.5 : 1;
            const transition = 'opacity 300ms';

            return { ...provided, opacity, transition };
        }
    }

    const RoleComponent = () => <Select placeholder={props.role} defaultValue={`${props.role}`} styles={customStyles} options={roleOptions} onChange={(e) => {
        console.log(props)
        console.log(e)
        setRole(e.value)
        props.updateUser(dataItem)
    }} />
    const StatusComponent = () => <Select placeholder={!props.status ? 'active' : 'blocked'} styles={customStyles} options={statusOptions} onChange={(e) => {
        console.log(e)
        console.log(props)
        console.log(e.value)
        // console.log(props)
        setBlockedStatus(e.value)
        props.updateUser(dataItem)
    }} />


    return (
        <div>
            <div className={style.item}>
                <div className={`${style.cell__container}  ${style.name}`}>
                    <div className={`${style.cell}`}>
                        <input
                            onKeyPress={(e) => auto_grow(e.currentTarget)}
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
                            className={`${style.name__field}`} />
                    </div>
                </div>

                <div className={`${style.cell__container} ${style.username}`}>
                    <input
                        onKeyPress={(e) => auto_grow(e.currentTarget)}
                        onBlur={(e) => props.updateUser(dataItem)}
                        onChange={(e) => {
                            setUsername(e.target.value)
                            console.log(e.currentTarget)
                            console.log(username)
                        }}
                        defaultValue={props.username}
                        className={`${style.username__field}`} />
                </div>


                <div className={`${style.cell__container} ${style.role}`}>
                    <RoleComponent />
                </div>


                <div className={`${style.cell__container} ${style.lastVisit}`}>
                    <input
                        onKeyPress={(e) => auto_grow(e.currentTarget)}
                        onBlur={(e) => props.updateUser(dataItem)}
                        onChange={(e) => {
                            // setAmount(e.currentTarget.value)
                            console.log(e.currentTarget.value)
                            // console.log(amount)
                        }}
                        defaultValue={!props.lastActiveAt ? 'Не был в системе' : props.lastActiveAt}
                        className={`${style.role__field}`} />
                </div>

                <div className={`${style.cell__container} ${style.password}`}>
                    <input
                        type='password'
                        onKeyPress={(e) => auto_grow(e.currentTarget)}
                        onBlur={(e) => props.updateUser(dataItem)}
                        onChange={(e) => {
                            // setAmount(e.currentTarget.value)
                            console.log(e.currentTarget.value)
                            // console.log(amount)
                        }}
                        placeholder={`Пароль`}
                        className={`${style.password__field}`} />
                </div>
                <div className={`${style.cell__container} ${style.status__container}`}>
                    <StatusComponent style={statusStyles.selectContainer} />
                </div>

                <button onClick={() => props.deleteTableItem(props.id)} className={style.delete_btn}><img src={deleteIcon} alt="delete item" /></button>
            </div>

        </div>


    )
}

export default UsersTableItem