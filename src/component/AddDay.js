import {useNavigate } from "react-router-dom";
import useGetFatch from "../hook/useGetFetch"

export default function AddDay(){
    const days = useGetFatch('http://localhost:3012/days');
    const navigator = useNavigate();
    let day;

    if(days.length === 0)
        day = 0;
    else
        day = Math.max(...days.map((obj) => obj['day']));
    
    function addDay(){
        fetch(`http://localhost:3012/days`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              day : day+1,
            }),
        })
        .then((res) => {
            if(res.ok){
                alert("저장완료");
                navigator('/');
            }
        }) 
    }

    return (
        <div>
            <h3>현재 일수 : {day}</h3>
            <button onClick={addDay}>Day 추가</button>

        </div>
    )
}