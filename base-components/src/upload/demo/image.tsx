/**
 * @title 图片列表
 * @description 提醒: `https://www.easy-mock.com/mock/5b713974309d0d7d107a74a3/alifd/upload`接口:
 */

import * as React from 'react'
import styled from 'styled-components'

import { Upload, Button } from '@alicloudfe/components'

function beforeUpload(info) {
  console.log('beforeUpload callback : ', info)
}

function onChange(info) {
  console.log('onChange callback : ', info)
}
export default function DemoComponent() {
  return (
    <Style>
      <Upload
        listType="image"
        action="https://www.easy-mock.com/mock/5b713974309d0d7d107a74a3/alifd/upload"
        accept="image/png, image/jpg, image/jpeg, image/gif, image/bmp"
        beforeUpload={beforeUpload}
        onChange={onChange}
        defaultValue={[
          {
            uid: '0',
            name: 'IMG.png',
            state: 'done',
            url:
              'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
            downloadURL:
              'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
            imgURL:
              'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
            size: 2000
          },
          {
            uid: '1',
            name: 'IMG.png',
            percent: 50,
            state: 'uploading',
            url:
              'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
            downloadURL:
              'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
            imgURL:
              'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg'
          },
          {
            uid: '2',
            name: 'IMG.png',
            state: 'error',
            url:
              'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
            downloadURL:
              'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
            imgURL:
              'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg'
          },
          {
            uid: '3',
            name: 'IMG.png',
            state: 'error',
            url:
              'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
            downloadURL:
              'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
            imgURL:
              'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
            errorMsg: 'Fail to Upload something'
          }
        ]}
      >
        <Button type="primary" style={{ margin: '0 0 10px' }}>
          Upload File
        </Button>
      </Upload>
    </Style>
  )
}
const Style = styled.div``
