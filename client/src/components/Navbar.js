import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LoginForm from './LoginForm';
import SignUpForm from './SignupForm';
import Auth from '../utils/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket, faBell, faHouse, faTachometerAlt } from '@fortawesome/free-solid-svg-icons';
import { Layout, Typography, Menu, Modal, Tabs, Card } from 'antd';
const { Item } = Menu;

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
          <Item key="1" className="unclickable-item">
            <FontAwesomeIcon icon={faBell} />
            <Text strong>Hitched & Glitched</Text>
          </Item>
          <Item key="2">
            <Link to="/" className="navigation-link">
              <FontAwesomeIcon icon={faHouse} />
              Home
            </Link>
          </Item>
          {Auth.loggedIn() && (
            <Item key="3">
              <Link to="/dashboard" className="navigation-link">
                <FontAwesomeIcon icon={faTachometerAlt} />
                Dashboard
              </Link>
            </Item>
          )}
          {Auth.loggedIn() ? (
            <Item key="4">
              <div className="navigation-link" onClick={Auth.logout}>
                <FontAwesomeIcon icon={faRightFromBracket} />
                Logout
              </div>
            </Item>
          ) : (
            <Item key="4">
              <div className="navigation-link" onClick={handleOpen}>
                <FontAwesomeIcon icon={faRightFromBracket} />
                Login/Sign Up
              </div>
            </Item>
          )}
        </Menu>
        <Modal open={open} onCancel={handleClose} footer={null} centered>
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
