import {
  TableOutlined,
  RestOutlined,
  CalendarOutlined,
  GroupOutlined,
  CarryOutOutlined,
} from '@ant-design/icons'
import { Layout, Menu, theme, Divider } from 'antd'
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

const topItems = [
  getItem('今天', '1', <CalendarOutlined />),
  getItem('最近7天', '2', <TableOutlined />),
  getItem('收集箱', '3', <GroupOutlined />),
]
const bottomItems = [
  getItem('已完成', '4', <CarryOutOutlined />),
  getItem('垃圾桶', '5', <RestOutlined />),
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
          items={topItems}
          overflowedIndicator
        />
        <Divider />
        <div>清单</div>
        <div>标签</div>
        <div>过滤器</div>
        <Divider />
        <Menu
          // theme="dark"
          // defaultSelectedKeys={['1']}
          mode="inline"
          items={bottomItems}
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
