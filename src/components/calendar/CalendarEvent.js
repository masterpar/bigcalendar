import React from 'react'

const CalendarEvent = ({ event }) => {

    const { title, user } = event
    return (
        <div>
            <p className='mb-1'>{ title }</p>
            <strong>{ user.name }</strong>
        </div>
    )
}

export default CalendarEvent
