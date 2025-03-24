import { useParams } from 'react-router-dom';
import data from '../db/data.json'
import Word from './Word';

export default function WordList() {
    const { day } = useParams();
    const words = data.words.filter(word => word.day === day);

    return (
        <>
            <h2>Day {day}</h2>
            <table>
                <tbody>
                    {words.map(word => (
                        <Word word = {word} key = {word.id} />
                    ))}
                </tbody>
            </table>
        </>
    )
}