import React from 'react';
import {CardGroup, Card} from 'react-bootstrap';

function ScheduleItemView(props){
    return (
        <div>
            <CardGroup>
                <Card><Card.Body>
                    <Card.Text>
                        {props.schedule.day}
                    </Card.Text>
                </Card.Body></Card>
                
                <Card><Card.Body>
                    <Card.Text>
                        {props.schedule.meal}
                    </Card.Text>
                </Card.Body></Card>

                <Card><Card.Body>
                    <Card.Text>
                        {props.schedule.diningHall}
                    </Card.Text>
                </Card.Body></Card>

                <Card><Card.Body>
                    <Card.Text>
                        {props.schedule.time}
                    </Card.Text>
                </Card.Body></Card>
            </CardGroup>
            <br></br>
        </div>
    );
}

export default ScheduleItemView;