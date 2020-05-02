import React from 'react';
import './App.css';
import {Layout, Navigation, Content, Header} from 'react-mdl';
import Logo from './pictures/logo.png';
import Main from './components/main';



function App() {
  return (
    <div>
    <Layout fixedHeader>
      <div className="header">
          <Header className = "header-color" transparent title={<span style={{ color: '#201115' }}></span>}>
          <a href="/">
            <img
              src={Logo} 
              alt="logo1"
              className="scribr-logo"
            />
          </a>
        
          <div className ="navigationbar">
              <Navigation>
                  <a href="/about" style={{color: 'black'}}><font size="4">About</font></a>
                  <a href="/magic" style={{color: 'black'}}><font size="4">Transcribe</font></a>
                  <a href="/people" style={{color: 'black'}}><font size="4">Team</font></a>
              </Navigation>
          </div>
          </Header>
        </div>
        <Content>
          <div className="page-content"/>
          <Main />
        </Content>
    </Layout>
</div>
  );
}

export default App;