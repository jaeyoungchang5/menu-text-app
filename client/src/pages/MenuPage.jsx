import React , {useEffect, useState} from 'react';
import { Button, Jumbotron } from 'react-bootstrap';

import menuUtil from '../utils/menu.util';

import MenuItem from '../components/Menu/MenuItem';

function MenuPage(props){

    const [menu, setMenu] = useState([]);
    const [weekNum, setWeekNum] = useState(getCurrentWeekNum());
    const [diningHall, setDiningHall] = useState("North Dining Hall");

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    // on componentDidMount
    useEffect(() => {
        getWeekMenuForDiningHall(weekNum, diningHall);
    }, []);

    function getWeekMenuForDiningHall(searchWeekNum, searchDiningHall){
        searchDiningHall = searchDiningHall.split(" ").join("%20")
        menuUtil.getWeekMenuForDiningHall(searchWeekNum, searchDiningHall)
        .then(res => {
            setMenu(res);
            return;
        });
    }

    function getCurrentWeekNum(){
        let dateObj = new Date();
        let yearStart = new Date(dateObj.getFullYear(), 0, 1);
        let numDays = Math.floor( (dateObj-yearStart)/86400000 )
        return Math.ceil( (yearStart.getDay() + 1 + numDays ) / 7 );
    }

    function updateDiningHall(event){
        setDiningHall(event.target.value);
        getWeekMenuForDiningHall(weekNum, event.target.value);
    }

    function decrementWeekNum(){
        let newWeekNum = weekNum - 1;
        setWeekNum(newWeekNum);
        getWeekMenuForDiningHall(newWeekNum, diningHall);
    }

    function incrementWeekNum(){
        let newWeekNum = weekNum + 1;
        setWeekNum(newWeekNum);
        getWeekMenuForDiningHall(newWeekNum, diningHall);
    }

    return (
        <div>
            <Jumbotron>
                <h1>Menus</h1>
                <select defaultValue={diningHall} onChange={updateDiningHall} name="diningHall">
                    <option value="North Dining Hall">North Dining Hall</option>
                    <option value="South Dining Hall">South Dining Hall</option>
                </select>
            </Jumbotron>

            <div className="menu-week-selector">
                <Button onClick={decrementWeekNum} variant="secondary" size="sm">
                    <i className="fas fa-arrow-left"></i>
                </Button>
                <p className="menu-week">Week {weekNum}</p>
                <Button onClick={incrementWeekNum} variant="secondary" size="sm">
                    <i className="fas fa-arrow-right"></i>
                </Button>
            </div>

            {days.map((day, index) => {
                return (
                    <MenuItem
                        key={index}
                        menu={menu.filter(menuItem => menuItem.day == day)}
                        day={day}
                    />
                );
            })}

        </div>
    )
}

export default MenuPage;