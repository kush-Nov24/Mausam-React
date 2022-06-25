import React from 'react'
import { DateTime } from 'luxon';

export default function TimeLocation(props) {
    const { time, location } = props;
    const dt = DateTime.fromSeconds(time).toLocaleString({ weekday: 'long', month: 'long', day: 'numeric', hour: 'numeric'});
    return (
        <ul className='C2 light list-group list-group-flush text-center my-2'>
            <li className="list-group-item time">{dt}</li>
            <li className="list-group-item location">{location}</li>
            <hr />
        </ul>
    )
}
