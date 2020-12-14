import React , {useEffect, useState} from 'react';
import { Jumbotron } from 'react-bootstrap';

import menuUtil from '../utils/menu.util';

import MenuItem from '../components/MenuItem';

function MenuPage(props){

    const [menu, setMenu] = useState([]);

    // on componentDidMount
    useEffect(() => {
        menuUtil.getAllMenu()
        .then(res => {
            setMenu(res);
            console.log(res);
            return;
        })
    }, []);

    return (
        <div>
            <Jumbotron>
                <h1>Menus</h1>
            </Jumbotron>

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