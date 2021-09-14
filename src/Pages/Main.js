import React, { useState } from 'react'
import { Divider, Layout} from "antd"
import '../App.less'
import '../index.less'
import MenuComponent from '../Components/MenuComponent';
import HeaderComponent from '../Components/HeaderComponent';
import ContentComponent from '../Components/ContentComponent';
import { useSelector } from 'react-redux';


const { Header, Footer, Content } = Layout

function Main() {

    
   
    const [isToggled, setToggled] = useState(true);
    const toggleTrueFalse = () => setToggled(!isToggled);
    const onClose = () => {
        setToggled(true);
    }



    const User = useSelector(state => state.User)
    
    return (
      <Layout style={{ minHeight:'100vh'}}>
      {localStorage.getItem('token') && <MenuComponent  onClose={onClose} isToggled={isToggled} />}
      <Layout style={{background:'#f4f5f6'}}>
          <HeaderComponent style={{float:'right'}} User={User} setToggled={setToggled} isToggled={isToggled} />
          <ContentComponent />
          <Footer style={{ textAlign: 'center', fontWeight: 'bold', background: '#f4f5f6', color: '#766bf0' }}>ContactPlus ©2021 | Powered by Telecard Ltd.</Footer>
      </Layout>
  </Layout>
    )
}

export default Main
