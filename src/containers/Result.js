import React, {Component} from 'react'
import ResultCard from '../components/ResultCard'
import Slider from '../components/slider'

import './Result.less'
export default (props) => {
    return (
        <div className="container-result">
            <div className="container-result-title">赐名结果</div>
            <div className="slider-wrapper">
                <div className="old-man"></div>
                <Slider auto={false}>
                   { props.results.map((result) => <ResultCard {...result} />)}
                </Slider>
            </div>
            <button onClick={props.onPlayAgain}>再玩一次</button>
        </div>
    )
}
