import { DatePicker, Space } from 'antd'
import { Component } from 'react'
import { DateCompStyled } from '../../assets/comp'

export default class DateComp extends Component {
  constructor(props, context) {
    super(props)
    this.state = {
      datetime: '',
    }
  }
  onChange = (date, dateString) => {
    console.log(date, dateString)
  }
  render() {
    return (
      <DateCompStyled>
        <DatePicker onChange={this.onChange} />
        {}
      </DateCompStyled>
    )
  }
}
