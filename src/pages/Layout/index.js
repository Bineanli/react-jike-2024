import { Layout, Menu, Popconfirm } from 'antd';
import {
  HomeOutlined,
  DiffOutlined,
  EditOutlined,
  LogoutOutlined,
} from '@ant-design/icons';
import './index.scss';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchUserInfo} from '@/store/modules/User'

const { Header, Sider } = Layout;

const items = [
  {
    label: '首页',
    key: '/',
    icon: <HomeOutlined />,
  },
  {
    label: '文章管理',
    key: '/article',
    icon: <DiffOutlined />,
  },
  {
    label: '创建文章',
    key: '/publish',
    icon: <EditOutlined />,
  },
];

const GeekLayout = () => {
  const navigate = useNavigate()
  const onMenuClick = (route) => {
    console.log('menu click',route);
    const path = route.key;
    navigate(path);
  }

  //反向高亮
  //1.获取当前路由
  const location = useLocation()
  console.log(location.pathname)
  const selectedKey = location.pathname

  //触发个人用户信息action
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchUserInfo())
  },[dispatch])

  const name = useSelector(state => state.user.userInfo.name)

  
  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        <div className="user-info">
          <span className="user-name">{name}</span>
          <span className="user-logout">
            <Popconfirm title="是否确认退出？" okText="退出" cancelText="取消">
              <LogoutOutlined /> 退出
            </Popconfirm>
          </span>
        </div>
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            theme="dark"
            selectedKeys={selectedKey}
            items={items}
            style={{ height: '100%', borderRight: 0 }}
            onClick={onMenuClick}
          />
        </Sider>
        <Layout className="layout-content" style={{ padding: 20 }}>
          {/*二级路由的出口*/}
          <Outlet />
        </Layout>
      </Layout>
    </Layout>
  );
};

export default GeekLayout;
