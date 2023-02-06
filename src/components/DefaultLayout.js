import React from "react";
import '../index.css'
import { Breadcrumb, Layout } from 'antd';
import { Link, Route } from 'react-router-dom'
import Home from './Home'
import Pricing from './Pricing'
import Contact from './Contact'
import Form from '../components/Form'
import Featured from "./Featured";



const DefaultLayout = (props) => {
    const { Header, Content, Footer } = Layout;


    return (
        <div>
        <Layout>
            <Header
                style={{
                    position: 'fixed',
                    zIndex: 1,
                    width: '100%',
                }}
            >
                 <div className="header d-flex justify-content-between align-items-center"/>
                <div>
                    <h1 className="logo">KONTRAKO</h1>
                </div>
                

            </Header>
            <Content
                className="site-layout"
                style={{
                    padding: '0 50px',
                    marginTop: 64,
                }}
            >
                <Breadcrumb
                    style={{
                        margin: '16px 0',
                    }}
                >
                    <ul>
                        <Link to="/">Home /</Link>
                        <Link to="/Pricing">Pricing /</Link>
                        <Link to="/Contact">Contact /</Link>
                    </ul>

                    <Route path="/" component={Home} exact={true}></Route>
                    <Route path="/Pricing" component={Pricing} exact={true}></Route>
                    <Route path="/Contact" component={Contact} exact={true}></Route>
                </Breadcrumb>
                <div
                    className="site-layout-background"
                    style={{
                        padding: 24,
                        minHeight: 380,
                    }}
                >
                   <h1 className="content-layout d-flex justify-content-between align-items-center">Search Your Next Home</h1>
                   <p className="content-lay d-flex justify-content-between align-items-center">Find new property located in your local city</p>
                   <div className="search-type">

                   <Form className="header d-flex justify-content-between align-items-center"/>
                   </div>


                </div>

            </Content>
            <Featured/>
            <Footer
                style={{
                    textAlign: 'center',
                }}
            >
                KONTRAKO
            </Footer>
        </Layout>
        </div>
        
    )
}

export default DefaultLayout