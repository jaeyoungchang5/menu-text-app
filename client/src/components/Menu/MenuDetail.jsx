import React from 'react';
import { ListGroup, OverlayTrigger, Popover, Button } from 'react-bootstrap';

function MenuDetail(props){

    if (props.menu == null){
        return (
            <ListGroup.Item>
                {props.meal}
            </ListGroup.Item>
        )
    }

    const popover = (
        <Popover>
            <Popover.Title as="h3">{props.menu.day}, {props.menu.date}</Popover.Title>
            <Popover.Content>
                {props.menu.menu.map((menuItem, index) => {
                    return (
                        <span key={index}>
                            <p><b>{menuItem.category}</b></p>
                            {menuItem.items.map((item, index) => {
                                return (
                                    <p key={index}>- {item}</p>
                                )
                            })}
                        </span>
                    )
                })}
            </Popover.Content>
        </Popover>
    )

    console.log(props.menu);
    return (
        <ListGroup.Item>
            <OverlayTrigger trigger="hover" placement="right" overlay={popover}>
                <Button variant="primary" size="sm">{props.meal}</Button>
            </OverlayTrigger>
        </ListGroup.Item>
    )
}

export default MenuDetail;