import {types} from "../types/types"
import {fetchWithToken} from "../helpers/fetch"
import Swal from "sweetalert2"
import {eventsDateString} from "../helpers/eventsDateString"


export const eventStartAddNew = (event) => {
    return async ( dispatch, getState) => {

        const {uid, name} = getState().auth
        try{
            const res = await fetchWithToken('events', event, 'POST')
            const body = await res.json()

            if(body.ok){
                event.id = body.msg.id
                event.user = {
                    _id: uid,
                    name
                }
                console.log(event)
                dispatch( eventAddNew(event))
            }
        } catch (e) {
            console.log(e)
        }

    }
};


const eventAddNew = (event) => ({
        type: types.eventAddNew,
        payload: event
})

export const eventSetActive = (event) => ({
    type: types.eventSetActive,
    payload: event
})

export const eventClearActiveEvent = () => ({
        type: types.eventClearActiveEvent
})

export const eventStartUpdate = (event) => {
    return async (dispatch ) =>{
        try{
            const res = await fetchWithToken(`events/${event.id}`,event,'PUT')
            const body = await res.json()

            if(body.ok){
                dispatch(eventUpdate(event))
            } else {
                Swal.fire('Error',body.msg,'error')
            }
        } catch (e) {
            console.log(e)
        }
    }
};

const eventUpdate   = ( event) => ({
    type: types.eventUpdated,
    payload: event
})

export const eventStartDelete = ( ) => {
    return async (dispatch,getState) => {

        const {id} = getState().calendar.activeEvent

        try{
            const res = await fetchWithToken(`events/${id}`,{},'DELETE')
            const body = await res.json()

            if(body.ok){
                dispatch(eventDeleted())
            } else {
                Swal.fire('Error',body.msg,'error')
            }
        } catch (e) {
            console.log(e)
        }
    }
};
const eventDeleted   = () => ({
    type: types.eventDeleted,
})

export const eventStartLoading = () => {
    return async (dispatch) => {
        try{
            const res = await fetchWithToken('events')
            const body = await res.json()
            const events = eventsDateString(body.msg)

            dispatch( eventLoaded(events))
        }catch (e) {
            console.log(e)
        }
    }
}


const eventLoaded = (events) =>( {
    type: types.eventLoaded,
    payload: events
})
