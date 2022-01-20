import React from 'react';
import * as PropTypes from 'prop-types';

class ShoppingList extends React.Component {
    render() {
        const {name} = this.props;
        const items = ["Instagram", "WhatsApp", "Linkedin"];
        return (
            <div className="shopping-list">
                <h1>Shopping List for {name}</h1>
                <ul style={{listStyleType: "none"}}>
                    {React.Children.map(items, (value, index) => <li key={'item-' + index}>{index + 1}. {value}</li>)}
                </ul>
            </div>
        );
    }
}

ShoppingList.propTypes = {
    name: PropTypes.string.isRequired
}

export default ShoppingList;