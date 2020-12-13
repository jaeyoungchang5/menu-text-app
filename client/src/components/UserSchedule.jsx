import React, {useState} from 'react';
import { Button } from 'react-bootstrap';
import userUtil from '../utils/user.util';

import ScheduleItemView from './ScheduleItemView';
import ScheduleItemEdit from './ScheduleItemEdit';

function UserSchedule(props){
    const [schedule, setSchedule] = useState(props.user.schedule);
    const [option, setOption] = useState('Edit');

    function handleSubmit(event){
        event.preventDefault();
        
        if (option === 'Edit'){ 
            // on "edit" option ==> view only state
            setOption('Update');
        } else {
            // on "update" option ==> edit state

            // make api call
            userUtil.putSchedule(props.user.username, schedule);

            setOption('Edit');
        }
    }

    return (
        <div>
            <h2>Here is your schedule:</h2>
            {schedule.map((scheduleItem, index) => {
                if (option === 'Edit') {
                    return (
                        <ScheduleItemView 
                            schedule={scheduleItem}
                            key={index}
                        />
                    )
                } else {
                    return (
                        <ScheduleItemEdit 
                            key={index}
                            schedule={scheduleItem}
                            setSchedule={setSchedule}
                            masterSchedule={schedule}
                        />
                    )
                }
            })}
            <Button onClick={handleSubmit} variant="primary" type="submit">
                {option}
            </Button>
        </div>
    )
}

export default UserSchedule;