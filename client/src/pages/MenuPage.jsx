import React , {useEffect, useState} from 'react';
import { Button, Jumbotron } from 'react-bootstrap';

import menuUtil from '../utils/menu.util';

import MenuItem from '../components/MenuItem';

function MenuPage(props){

    const [menu, setMenu] = useState([]);
    const [weekNum, setWeekNum] = useState(getCurrentWeekNum());

    // on componentDidMount
    useEffect(() => {
        getWeekMenu(weekNum);
    }, []);

    function getWeekMenu(searchWeekNum){
        menuUtil.getWeekMenu(searchWeekNum)
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

    function decrementWeekNum(){
        let newWeekNum = weekNum - 1;
        setWeekNum(newWeekNum);
        getWeekMenu(newWeekNum);
    }

    function incrementWeekNum(){
        let newWeekNum = weekNum + 1;
        setWeekNum(newWeekNum);
        getWeekMenu(newWeekNum);
    }

    return (
        <div>
            <Jumbotron>
                <h1>Menus</h1>
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

            {menu.map((menuItem, index) => {
                return (
                    <MenuItem
                        key={index}
                        menu={menuItem}
                        setMenu={setMenu}
                    />
                );
            })}

        </div>
    )
}

export default MenuPage;