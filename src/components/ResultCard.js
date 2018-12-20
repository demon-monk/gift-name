import React from 'react'
import './ResultCard.less'
import Speaker from './Speaker'
import {capitalize,formatPercent} from '../utils'

// 水滴需要切一下
// 喇叭需要切一下

export default (props) => {
    return (
        <div className="comp-result-card">
            <div className="title">
                <span className="title-item">{capitalize(props.name)}</span>
                <Speaker src={`http://pjzm4dpxv.bkt.clouddn.com/${props.name}.mp3`} />
            </div>
            <div className="data">
                <span className="data-match">匹配度 {formatPercent(props.match)}</span>
                <span className="data-rarity">稀有度 SR</span>
            </div>
            <div className="explanation">
                {`含义: ${props.explanation}`}
            </div>
        </div>
    )
}