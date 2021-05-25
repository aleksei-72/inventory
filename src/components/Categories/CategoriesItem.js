import React from 'react';
import { getItems } from '../../api/api';
import style from './../../styles/categories.module.css';
// import { getCategoriesItems } from './../../api/api';
import { useDispatch } from 'react-redux';
import { setCategoryId } from './../../reducers/categories';
import { setCategoryTableItems } from './../../reducers/tableItems';
import deleteIcon from './../../img/icons/Delete.svg';

const CategoriesItem = (props) => {
    console.log(props)
    const dispatch = useDispatch()
    // const [title, setTitle] = useState('')
    // let title
    let dataItem = {
        id: props.id,
        title: props.title
    }


    return (
        <div onClick={(e) => {
            if (!props.visibilityButtons) {
                getItems(0, props.id, props.searchString).then((res) => {
                    console.log(res.data)
                    dispatch(setCategoryTableItems(res.data.items))
                })
                dispatch(setCategoryId(props.id))
            }
        }} className={`${style.item}`}>

            <input
                onBlur={(e) => {
                    
                    dataItem.title = e.target.value
                    console.log(dataItem)
                    props.updateCategoriesItem(dataItem)
                }}
                onChange={(e) => {
                    // setTitle(e.target.value)
                    e.stopPropagation()
                    // dataItem.title = e.target.value
                    console.log(e.target.value)
                    // console.log(title)
                }}
                defaultValue={props.title}
                className={`${style.name__field}`} />

            {/* <div>{props.title}</div> */}




            {/* {props.visibilityButtons ? <button onClick = { () => props.deleteCategoriesItem(props.id) } className={style.delete_btn}><img src={deleteIcon} alt="delete item" /></button> : null}             */}
            {props.visibilityButtons ? <button onClick={(e) => {
                props.deleteCategoriesItem(props.id)
                e.stopPropagation()
            }} className={style.delete_btn}><img src={deleteIcon} alt="delete item" /></button> : null}
        </div>
    )
}

export default CategoriesItem