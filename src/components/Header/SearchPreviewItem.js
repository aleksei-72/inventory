import React  from 'react';
import style from './../../styles/header.module.css';
import { useDispatch } from 'react-redux';
import { getItems } from '../../api/api';
import { setSearchTableItems } from '../../reducers/tableItems';



const SearchPreviewItem = (props) => {
    console.log(props)
    const dispatch = useDispatch()


    return (
        <div className = {style.preview__item} onClick={() => getItems(0, 0, props.title).then((res) => {
            console.log(res.data)
            props.setSearchPreviewVisibility(false)
            dispatch(setSearchTableItems(res.data.items))

        })}>
            <p>{props.title}</p>
        </div>


    )
}

export default SearchPreviewItem