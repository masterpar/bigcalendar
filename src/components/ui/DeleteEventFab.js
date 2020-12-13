import React from 'react'
import {useDispatch, useSelector} from "react-redux"
import {eventStartDelete} from "../../actions/events"

const DeleteEventFab = () => {

    //TODO Redux
    const dispatch = useDispatch()

    return (
        <button
            className='btn btn-danger fab-danger'
            onClick={ () => dispatch( eventStartDelete()) }
        >
            <i className='fas fa-trash'> </i>
            <span>  Borrar Evento</span>
        </button>
    )
}

export default DeleteEventFab
