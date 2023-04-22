import styled from 'styled-components'

export const TodoHeader = styled.div`
  padding-bottom: 16px;
  display: flex;
  font-size: 24px;
  justify-content: space-between;
  & span {
    padding: 0 8px;
  }
`
export const IconClickButton = styled.span`
  padding: 0;
  font-size: 16px;
`

export const DateCompStyled = styled.span`
  padding: 0;
  border: 0;
  > .ant-picker {
    padding: 0;
    border: 0;
    input {
      display: none;
    }
    .ant-picker-suffix {
      font-size: 20px;
    }
  }
`
export const HoverOver = styled.span`
  :hover {
    background-color: #f5f5f5;
  }
`
