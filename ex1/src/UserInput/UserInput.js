import React from 'react';
import './UserInput.css';

export default class UserInput extends React.Component {
    render() {
        return (
            <input className = "beautifulInput" type='text' onChange={this.props.change} value={this.props.username}/>
        );
    }

}