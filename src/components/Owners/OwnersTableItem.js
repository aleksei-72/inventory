import React, { useState, Component } from 'react';
import style from './../../styles/users.module.css';
import deleteIcon from './../../img/icons/Delete.svg';
// import { NavLink } from 'react-router-dom';
// import Select from 'react-select'



const OwnersTableItem = (props) => {
    console.log(props)
    // let locationItem = props.location.map(el => <div key={el.id} className={style.location_item}>{`${el.department.title} (${el.number})`}</div>);    
    // const [blocked, setBlockedStatus] = useState(props.blocked)
    const [id, setId] = useState(props.id)
    const [name, setName] = useState(props.name)
    // const [username, setUsername] = useState(props.username)
    // const [role, setRole] = useState(props.role)


    let dataItem = {
        id: props.id,
        name: name,
        // username: username,
        // role: role,
        // blocked: blocked
    }

    function auto_grow(element) {
        element.style.height = "5px";
        element.style.height = (element.scrollHeight) + "px";
    }


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

                {/* <div className={`${style.cell__container} ${style.username}`}>
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
                </div> */}




                {/* <button onClick={() => props.deleteTableItem(props.id)} className={style.delete_btn}><img src={deleteIcon} alt="delete item" /></button> */}
                <button onClick={() => props.deleteTableOwnerItem(props.id)} className={style.delete_btn}><img src={deleteIcon} alt="delete item" /></button>
            </div>

        </div>


    )
}

export default OwnersTableItem