import {
  FileOutlined,
  PieChartOutlined,
  UserOutlined,
  DesktopOutlined,
  TeamOutlined,
} from '@ant-design/icons'
import { Layout, Menu, theme } from 'antd'
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

const items = [
  getItem(<PieChartOutlined />),
  getItem(<DesktopOutlined />),
  getItem(<UserOutlined />),
  getItem(<TeamOutlined />),
  getItem(<FileOutlined />),
]

const App = () => {
  const [setCollapsed] = useState(false)
  const {
    token: { colorBgContainer },
  } = theme.useToken()
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
          items={items}
          overflowedIndicator
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
export default App
