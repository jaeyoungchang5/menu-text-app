import React, {useState} from 'react';
import { Card, ListGroup } from 'react-bootstrap';

import MenuDetail from './MenuDetail';

function MenuItem(props){
    const meals = ['Breakfast', 'Lunch', 'Dinner'];
    return (
        <div>
            <Card>
                <Card.Header>{props.day}</Card.Header>

                <ListGroup variant="flush">
                    {meals.map((meal, index) => {
                        let mealMenu = props.menu.find(menuItem => menuItem.meal == meal);
                        return (
                            <MenuDetail
                                key={index}
                                meal={meal}
                                menu={mealMenu}
                            />
                        )
                    })}
                </ListGroup>
            </Card>
        </div>
    );
}

export default MenuItem;