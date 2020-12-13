import React from 'react'
import {useDispatch} from "react-redux"
import {uiOpenModal} from "../../actions/ui"

const AddNewFab = () => {

    //TODO Redux
    const dispatch = useDispatch()

    const handleClickNew = () => {
        dispatch( uiOpenModal())
    }

    return (
        <button
            className='btn btn-success fab'
            onClick={handleClickNew}
        >
            <i className='fas fa-plus'> </i>
        </button>
    )
}

export default AddNewFab
