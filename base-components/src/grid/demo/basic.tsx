/**
 * @title 基础布局
 * @description 通过 `Col` 的 `span` 属性指定该列宽度占整行宽度24分之几或5分之几。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Grid } from '@alicloudfe/components'

const { Row, Col } = Grid

export default function DemoComponent() {
  return (
    <Style>
      <div className="basic-demo">
        <div className="demo-title">One</div>
        <Row>
          <Col span="24">col-24</Col>
        </Row>

        <div className="demo-title">Two</div>
        <Row>
          <Col span="12">col-12</Col>
          <Col span="12">col-12</Col>
        </Row>

        <div className="demo-title">Three</div>
        <Row>
          <Col span="8">col-8</Col>
          <Col span="8">col-8</Col>
          <Col span="8">col-8</Col>
        </Row>

        <div className="demo-title">Four</div>
        <Row>
          <Col span="6">col-6</Col>
          <Col span="6">col-6</Col>
          <Col span="6">col-6</Col>
          <Col span="6">col-6</Col>
        </Row>

        <div className="demo-title">Five</div>
        <Row>
          <Col span="1p5">col-1p5</Col>
          <Col span="1p5">col-1p5</Col>
          <Col span="1p5">col-1p5</Col>
          <Col span="1p5">col-1p5</Col>
          <Col span="1p5">col-1p5</Col>
        </Row>

        <div className="demo-title">Six</div>
        <Row>
          <Col span="4">col-4</Col>
          <Col span="4">col-4</Col>
          <Col span="4">col-4</Col>
          <Col span="4">col-4</Col>
          <Col span="4">col-4</Col>
          <Col span="4">col-4</Col>
        </Row>
      </div>
    </Style>
  )
}
const Style = styled.div`
  .basic-demo .demo-title {
    margin-left: 20px;
  }

  .basic-demo .next-row {
    margin: 10px 0;
  }

  .basic-demo .next-col {
    border: 1px solid #ccc;
    border-radius: 3px;
    background-color: #ececec;
    height: 30px;
    line-height: 30px;
    text-align: center;
  }
`
