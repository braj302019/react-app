import React from 'react';
import SimpleCard from '../../components/cards/SimpleCard';

class Widgets extends React.Component {
    
    render() {
        return (
            <div>
                <h1>Cards</h1>
                <SimpleCard title="Bounce Rate" subtitle="Compare to Last day" value="54.34%" body="Acceptable > 50%"/>
            </div>
        );
    }
}

export default Widgets;