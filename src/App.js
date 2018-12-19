import React, { Component } from 'react';
import Block from './components/Blcok'
import Tag from './components/Tag'
import Button from './components/Button'
import Input from './components/Input'
import Wizard from './components/Wizard'
import SelectPanel from './containers/SelectPanel'
import Slider from './components/slider'
import Speaker from './components/Speaker'
import ResultCard from './components/ResultCard'
import Result from './containers/Result'
import './App.less'

const AppStatus = {
  SELECT: 'select',
  RESULT: 'result',
}

const results = [
  {
    name: 'Bang',
    src: 'http://127.0.0.1:8080/1.0/get_badge_2.mp3',
    match: 0.99834,
    explanation: '安徽发阿发asdfadsfgdsfjlmks.dv.v'
  },
  {
    name: 'Bang',
    src: 'http://127.0.0.1:8080/1.0/get_badge_2.mp3',
    match: 0.99834,
    explanation: '安徽发阿发asdfadsfgdsfjlmks.dv.v'
  }
]
class App extends Component { 
  constructor(props) {
    super(props)
    this.state = {
      status: AppStatus.SELECT,
      results: []
    }
  }

  onResultLoaded = (results) => {
    this.setState({
      status: AppStatus.RESULT,
      results
    })
  }

  render() {
    return (
      <div className="App">
      {
        this.state.status === AppStatus.SELECT &&
        <SelectPanel onResultLoaded={this.onResultLoaded} />
      }
        {/* <Wizard isWave/>
        <Block>
          <div style={{display: "flex", flexWrap: 'wrap', justifyContent: "space-between"}}>
            <Tag>男</Tag>
            <Tag>男</Tag>
            <Tag>男</Tag>
            <Tag>男</Tag>
            <Tag>男</Tag>
          </div>
          <Input placeholder="请输入中文全名" />
          <Button>下一步</Button>
        </Block> */}
        {/* <SelectPanel /> */}
        {/* <div style={{position:'relative',overflow:'hidden', width: '300px'}}>
          <Slider auto={false}>
            {
              [1,2,3].map((item) => <div style={{width: '300px',height: '200px', background:'#fff'}}>{'some long text'}</div>)
            }
          </Slider>
        </div> */}
        {/* <Speaker src="http://127.0.0.1:8080/1.0/get_badge_2.mp3"/> */}
        {/* <ResultCard 
          name="bang"
          src="http://127.0.0.1:8080/1.0/get_badge_2.mp3"
          match="0.83253"
          explanation="阿道夫哈里发类似的看法拉水电费难度费那事"
        /> */}
        {this.state.status === AppStatus.RESULT && <Result results={this.state.results}/>}
      </div>
    )
  }
}

export default App;
