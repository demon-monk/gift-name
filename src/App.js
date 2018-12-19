import React, { Component } from 'react';
import Block from './components/Blcok'
import Tag from './components/Tag'
import Button from './components/Button'
import Input from './components/Input'
import Wizard from './components/Wizard'
import SelectPanel from './containers/SelectPanel'
import './App.less'
class App extends Component { 
  render() {
    return (
      <div className="App">
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
        <SelectPanel />
      </div>
    )
  }
}

export default App;
