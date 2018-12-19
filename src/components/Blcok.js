import React, {Component} from 'react'
import './Block.less'

export default class Block extends Component {
    render () {
        return (
            <div className="comp-block">
                {this.props.children}
            </div>
        )
    }
}