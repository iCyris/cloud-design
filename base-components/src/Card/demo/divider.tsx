/**
 * @title 分割线
 * @description 卡片分割线
 */

import * as React from 'react'
import styled from 'styled-components'

import { Card, Button, Box } from '@alicloudfe/components'

const commonProps = {
  title: 'Title',
  style: { width: 300 },
  subTitle: 'Sub-title',
  extra: (
    <Button text type="primary">
      Link
    </Button>
  )
}

export default function DemoComponent() {
  return (
    <Style>
      <Box direction="row" spacing={20}>
        <Card free style={{ width: 300 }}>
          <Card.Header title="Simple Card" {...commonProps} />
          <Card.Divider />
          <Card.Content>
            Lorem ipsum dolor sit amet, est viderer iuvaret perfecto et. Ne
            petentium quaerendum nec, eos ex recteque mediocritatem, ex usu
            assum legendos temporibus. Ius feugiat pertinacia an, cu verterem
            praesent quo.
          </Card.Content>
          <Card.Divider />
          <Card.Actions>
            <Button type="primary" key="action1" text>
              Action 1
            </Button>
            <Button type="primary" key="action2" text>
              Action 2
            </Button>
          </Card.Actions>
        </Card>
        <Card free style={{ width: 300 }}>
          <Card.Header title="Simple Card" {...commonProps} />
          <Card.Divider inset />
          <Card.Content>
            Lorem ipsum dolor sit amet, est viderer iuvaret perfecto et. Ne
            petentium quaerendum nec, eos ex recteque mediocritatem, ex usu
            assum legendos temporibus. Ius feugiat pertinacia an, cu verterem
            praesent quo.
          </Card.Content>
          <Card.Divider inset />
          <Card.Actions>
            <Button type="primary" key="action1" text>
              Action 1
            </Button>
            <Button type="primary" key="action2" text>
              Action 2
            </Button>
          </Card.Actions>
        </Card>
      </Box>
    </Style>
  )
}
const Style = styled.div``
