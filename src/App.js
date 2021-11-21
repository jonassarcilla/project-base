import React, { Component } from 'react'
import { Layout, Menu, Breadcrumb, Row, Col, Dropdown, Avatar, PageHeader, Input, Button, Tooltip, Radio, Divider, Statistic, Card, Tabs, Select  } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
  DownOutlined,
  SearchOutlined,
  PlusOutlined,
  CheckOutlined,
  UsergroupAddOutlined
} from '@ant-design/icons';

import './App.css';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const { Search } = Input;
const { Meta } = Card;
const { TabPane } = Tabs;
const { Option } = Select;

export default class App extends Component {
  state = {
    collapsed: false,
    current: 'SubMenu',
    activeTabKey2: 'app'
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({ current: e.key });
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  onChange = e => {
    console.log(`radio checked:${e.target.value}`);
  }

  render() {
    const { collapsed } = this.state;
    
    const menu = (
      <Menu>
        <Menu.Item key="0">
          <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
            1st menu item
          </a>
        </Menu.Item>
        <Menu.Item key="1">
          <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
            2nd menu item
          </a>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="3" disabled>
          3rd menu item（disabled）
        </Menu.Item>
      </Menu>
    );  

    const tabListNoTitle = [
      {
        key: 'article',
        tab: 'article',
      },
      {
        key: 'app',
        tab: 'app',
      },
      {
        key: 'project',
        tab: 'project',
      },
    ];
    
    const contentListNoTitle = {
      article: <p>article content</p>,
      app: <p>app content</p>,
      project: <p>project content</p>,
    };

    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider id="components-layout-demo-side" collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              Home
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              My Tasks
            </Menu.Item>
            <Menu.Item key="3" icon={<DesktopOutlined />}>
              My Issues
            </Menu.Item>
            <Menu.Item key="4" icon={<DesktopOutlined />}>
              Activity
            </Menu.Item>
            <Menu.Item key="5" icon={<DesktopOutlined />}>
              Reports
            </Menu.Item>
            <SubMenu key="sub1" icon={<UserOutlined />} title="User">
              <Menu.Item key="4">Tom</Menu.Item>
              <Menu.Item key="5">Bill</Menu.Item>
              <Menu.Item key="6">Alex</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
              <Menu.Item key="7">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="9" icon={<FileOutlined />}>
              Files
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout" style={{ backgroundColor: '#fff'}}>
          <Header className="site-layout-background" style={{ padding: 0, boxShadow: '0 2px 8px #f0f1f2' }}>
            <Row justify="start">
              <Col flex="auto" style={{ textAlign: 'left' }}>
                <PageHeader
                  className="site-page-header"
                  title="Home"
                  style={{ padding: '12px 24px'}}
                />
              </Col>
              <Col flex="none" style={{ textAlign: 'right' }}>
                <Row justify="end" style={{ padding: '0px 16px'}}>
                  <Col style={{ padding: '16px 8px', textAlign: 'right'}}>
                    <Search placeholder="Search" allowClear style={{ width: 200 }} />
                  </Col>
                  <Col style={{ paddingRight: '8px'}}>
                    <Tooltip title="search">
                      <Button type="primary" shape="circle" icon={<PlusOutlined />} />
                    </Tooltip>
                  </Col>
                  <Col>
                    <Dropdown overlay={menu}>
                      <a onClick={e => e.preventDefault()}>
                        <Avatar icon={<UserOutlined />} style={{ marginRight: '10px'}} />
                        <DownOutlined />
                      </a>
                    </Dropdown>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Header>
          <Content style={{ margin: '0', padding: '0' }}>
            {/* <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb> */}
            <div className="site-layout-background" style={{ position: 'relative', margin: '8px 0 0', padding: 24, minHeight: '84vh', maxHeight: '84vh', overflowX: 'hidden', overflowY: 'auto' }}>
              <Row style={{ position: 'relative', overflowY: 'auto'}}>
                <Col style={{ textAlign: 'center', margin: '0 auto'}}>
                  <h5>Friday, November 19</h5>
                  <h2>Good Afternoon, Junas!</h2>
                  <Row style={{padding: '5px 20px 4px', backgroundColor: '#f0f2f5', borderRadius: '30px'}}>
                    <Col style={{padding: '2px 0px'}}>
                      <Radio.Group onChange={this.onChange} defaultValue="a">
                        <Radio.Button value="a">This Week</Radio.Button>
                        <Radio.Button value="b">This Month</Radio.Button>
                      </Radio.Group>
                      <Divider style={{ height: '2.9em'}} type="vertical" />
                    </Col>
                    <Col style={{ padding: '8px' }}>
                      <Statistic valueStyle={{ fontSize: '16px'}} value={1128} prefix={<CheckOutlined />} suffix={<><span>/100</span><span> tasks completed</span></>}/>
                    </Col>
                    <Col style={{ padding: '8px' }}>
                      <Statistic valueStyle={{ fontSize: '16px'}} value={122} prefix={<UsergroupAddOutlined />} suffix={<span>collaborators</span>}/>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row gutter={16} style={{ marginTop: 32 }}>
                <Col span={12}>
                  <Card style={{ borderRadius: '12px', minHeight: '55vh'}}>
                    <Meta
                      avatar={<Avatar size="large" icon={<UserOutlined />} />}
                      title={<h3 style={{ marginTop: '6px', marginBottom: '0px'}}>My Stuff</h3>}
                    />
                    <Tabs style={{ clear: 'both'}} defaultActiveKey="1">
                      <TabPane tab="My Issues" key="1">
                        Tab 1
                      </TabPane>
                      <TabPane tab="Due This Week" key="2">
                        Tab 2
                      </TabPane>
                      <TabPane tab="Tab 3" key="3">
                        Tab 3
                      </TabPane>
                    </Tabs>
                  </Card>
                </Col>
                <Col span={12}>
                  <Card style={{ borderRadius: '12px', minHeight: '55vh'}}>
                    <Meta
                      title={<>
                        <div>
                            <span style={{ fontSize: '20px'}}>Projects</span>
                            <Radio.Group style={{ marginLeft: '16px' }} optionType="button" options={[{label: 'Recent', value: 'recent'}, {label: 'Favourite', value: 'favourite'}]} value={'recent'} />
                        </div>
                      </>}
                    />
                    <Row gutter={16} style={{marginTop: '16px'}}>
                      <Col span={12}>
                        <Card type="inner" bordered={false} style={{ cursor: 'pointer' }}>
                          <Meta
                            avatar={<Avatar size="large" icon={<UserOutlined />} />}
                            title={<><h4 style={{ paddingTop: '3px', textOverflow: 'ellipsis'}}>Project Name Larage dfdfs dfsdfs fsdfsdf sdfsdfs dfsdfs</h4></>}
                          />
                        </Card>
                      </Col>
                      <Col span={12}>
                        <Card type="inner" bordered={false}>
                          Inner Card content
                        </Card>
                      </Col>
                    </Row>
                  </Card>
                </Col>
              </Row>
            </div>
          </Content>
          <Footer style={{ padding: '13px 16px' }}>
              <Row>
                <Col flex={2}>Branch Name</Col>
                <Col flex="auto">
                  <Row justify="end">
                    <Col style={{paddingRight: '50px'}}>Copyright © 2018 Moonheads Digital Inc.</Col>
                    <Col>Version: 12.2.2</Col>
                  </Row>
                </Col>
              </Row>
          </Footer>
        </Layout>
      </Layout>
    );
  }
}