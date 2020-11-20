import React from 'react';
import { Container } from '@material-ui/core';
import './style.css';
import Layout from '../../components/Layout';
import Products from '../Products';

const Home = () => {
    return (
        <Layout>
            {/* <Container maxWidth="xl" className="home__presentation">
                <h1>Welcome to my Ecommerce</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </Container> */}
            <Products>
                
            </Products>
        </Layout>
    )
}

export default Home;
