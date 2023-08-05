import { useState } from 'react';
import {AiFillCaretDown, AiOutlineSearch} from 'react-icons/ai';
import {BsCheckSquare} from 'react-icons/bs';

function Dropdown({toggle,sortBy ,onChangeSortBy}){
    if(!toggle){
        return null;
    }
    return(
        <ul className='btn'>
            <li onClick={() => onChangeSortBy('salesNumber')}>인기순 {sortBy === 'salesNumber' && <BsCheckSquare />}</li>
            <li onClick={() => onChangeSortBy('birth')}>최신순 {sortBy === 'birth' && <BsCheckSquare />}</li>
            <li onClick={() => onChangeSortBy('price')}>높은가격 {sortBy === 'price' && <BsCheckSquare />}</li>
        </ul>
    );
}
export default function Search({sortBy, onChangeSortBy, onChangeWord ,word}){
    const [toggle, setToggle] = useState(false);

    return(
        <div id="search">
            <div>
                <AiOutlineSearch />
                <input 
                    type="text" 
                    placeholder="상품 이름 입력" 
                    value={word}
                    onChange = {(e) => onChangeWord(e.target.value)}
                />
            </div>
            <div className='dropBox'>
                <button type="button"
                    onClick={() => setToggle(!toggle)}
                ><AiFillCaretDown /></button>
                <Dropdown 
                    toggle = {toggle}
                    sortBy = {sortBy}
                    onChangeSortBy = {(data) => onChangeSortBy(data)}
                />
            </div>
        </div>
    );
}