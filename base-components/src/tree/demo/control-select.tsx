/**
 * @title 单选与多选
 * @description 展示单选与多选的用法。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Checkbox, Tree } from '@alicloudfe/components'

const data = [
  {
    key: '0-0',
    label: '0-0',
    children: [
      {
        key: '0-0-0',
        label: '0-0-0',
        children: [
          {
            key: '0-0-0-0',
            label: '0-0-0-0',
            children: [
              {
                key: '0-0-0-0-0',
                label: '0-0-0-0-0'
              }
            ]
          },
          {
            key: '0-0-0-1',
            label: '0-0-0-1'
          }
        ]
      },
      {
        key: '0-0-1',
        label: '0-0-1',
        children: [
          {
            key: '0-0-1-0',
            label: '0-0-1-0'
          },
          {
            key: '0-0-1-1',
            label: '0-0-1-1'
          }
        ]
      }
    ]
  }
]

class Demo extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedKeys: [],
      multiple: false
    }
    this.handleSelect = this.handleSelect.bind(this)
    this.handleCheck = this.handleCheck.bind(this)
  }

  handleSelect(keys, info) {
    console.log(keys, info)

    this.setState({
      selectedKeys: keys
    })
  }

  handleCheck() {
    this.setState({
      multiple: !this.state.multiple,
      selectedKeys: []
    })
  }

  render() {
    const { multiple, selectedKeys } = this.state

    return (
      <div className="control-select-demo">
        <label className="multiple-check">
          <Checkbox checked={multiple} onChange={this.handleCheck} />
          <span className="multiple-text">Enable multiple</span>
        </label>
        <Tree
          defaultExpandAll
          multiple={multiple}
          selectedKeys={selectedKeys}
          onSelect={this.handleSelect}
          dataSource={data}
        />
      </div>
    )
  }
}

export default function DemoComponent() {
  return (
    <Style>
      <Demo />
    </Style>
  )
}
const Style = styled.div`
  .control-select-demo .multiple-check {
    display: block;
    margin-bottom: 10px;
  }

  .control-select-demo .multiple-text {
    display: inline-block;
    margin-left: 10px;
    vertical-align: middle;
    color: #666;
    font-size: 14px;
  }
`
