/**
 * Created by takodaregister on 8/10/17.
 */
import TreeDetails from '../TreePopup/treeModal';
import React, {Component} from 'react';
import {reactConfig} from '../Conf/reactConfig';
import '../../public/stylesheets/sideYard.css';

class SideYardTreeHoverLocations extends Component {
    state = {locations: []};

    componentDidMount() {
        fetch(reactConfig.host + '/locations')
            .then(res => res.json())
            .then(locations => this.setState({locations}));
    }

    render() {
        return (
            <div>
                <div className="col-sm-12 noPadding"><img alt="side_left" id="imgLeftSide"
                                                                   src="/images/Left_Side.jpg"/>
                </div>
                {this.state.locations.map(location =>
                    <div key={location._id}>
                        <div id={'tree_' + location.id} onMouseEnter={() => highlight(location.id)}
                             onMouseLeave={() => removeHighlight(location.id)}
                             onClick={() => displayTreeData(location.id)}
                             style={{'left': location.left + 'px', 'top': location.top + 'px'}}></div>
                        <div id={"treePopUp" + location.id} className="treePopUp">
                            <div id={"displayDataForTree" + location.id}>
                                <TreeDetails id={location.id} className={location.type}/>

                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}
function highlight(id) {
    let area = document.getElementById("tree_" + id);
    area.style.backgroundColor = 'rgba(20, 185, 240, 0.31)';
    area.style.cursor = 'pointer';
}

function removeHighlight(id) {
    let area = document.getElementById("tree_" + id);
    area.style.backgroundColor = 'transparent';
}

function displayTreeData(id) {
    let treeData = document.getElementById('displayDataForTree' + id);
    let treePopUp = document.getElementById('treePopUp' + id);
    treeData.style.display = "inline";
    treePopUp.style.display = "inline";
}

export default SideYardTreeHoverLocations;