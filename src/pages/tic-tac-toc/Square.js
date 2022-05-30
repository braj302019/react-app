import React from 'react';
import * as PropTypes from 'prop-types';

class Square extends React.Component {

    render() {
        const { value, onClick } = this.props;
        return (
            <button className="square" onClick={onClick}>
                {value}
            </button>
        );
    };
}

Square.propTypes = {
    value: PropTypes.string,
    onClick: PropTypes.func.isRequired
}

Square.defaultProps = {
    onClick: () => {}
}

export default Square;