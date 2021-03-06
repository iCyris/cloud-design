import * as React from 'react'
import styled from 'styled-components'
import { Button, Modal, Icon } from '@alicloudfe/components'

const Demo = () => {
  const [visible, onVisibleChange] = React.useState(false)
  const onClose = () => {
    onVisibleChange(false)
  }
  const onOpen = () => {
    onVisibleChange(true)
  }
  const [sideDrawerVisible, onSideDrawerVisibleChange] = React.useState(true)
  return (
    <Style>
      <div>
        <Button onClick={onOpen}>打开Modal</Button>
        <Modal
          title="标题"
          description="描述区域"
          visible={visible}
          onClose={onClose}
          sideDrawerLabel="侧栏"
          sideDrawer={<div className="custom-content" />}
          sideDrawerVisible={sideDrawerVisible}
          onSideDrawerVisibleChange={onSideDrawerVisibleChange}
          operations={
            <>
              <Button type="secondary">
                <Icon type="paper-pen" />
                编辑
              </Button>
              <Button type="secondary">
                <Icon type="save" />
                保存
              </Button>
            </>
          }
        >
          <div className="custom-content" />
        </Modal>
      </div>
    </Style>
  )
}

export default Demo

const Style = styled.div`
  .custom-content {
    height: 2000px;
  }
`
