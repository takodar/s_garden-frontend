import React, { Component } from 'react';
import { render } from 'react-dom';
import { Steps} from 'intro.js-react';
import '../public/stylesheets/font-awesome.min.css'
import 'intro.js/introjs.css';
import FontAwesome from 'react-fontawesome';

export default class IntroJs extends Component {
    constructor(props) {
        super(props);

        this.state = {
            stepsEnabled: true,
            initialStep: 0,
            steps: [
                {
                    element: 'tree_1',
                    intro: 'Hover your mouse over a tree and click on the blue circle that appears to view more pictures of that tree',
                }
            ]
        };
    }

    render() {
        const { stepsEnabled, steps, initialStep} = this.state;

        return (
            <div>
                <Steps
                    enabled={stepsEnabled}
                    steps={steps}
                    initialStep={initialStep}
                    onExit={this.onExit}
                />
                <div className="controls">
                    <div>
                        <FontAwesome name='question-circle' onClick={this.toggleSteps}/>
                        {/*<a className="fa fa-question-circle" onClick={this.toggleSteps} >?</a>*/}
                    </div>
                </div>
            </div>
        );
    }

    onExit = () => {
        this.setState(() => ({ stepsEnabled: false }));
    };

    toggleSteps = () => {
        this.setState(prevState => ({ stepsEnabled: !prevState.stepsEnabled }));
    };
}

render(<IntroJs />, document.getElementById('root'));