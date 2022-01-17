import React from 'react';
import * as PropTypes from 'prop-types';

class ShoppingList extends React.Component {
    render() {
        const {name} = this.props;
        return (
            <div className="shopping-list">
                <h1>Shopping List for {name}</h1>
                <ul>
                    <li>Instagram</li>
                    <li>WhatsApp</li>
                    <li>Oculus</li>
                </ul>
            </div>
        );
    }
}

ShoppingList.propTypes = {
    name: PropTypes.string.isRequired
}

export default ShoppingList;