/**
 * @title 无障碍
 * @description 组件内置了部分支持无障碍, 但是额外需要开发者手动事情才能完整支持无障碍: 给Collapse传入一个id, 组件会根据Collapse的id自动给每一个Panel生成Id。如果你想指定Panel的Id也可以, 给某个Panel传入Id属性,就会覆盖根据CollapseId生成的Id。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Collapse } from '@alicloudfe/components'

const Panel = Collapse.Panel

export default function DemoComponent() {
  return (
    <Style>
      <Collapse id="collapse-accessibility">
        <Panel
          id="panel-accessibility"
          title="There is a long title, you can set the multiTitle to multi line display, the associated configuration properties and a single height is not the same, the specific configuration platform configuration can be configured."
        >
          <ul>
            <li>Promotions are marketing campaigns ran by Marketplace</li>
            <li>
              Participate to sale your products during that promotion and make a
              profit
            </li>
          </ul>
        </Panel>
        <Panel title="What are Promotion Products?">
          <ul>
            <li>
              Promotion Products is a service that helps you to promote products
              you list on Marketplace during a certain time range
            </li>
            <li>
              You can choose which products should be available for the
              promotion
            </li>
            <li>
              Not all Products of you will be available, because Promotions will
              only attract certain Product areas
            </li>
          </ul>
        </Panel>
      </Collapse>
    </Style>
  )
}
const Style = styled.div``
