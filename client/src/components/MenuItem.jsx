import React, {useState} from 'react';
import {} from 'react-bootstrap';

function MenuItem(props){
    return (
        <div>
            <p>{props.menu.day}, {props.menu.date}</p>
            <p>{props.menu.meal}</p>
            <p>{props.menu.diningHall}</p>
        </div>
    );
}

export default MenuItem;