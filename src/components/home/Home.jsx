import {
  CheckSquareFilled,
  CalendarFilled,
  AppstoreOutlined,
  AimOutlined,
  SearchOutlined,
  BellFilled,
  QuestionCircleOutlined,
} from '@ant-design/icons'
import { Layout, Menu, theme, Avatar, Badge } from 'antd'
import { useState } from 'react'
import TodoHome from '../todo/todoHome/TodoHome'
const { Content, Sider } = Layout

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  }
}
const ColorList = ['#f56a00', '#7265e6', '#ffbf00', '#00a2ae']
const UserList = ['U', 'Lucy', 'Tom', 'Edward']

export default function Home() {
  const [setCollapsed] = useState(false)
  const {
    token: { colorBgContainer },
  } = theme.useToken()
  const [color, setColor] = useState(ColorList[0])
  const [user, setUser] = useState(UserList[0])

  const mainItems = [
    getItem(
      <Badge dot>
        <Avatar
          style={{
            // backgroundColor: color,
            verticalAlign: 'middle',
            color: color,
          }}
          shape="square"
          size="small"
          // icon={<UserOutlined />}
        >
          {user}
        </Avatar>
      </Badge>
    ),
    getItem(<CheckSquareFilled style={{ fontSize: 'large' }} />),
    getItem(<CalendarFilled style={{ fontSize: 'large' }} />),
    getItem(<AppstoreOutlined style={{ fontSize: 'large' }} />),
    getItem(<AimOutlined style={{ fontSize: 'large' }} />),
    getItem(<SearchOutlined style={{ fontSize: 'large' }} />),
  ]
  const bottomItems = [
    getItem(<BellFilled style={{ fontSize: 'large' }} />),
    getItem(<QuestionCircleOutlined style={{ fontSize: 'large' }} />),
  ]
  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider
        width={70}
        onCollapse={(value) => setCollapsed(value)}
        style={{ backgroundColor: colorBgContainer }}
      >
        <Menu
          // theme="dark"
          defaultSelectedKeys={['1']}
          mode="inline"
          items={mainItems}
          overflowedIndicator
        />
        <Menu
          // theme="dark"
          defaultSelectedKeys={['1']}
          mode="inline"
          items={bottomItems}
          overflowedIndicator
          style={{
            position: 'absolute',
            bottom: '30px',
          }}
        />
      </Sider>
      <Layout className="site-layout">
        <Content
          style={{
            margin: '0',
          }}
        >
          <div
            style={
              {
                // padding: 24,
              }
            }
          >
            <TodoHome />
          </div>
        </Content>
      </Layout>
    </Layout>
  )
}
