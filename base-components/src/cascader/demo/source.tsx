/**
 * @title 异步加载数据
 * @description 展示动态获取数据的用法。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Cascader } from '@alicloudfe/components'
import 'whatwg-fetch'

const dataSource = [
  {
    value: '2974',
    label: '西安'
  },
  {
    value: '2980',
    label: '铜川'
  }
]

class Demo extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      dataSource
    }

    this.onLoadData = this.onLoadData.bind(this)
  }

  onLoadData(data, source) {
    console.log(data, source)

    return new Promise((resolve) => {
      source.children =
        source.value === '2974'
          ? [
              { value: '2975', label: '西安市', isLeaf: true },
              { value: '2976', label: '高陵县', isLeaf: true }
            ]
          : [
              { value: '2981', label: '铜川市', isLeaf: true },
              { value: '2982', label: '宜君县', isLeaf: true }
            ]
      setTimeout(() => {
        this.setState(
          {
            dataSource: this.state.dataSource
          },
          resolve
        )
      }, 500)
    })
  }

  render() {
    return (
      <Cascader
        canOnlySelectLeaf
        dataSource={this.state.dataSource}
        loadData={this.onLoadData}
      />
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
  .cascader-value {
    margin-bottom: 10px;
    font-size: 14px;
    color: #666;
  }
`
