import { useState } from "react"

export default function Word({word:w}) {
    const [isCheck,setIsCheck] = useState(false);
    const [isShow,setIsShow] = useState(false);

    function toggleBox(){
        setIsCheck(!isCheck);
    }

    function toggleShow(){
        setIsShow(!isShow);
    }

    function wordDel(){

    }

    return (
        <tr className = {isCheck ? 'off' :''}>
            <td><input type="checkBox" checked={isCheck} onChange={toggleBox} /></td>
            <td>{w.eng}</td>
            <td>{isShow && w.kor}</td>
            <td>
                <button onClick = {toggleShow}>뜻{isShow ? '숨기기':'보기'}</button>
                <button className ='btn_del' onClick = {wordDel}>단어삭제</button>
            </td>
        </tr>
    )
}