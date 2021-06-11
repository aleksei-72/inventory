import React, { useState } from 'react';
import style from './../../styles/users.module.css';
import deleteIcon from './../../img/icons/Delete.svg';

const OwnersTableItem = (props) => {
    console.log(props)
    const [name, setName] = useState(props.name)


    let dataItem = {
        id: props.id,
        name: name
    }

    function auto_grow(element) {
        element.style.height = "5px";
        element.style.height = (element.scrollHeight) + "px";
    }


    return (
        <div className={style.item}>
            <div className={`${style.cell__container}  ${style.name} ${style.owners__name}`}>
                <div className={`${style.cell}`}>
                    <input
                        onBlur={(e) => {
                            console.log(dataItem)
                            props.updateOwner(dataItem)
                        }}
                        onChange={(e) => {
                            setName(e.target.value)
                            console.log(e.currentTarget)
                            console.log(name)
                        }}
                        defaultValue={props.name}
                        className={`${style.field} ${style.name__field}`} />
                </div>
            </div>

            <button onClick={() => props.deleteTableOwnerItem(props.id)} className={style.delete_btn}><img src={deleteIcon} alt="delete item" /></button>
        </div>

    )
}

export default OwnersTableItem