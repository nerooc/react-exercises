import React from 'react';
import './UserOutput.css';

export default class UserOutput extends React.Component {


    render() {
        {/* Inline styles */}
        const paragraph1 = {
            fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
            color: 'green',
            fontSize: '30px'
        };

        return (
            <div>
                <p style={paragraph1}>{this.props.username}</p>
                <p>{this.props.children}</p>
            </div>
        );
    }

}