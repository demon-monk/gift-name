import React from 'react'
import './Tag.less'
export default (props) => {
    const activeClassName = props.active ? 'comp-tag-active' : ''
    return (
        <div className={`comp-tag ${activeClassName}`} onClick={() => props.onClick(props.value)}>{props.children}</div>
    )
}