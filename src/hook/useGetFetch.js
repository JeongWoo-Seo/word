import { useEffect, useState } from "react"

export default function useGetFatch(url){
    const [data,setData] = useState([]);

    useEffect(()=>{
        fetch(url)
        .then(res =>{
            return res.json();
        })
        .then(res =>{
            setData(res);
        });
    },{url});
    
    return data
}