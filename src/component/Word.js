import { useState } from "react"

export default function Word({word:w}) {
    const [word,setWord] = useState(w);
    const [isCheck,setIsCheck] = useState(word.isDone);
    const [isShow,setIsShow] = useState(false);

    function toggleBox(){
        fetch(`http://localhost:3012/words/${word.id}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              ...word,
              isDone: !isCheck,
            }),
        })
        .then((res) => {
            if(res.ok)
                setIsCheck(!isCheck);
        })   
    }

    function toggleShow(){
        setIsShow(!isShow);
    }

    function wordDel(){
        fetch(`http://localhost:3012/words/${word.id}`, {
            method: "DELETE",
        })
        .then((res) => {
            if(res.ok)
                setWord({id:0});
        }) 
    }

    if(word.id === 0)
        return null;
    
    return (
        <tr className = {isCheck ? 'off' :''}>
            <td><input type="checkBox" checked={isCheck} onChange={toggleBox} /></td>
            <td>{word.eng}</td>
            <td>{isShow && word.kor}</td>
            <td>
                <button onClick = {toggleShow}>뜻{isShow ? '숨기기':'보기'}</button>
                <button className ='btn_del' onClick = {wordDel}>단어삭제</button>
            </td>
        </tr>
    )
}