import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LoginForm from './LoginForm';
import SignUpForm from './SignupForm';
import Auth from '../utils/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket, faBell, faHouse, faTachometerAlt } from '@fortawesome/free-solid-svg-icons';
import { Layout, Typography, Menu, Modal, Tabs, Card } from 'antd';

const { Header } = Layout;
const { Text } = Typography;
const { TabPane } = Tabs;

const AppNavbar = () => {
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('login');

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleTabChange = (key) => {
    setActiveTab(key);
  };
  
  return (
    <>
    <Header className="app-header">
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1" className="unclickable-item">
          <FontAwesomeIcon icon={faBell} />&nbsp;&nbsp;&nbsp;<Text strong>Hitched & Glitched</Text>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/" className="navigation-link">
            <FontAwesomeIcon icon={faHouse} />&nbsp;&nbsp;&nbsp;Home
          </Link>
        </Menu.Item>
        {Auth.loggedIn() && (
          <Menu.Item key="3">
            <Link to="/dashboard" className="navigation-link">
              <FontAwesomeIcon icon={faTachometerAlt} />&nbsp;&nbsp;&nbsp;Dashboard
            </Link>
          </Menu.Item>
        )}
        {Auth.loggedIn() ? (
          <Menu.Item key="4">
            <div className="navigation-link" onClick={Auth.logout}>
              <FontAwesomeIcon icon={faRightFromBracket} />&nbsp;&nbsp;&nbsp;Logout
            </div>
          </Menu.Item>
        ) : (
          <Menu.Item key="4">
            <div className="navigation-link" onClick={handleOpen}>
              <FontAwesomeIcon icon={faRightFromBracket} />&nbsp;&nbsp;&nbsp;Login/Sign Up
            </div>
          </Menu.Item>
        )}
      </Menu>
      <Modal
        visible={open}
        onCancel={handleClose}
        footer={null}
        centered
      >
        <Tabs activeKey={activeTab} onChange={handleTabChange}>
          <TabPane tab="Login" key="login">
            <Card>
              <LoginForm />
            </Card>
          </TabPane>
          <TabPane tab="Sign Up" key="signup">
            <Card>
              <SignUpForm />
            </Card>
          </TabPane>
        </Tabs>
      </Modal>
    </Header>
    </>
  );
};

export default AppNavbar;
