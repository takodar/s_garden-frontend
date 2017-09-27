/**
 * Created by takodaregister on 8/12/17.
 */
import React, {Component} from 'react';

class EscKeyListener extends Component {
    constructor(props){
        super(props);
        this.state = {currentKey: ''};
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }
    handleKeyPress(e) {
        this.setState({currentKey: e.keyCode});
        if(e.keyCode === 27) {
            document.querySelectorAll('.treePopUp').forEach(function(treePopup) {
                treePopup.style.display = "none";
            });
        }
    }

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyPress);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyPress);
    }

    render() {
        return(
            <span style={{display:'none'}}>Exit</span>
        );
    }
}
export default EscKeyListener;
