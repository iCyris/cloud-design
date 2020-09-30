/**
 * @title 自定义面板页脚
 * @description 可以通过 `footerRender` 自定义对面板页脚的定制。
 */

import * as React from 'react'
import styled from 'styled-components'

import { DatePicker } from '@alicloudfe/components'

const { RangePicker } = DatePicker

function footerRender() {
  return <div className="custom-footer">👍 Some useful info here</div>
}

export default function DemoComponent() {
  return (
    <Style>
      <div>
        <DatePicker footerRender={footerRender} />
        &nbsp;&nbsp;
        <RangePicker footerRender={footerRender} />
      </div>
    </Style>
  )
}
const Style = styled.div`
  .custom-footer {
    padding: 12px;
    font-size: 12px;
    border-top: 1px solid #dcdee3;
  }
`
