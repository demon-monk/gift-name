import React from 'react'
import './Wizard.less'

export default (props) => {
    return (
        <div className="comp-wizard">
            <div className="wizard-head"></div>
            {props.isWave ? <div className="wizard-body-wave"></div> : <div className="wizard-body-magic"></div>}
        </div>
    )
}