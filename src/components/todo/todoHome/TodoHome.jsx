import {
  FileOutlined,
  PieChartOutlined,
  UserOutlined,
  DesktopOutlined,
  TeamOutlined,
} from '@ant-design/icons'
import { Layout, Menu, theme } from 'antd'
import { useState } from 'react'
import './TodoHome.less'
import MainPage from '../../../common/mainPage/MainPage'
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
  getItem('今天', '1', <PieChartOutlined />),
  getItem('最近7天', '2', <DesktopOutlined />),
  getItem('收集箱', '3', <UserOutlined />),
  getItem('已完成', '4', <TeamOutlined />),
  getItem('垃圾桶', '5', <FileOutlined />),
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
        width={212}
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
            padding: '20px 16px 16px 16px',
            backgroundColor: colorBgContainer,
          }}
        >
          <MainPage />
        </Content>
      </Layout>
    </Layout>
  )
}
export default App
