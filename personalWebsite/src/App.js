import React from 'react';
import './App.css';
import {Layout, Header,Navigation,Drawer,Content} from 'react-mdl';
import Main from './components/main';
function App() {
  return (
    <div style={{height: '900px', position: 'relative'}}>
    <Layout fixedHeader>
        <Header className = "header-color" transparent title={<span><span style={{ color: '#ddd' }}></span><strong>Navigation</strong></span>}>
          <Navigation>
            <a href="/landing">Profile</a>
            <a href="/resume">Resume</a>
            <a href="/project">Project</a>
            <a href="/aboutMe">About Me</a>
            <a href="/contact">Contact</a>
          </Navigation>
        </Header>
        <Drawer title="Go to ...">
            <Navigation>
                <a href="/landing">Profile</a>
                <a href="/resume">Resume</a>
                <a href="/project">Project</a>
                <a href="/aboutMe">About Me</a>
                <a href="/contact">Contact</a>
            </Navigation>
        </Drawer>
        <Content>
          <div className="page-content" />
          <Main />
        </Content>
    </Layout>
</div>
  )
}

export default App;
