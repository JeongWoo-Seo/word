import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div className='header'>
            <h1>
                <Link to='/'>영단어</Link>
            </h1>

            <div className='menu'>
                <button>단어추가</button>
                <button>날짜추가</button>
            </div>
        </div>
    )
}