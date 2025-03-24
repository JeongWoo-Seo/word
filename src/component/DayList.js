import {Link} from 'react-router-dom'
import useGetFatch from '../hook/useGetFetch';

export default function DayList(){
    const days = useGetFatch('http://localhost:3012/days');

    if(days.length === 0){
        return <span>Loading ...</span>
    }

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