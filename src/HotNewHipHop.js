/**
 * Created by takodaregister on 8/5/17.
 */
import React, { Component } from 'react';
import {reactConfig} from '../Conf/reactConfig';
class HotNewHipHop extends Component {
    state = {users: []};
    componentDidMount() {
        fetch(reactConfig.host'/hotnewhiphop')
            // .then(res => res.json())
            // .then(users => this.setState({ users }));
    }
    render() {
        return (
            <div className="App">
                <h1>HOT NEW HIP HOP</h1>
    //             {/*{this.state.users.map(user =>*/}
    //                 {/*<div key={user.id}>{user.username}</div>*/}
    //             {/*)}*/}
    //         </div>
        );
    }
}
export default HotNewHipHop;


