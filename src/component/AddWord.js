import { useRef, useState } from "react"
import { useNavigate } from 'react-router-dom'
import useGetFatch from "../hook/useGetFetch";

export default function AddWord() {
    const engRef = useRef();
    const korRef = useRef();
    const dayRef = useRef();
    const [isLoading, setIsLoading] = useState(false);

    const days = useGetFatch('http://localhost:3012/days');
    const navigator = useNavigate();

    function isEmptyObj(obj) {
        if (obj.current.value.length === 0) {
            return true;
        }
        return false;
    }

    function onSubmit(e) {
        e.preventDefault();

        if (!isLoading) {
            if (isEmptyObj(engRef) || isEmptyObj(korRef) || isEmptyObj(dayRef)) {
                alert("내용을 입력해주세요.");
            }
            else {
                setIsLoading(true);
                fetch(`http://localhost:3012/words/`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        day: dayRef.current.value,
                        eng: engRef.current.value,
                        kor: korRef.current.value,
                        isDone: false
                    }),
                })
                    .then((res) => {
                        if (res.ok) {
                            alert("저장완료");
                            navigator(`/day/${dayRef.current.value}`);
                        }
                        setIsLoading(false);
                    })
            }
        }
    }

    return (
        <form onSubmit={onSubmit}>
            <div className='input_area'>
                <label>eng</label>
                <input type='text' placeholder='computer' ref={engRef} />
            </div>
            <div className='input_area'>
                <label>kor</label>
                <input type='text' placeholder='컴퓨터' ref={korRef} />
            </div>
            <div className='input_area'>
                <label>Day</label>
                <select ref={dayRef}>
                    {days.map(day => (
                        <option key={day.id}>
                            {day.day}
                        </option>
                    ))}
                </select>
            </div>
            <button
                styled={{ opacity: isLoading ? 0.3 : 1 }} >
                {isLoading ? 'saving...' : '저장'}</button>
        </form>
    )
}