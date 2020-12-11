import React from 'react';
import { Jumbotron } from 'react-bootstrap';

import ScheduleItem from './ScheduleItem';

function UserSchedule(props){
    return (
        <div>
            <h2>Here is your schedule:</h2>
            {props.user.alertTimes.map((scheduleItem, index) => {
                return (
                    <ScheduleItem 
                        key={index}
                        id={scheduleItem._id}
                        day={scheduleItem.day}
                        meal={scheduleItem.meal}
                        diningHall={scheduleItem.diningHall}
                        time={scheduleItem.time}
                        alertOn={scheduleItem.alertOn}
                    />
                )
            })}
        </div>
    )
}

export default UserSchedule;