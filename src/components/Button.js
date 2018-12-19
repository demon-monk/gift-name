import React from 'react'
import './Button.less'
export default (props) => {
    const activeClassName = props.active ? 'comp-button-active' : ''
    return (
        <div className={`comp-button ${activeClassName}`}>{props.children}</div>
    )
}