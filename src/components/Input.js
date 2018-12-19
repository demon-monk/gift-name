import React from 'react'
import './Input.less'
export default (props) => {
    return (
        <input
            className="comp-input"
            placeholder={props.placeholder}
            onChange={props.onChange}
            value={props.value}
        />
    )
}