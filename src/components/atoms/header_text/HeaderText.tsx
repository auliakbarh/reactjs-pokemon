import React from 'react';
import './HeaderText.scss';

interface Props {
    label: string;
    style?: object;
}

export default (props: Props) => {
    return (
        <h1 className='header-text' style={props.style}>
            {props.label}
        </h1>
    )
}
