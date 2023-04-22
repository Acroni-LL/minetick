import { Input } from 'antd'
import {
  FileOutlined,
  MenuFoldOutlined,
  EllipsisOutlined,
  FieldTimeOutlined,
} from '@ant-design/icons'
import { TodoHeader, IconClickButton } from '../../assets/comp'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import DateInput from '../dateInput/DateInput'

export default class App extends Component {
  constructor(props, context) {
    super(props)
  }
  render() {
    return (
      <>
        <TodoHeader>
          <span>
            <MenuFoldOutlined style={{ fontSize: '16px' }} />
            {this.props.title ? this.props.title : '今天'}
          </span>
          <span>
            <IconClickButton>
              <FieldTimeOutlined />
              <EllipsisOutlined />
            </IconClickButton>
          </span>
        </TodoHeader>
        <DateInput />
      </>
    )
  }
}
