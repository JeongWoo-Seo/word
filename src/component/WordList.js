import { useParams } from 'react-router-dom';
import data from '../db/data.json'

export default function WordList(){
    const {day} = useParams();
    const words = data.words;

    return (
        <>
        <h2>Day {day}</h2>
        <table>
            <tbody>

            </tbody>
        </table>
        </>
    )
}