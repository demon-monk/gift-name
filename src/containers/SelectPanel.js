import React, {Component} from 'react'
import Block from '../components/Blcok'
import Tag from '../components/Tag';
import Input from '../components/Input';
import Wizard from '../components/Wizard'
import Button from '../components/Button'
import axios from 'axios'
import './SelectPanel.less'

const SelectStatus = {
    BASIC: 'basic',
    CONDIMENT: 'condiment',
}

const titles = [
    '天灵灵，地灵灵',
    '赐我一个英文名',
]

const condiments = ['天真', '智慧', '美貌', '勇敢', 'XX']

export default class SelectPanel extends Component {
    constructor (props) {
        super(props)
        this.state = {
            status: SelectStatus.BASIC,
            titleIndex: 0,
            gender: null,
            name: '',
            condiment: '',
        }
    }

    componentDidMount () {
        setInterval(() => {
            this.setState({
                titleIndex: this.state.titleIndex + 1
            })
        }, 1500)
    }

    onClickGenderTag = (value) => {
        this.setState({
            gender: value
        })
    }

    onNameChange = ({target}) => {
        this.setState({
            name: target.value
        })
    }

    onClickCondimentTag = (value) => {
        this.setState({
            condiment: value
        })
    }
    
    submitParams = () => {
        axios.post(
            'https://hackthon-name.thellsapi.com/post',
            {
                name: this.state.name,
                gender: this.state.gender,
                tag: this.state.condiment
            }
        ).then(() => {
            // go to result
        })
    }

    gotoCondiment = () => {
        this.setState({
            status: SelectStatus.CONDIMENT
        })
    }

    renderBasicsPanel () {
        return (
            <div className="select-panel-panel">
                <Wizard isWave/>
                <Block>
                    <div className="select-panel-row">
                        <div className="select-panel-label">性别</div>
                        <Tag value={1} onClick={this.onClickGenderTag} active={this.state.gender === 1}>男</Tag>
                        <Tag value={0} onClick={this.onClickGenderTag} active={this.state.gender === 0}>女</Tag>
                    </div>
                    <div className="select-panel-row">
                        <div className="select-panel-label">姓名</div>
                        <Input value={this.state.name} placeholder="请输入中文全名" onChange={this.onNameChange}/>
                    </div>
                    <div className="select-panel-bottom">
                        <Button active={this.state.name && this.state.gender !== null} onClick={this.gotoCondiment}>下一步</Button>
                    </div>
                </Block>
            </div>
        )
    }

    renderCondimentPanel () {
        return (
            <div class="select-panel-panel">
                <Wizard/>
                <Block>
                    <div className="select-panel-row">
                        <div className="select-panel-label">
                            给你的名字加点味料
                        </div>
                    </div>
                    <div className="select-panel-block">
                        {condiments.map((condiment) => (
                            <div className="select-panel-tag-wrapper">
                                <Tag value={condiment} onClick={this.onClickCondimentTag} active={this.state.condiment === condiment}>{condiment}</Tag>
                            </div>
                        ))}
                    </div>
                    <div className="select-panel-bottom">
                        <Button active={!!this.state.condiment} onClick={this.submitParams}>下一步</Button>
                    </div>
                </Block>
            </div>
        )
    }


    render () {
        const titleIndex = this.state.titleIndex % 2
        return (
            <div className="select-panel">
                {this.state.status === SelectStatus.BASIC && <div className="select-panel-title">{titles[titleIndex]}</div>}
                {this.state.status === SelectStatus.BASIC ? this.renderBasicsPanel() : this.renderCondimentPanel()}
            </div>
        )
    }
}