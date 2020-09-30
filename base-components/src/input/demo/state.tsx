/**
 * @title 错误状态
 * @description 为 `Input` 设置 `error` 状态；
 */

import * as React from 'react'
import styled from 'styled-components'

import { Input } from '@alicloudfe/components'

export default function DemoComponent() {
  return (
    <Style>
      <div>
        <Input
          state="error"
          placeholder="error"
          size="small"
          aria-live="assertive"
          aria-label="error"
        />
        <br />
        <br />
        <Input
          state="error"
          hasLimitHint
          maxLength={100}
          placeholder="error"
          size="medium"
          aria-live="assertive"
          aria-label="error"
        />
        <br />
        <br />
        <Input
          state="error"
          multiple
          placeholder="error"
          size="large"
          aria-live="assertive"
          aria-label="error"
        />
        <br />
        <br />

        <Input
          state="success"
          size="small"
          value="success"
          aria-live="assertive"
          aria-label="success"
        />
        <br />
        <br />
        <Input
          state="success"
          maxLength={100}
          hasLimitHint
          placeholder="success"
          size="medium"
          aria-live="assertive"
          aria-label="success"
        />
        <br />
        <br />
        <Input
          state="success"
          placeholder="success"
          size="large"
          aria-live="assertive"
          aria-label="success"
        />
        <br />
        <br />

        <Input
          state="loading"
          placeholder="loading"
          size="small"
          aria-live="assertive"
          aria-label="loading"
        />
        <br />
        <br />
        <Input
          state="loading"
          placeholder="loading"
          size="medium"
          aria-live="assertive"
          aria-label="loading"
        />
        <br />
        <br />
        <Input
          state="loading"
          placeholder="loading"
          size="large"
          aria-live="assertive"
          aria-label="loading"
        />
        <br />
        <br />
      </div>
    </Style>
  )
}
const Style = styled.div``
