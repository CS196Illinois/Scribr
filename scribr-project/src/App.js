import React from 'react';
import './App.css';
import {Layout, Navigation, Content, Header} from 'react-mdl';
import Logo from './pictures/name.png';
import LogoHat from './pictures/logo_hat.png';
import Main from './components/main';
function App() {
  return (
    <div style={{height: '800px', position: 'relative'}}>
    <Layout fixedHeader>
        <Header className = "header-color" transparent title={<span style={{ color: '#201115' }}></span>}>
        <a href="/">
          <img
            src={Logo} 
            alt="logo1"
            className="scribr-logo"
          />
        </a>
        <img
           src={LogoHat}
           alt="logo2"
           align="middle"
           className="scribr-hat"
        />
        <div className ="navigationbar">
            <Navigation>
                <a href="/about" style={{color: 'black'}}><font size="4">About</font></a>
                <a href="/magic" style={{color: 'black'}}><font size="4">Magic</font></a>
                <a href="/people" style={{color: 'black'}}><font size="4">People</font></a>
            </Navigation>
        </div>
        </Header>
        <hr/>
        <Content>
          <div className="page-content"/>
          <Main />
        </Content>
    </Layout>
</div>
  );
}

export default App;
