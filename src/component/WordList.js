import { useParams } from 'react-router-dom';
import Word from './Word';
import useGetFatch from '../hook/useGetFetch';

export default function WordList() {
    const { day } = useParams();
    const words = useGetFatch(`http://localhost:3012/words?day=${day}`);

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