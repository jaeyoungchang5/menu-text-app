import React from 'react';
import {CardGroup, Card} from 'react-bootstrap';

function ScheduleItem(props){
    return (
        <div>
            <CardGroup>
                <Card><Card.Body>
                    <Card.Text>
                        {props.day}
                    </Card.Text>
                </Card.Body></Card>
                
                <Card><Card.Body>
                    <Card.Text>
                        {props.meal}
                    </Card.Text>
                </Card.Body></Card>

                <Card><Card.Body>
                    <Card.Text>
                        {props.diningHall}
                    </Card.Text>
                </Card.Body></Card>

                <Card><Card.Body>
                    <Card.Text>
                        {props.time}
                    </Card.Text>
                </Card.Body></Card>
            </CardGroup>
            <br></br>
        </div>
    );
}

export default ScheduleItem;