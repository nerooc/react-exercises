import React from 'react';
import './ValidationComponent.css';

const ValidationComponent = (props) => {
            
        let validationText = null;

        if(props.length >= 5){
            validationText = <p>Text long enough</p>;
        } else {
            validationText = <p>Text too short</p>;
        }

        return (
            <div>
               {validationText}
            </div>
        );
    }

export default ValidationComponent;