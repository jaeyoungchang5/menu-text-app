import React, {useState} from 'react';
import {CardGroup, Card, DropdownButton, Dropdown} from 'react-bootstrap';

function ScheduleItemEdit(props){

    const [day, setDay] = useState(props.schedule.day);
    const [meal, setMeal] = useState(props.schedule.meal);
    const [diningHall, setDiningHall] = useState(props.schedule.diningHall);
    const [time, setTime] = useState(props.schedule.time);

    function updateDiningHall(event){
        setDiningHall(event.target.value);

        for (let i = 0; i < props.masterSchedule.length; i++){
            if (props.masterSchedule[i].day === day && props.masterSchedule[i].meal === meal){
                props.masterSchedule[i].diningHall = event.target.value;
                break;
            }
        }
    }

    function updateTime(event){
        setTime(event.target.value);

        for (let i = 0; i < props.masterSchedule.length; i++){
            if (props.masterSchedule[i].day === day && props.masterSchedule[i].meal === meal){
                props.masterSchedule[i].time = event.target.value;
                break;
            }
        }
    }

    return (
        <div>
            <CardGroup>
                <Card><Card.Body>
                    <Card.Text>
                        {day}
                    </Card.Text>
                </Card.Body></Card>
                
                <Card><Card.Body>
                    <Card.Text>
                        {meal}
                    </Card.Text>
                </Card.Body></Card>

                <Card><Card.Body>
                    <Card.Text>
                        <select defaultValue={diningHall} onChange={updateDiningHall} name="diningHall">
                            <option value="North Dining Hall">North Dining Hall</option>
                            <option value="South Dining Hall">South Dining Hall</option>
                            <option value="Other">Other</option>
                        </select>
                    </Card.Text>
                </Card.Body></Card>

                <Card><Card.Body>
                    <Card.Text>
                        <input onChange={updateTime} value={time} type="time" name="time" min="00:00" max="24:00"></input>
                    </Card.Text>
                </Card.Body></Card>
            </CardGroup>
            <br></br>
        </div>
    );
}

export default ScheduleItemEdit;