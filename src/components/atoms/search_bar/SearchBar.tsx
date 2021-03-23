import React from 'react';
import './SearchBar.scss';

import { IoSearch } from "react-icons/io5";

interface Props{
    placeholder?: string;
    value?: string;
    onChange?: (arg: React.ChangeEvent<HTMLInputElement>) => void;
}

export default (
    {
        placeholder = 'Search Pokemon, Move, Ability etc',
        value,
        onChange
    }: Props
) => {
    return (
        <div className="search-bar">
            <IoSearch className="search-bar__icon ion ion-search" />
            <label htmlFor="search-bar">
                {placeholder}
            </label>
            <input className="search-bar__input" type="text" placeholder={placeholder} id="search-bar" value={value} onChange={onChange}/>
        </div>
    )
}
