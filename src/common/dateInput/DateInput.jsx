import { Input, Divider } from 'antd'
import { Component } from 'react'
import DateComp from '../date/DateComp'
import { DownOutlined } from '@ant-design/icons'
import { HoverOver } from '../../assets/comp'
const HEIGHT = 32
export default class DateInput extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div style={{ width: '80%' }}>
        <Input style={{ display: 'inline', width: '90%' }} allowClear={false} />
        <div
          style={{
            display: 'inline-block',
            lineHeight: '32px',
            height: '32px',
            position: 'relative',
            left: '-65px',
          }}
        >
          <HoverOver style={{ position: 'relative', bottom: '-4px' }}>
            <DateComp />
          </HoverOver>
          <Divider type="vertical" />
          <HoverOver>
            <DownOutlined />
          </HoverOver>
        </div>
      </div>
    )
  }
}
