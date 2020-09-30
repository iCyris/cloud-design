/**
 * @title 选择可控
 * @description 演示全选和单选受控的功能
 */

import * as React from 'react'
import styled from 'styled-components'

import { Table, Button } from '@alicloudfe/components'

const dataSource = (i, j) => {
    const result = []
    for (let a = i; a < j; a++) {
      result.push({
        title: {
          name: `Quotation for 1PCS Nano ${3 + i}.0 controller compatible`
        },
        id: 100306660940 + a,
        time: 2000 + a
      })
    }
    return result
  },
  render = (value, index, record) => {
    return <a href="javascript:;">Remove({record.id})</a>
  }

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      rowSelection: {
        onChange: this.onChange.bind(this),
        onSelect: function (selected, record, records) {
          console.log('onSelect', selected, record, records)
        },
        onSelectAll: function (selected, records) {
          console.log('onSelectAll', selected, records)
        },
        selectedRowKeys: [100306660940, 100306660941],
        getProps: (record) => {
          return {
            disabled: record.id === 100306660941
          }
        }
      },
      dataSource: dataSource(0, 5)
    }
  }
  onChange(ids, records) {
    const { rowSelection } = this.state
    rowSelection.selectedRowKeys = ids
    console.log('onChange', ids, records)
    this.setState({ rowSelection })
  }
  clear() {
    const { rowSelection } = this.state
    rowSelection.selectedRowKeys = []
    this.setState({ rowSelection })
  }
  toggleLoading() {
    this.setState({ loading: !this.state.loading })
  }
  changeMode() {
    const { rowSelection } = this.state
    const mode = rowSelection.mode
    const selectedRowKeys = rowSelection.selectedRowKeys
    rowSelection.mode = mode === 'single' ? 'multiple' : 'single'
    rowSelection.selectedRowKeys =
      selectedRowKeys.length === 1 ? selectedRowKeys : []
    this.setState({ rowSelection })
  }
  modifyDataSource() {
    this.setState({
      dataSource: dataSource(9, 14)
    })
  }
  render() {
    return (
      <div>
        <p>
          <Button onClick={this.clear.bind(this)}>Clear Selection</Button>&nbsp;
          <Button onClick={this.changeMode.bind(this)}>Change mode</Button>
          &nbsp;
          <Button onClick={this.toggleLoading.bind(this)}>
            Toggle loading
          </Button>
          &nbsp;
          <Button onClick={this.modifyDataSource.bind(this)}>
            Modify dataSource
          </Button>
        </p>
        <Table
          dataSource={this.state.dataSource}
          loading={this.state.loading}
          rowSelection={this.state.rowSelection}
        >
          <Table.Column title="Id" dataIndex="id" />
          <Table.Column title="Title" dataIndex="title.name" />
          <Table.Column title="Time" dataIndex="time" />
          <Table.Column cell={render} width={200} />
        </Table>
      </div>
    )
  }
}

export default function DemoComponent() {
  return (
    <Style>
      <App />
    </Style>
  )
}
const Style = styled.div``
