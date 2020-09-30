/**
 * @title 基本进度条
 * @description 普通模式的进度条，通过 `percent` 属性指定进度，通过 `textRender` 控制右侧文本信息的展示，
 */

import * as React from 'react'
import styled from 'styled-components'

import { Progress } from '@alicloudfe/components'

export default function DemoComponent() {
  return (
    <Style>
      <div>
        <Progress percent={30} textRender={() => ''} />
        <Progress percent={50} />
        <Progress percent={90} />
        <Progress percent={40} />
        <Progress percent={40} hasBorder size="large" />
      </div>
    </Style>
  )
}
const Style = styled.div``
