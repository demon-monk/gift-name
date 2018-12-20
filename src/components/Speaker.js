import React, {Component} from 'react'
import './Speaker.less'
export default class Speaker extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
        this.myRef = React.createRef()
    }

    componentDidMount () {
        this.audioDom = this.myRef.current.getElementsByTagName('audio')[0]
        this.audioDom.play()
    }

    onClick = () => {
        this.audioDom.play()
    }

    render () {
        return (
            <div className="comp-speaker" ref={this.myRef} onClick={this.onClick}>
                <audio src={this.props.src} />
            </div>
        )
    }
}