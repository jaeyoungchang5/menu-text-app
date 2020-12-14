import React, {useState} from 'react';
import { Jumbotron, Tabs, Tab} from 'react-bootstrap';
import {useParams} from 'react-router-dom';

import UserSchedule from '../components/UserSchedule';

function UserPage(props){
    const [user, setUser] = useState(props.user);
    const [key, setKey] = useState("settings");
    let {username} = useParams();
    if (user == null){
        return (
            <div>
                <Jumbotron>
                    <h1>Please sign in</h1>
                </Jumbotron>
            </div>
        )
    }
    if (user.username != username){
        return (
            <div>
                <Jumbotron>
                    <h1>You cannot access</h1>
                </Jumbotron>
            </div>
        )
    }
    return (
        <div>
            <Jumbotron>
                <h1>Hello, {user.username}</h1>
            </Jumbotron>
            <Tabs id="user-page-tabs" activeKey={key} onSelect={(k) => setKey(k)}>
                <Tab eventKey="settings" title="Settings">
                    <p>Settings</p>
                </Tab>
                <Tab eventKey="schedule" title="Schedule">
                    <UserSchedule user={user} />
                </Tab>
            </Tabs>
        </div>
    );
}

export default UserPage;