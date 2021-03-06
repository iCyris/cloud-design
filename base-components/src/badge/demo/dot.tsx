/**
 * @title 讨嫌的小红点
 * @description 没有具体的数字。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Badge, Icon } from '@alicloudfe/components'

export default function DemoComponent() {
  return (
    <Style>
      <div>
        <Badge dot>
          <Icon type="email" />
        </Badge>
        <Badge dot>
          <a href="#">A Link</a>
        </Badge>
      </div>
    </Style>
  )
}
const Style = styled.div`
  .next-badge {
    margin-right: 16px;
  }
`
