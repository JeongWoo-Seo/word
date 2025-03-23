import data from '../db/data.json'
import {Link} from 'react-router-dom'

export default function DayList(){
    const days = data.days;

    return (
        <ul className='list_day'>
            {days.map(day => (
                <li key = {day.id}>
                   <Link to={`/Day/${day.day}`}>Day {day.day}</Link>
                </li>
            ))}
        </ul>
    )
}