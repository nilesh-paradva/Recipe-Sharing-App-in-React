import React from 'react';
import Logo from '../../assets/images/logo/logo.png'
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { IconButton } from '@mui/material';

const Header = () => {
    return (
        <header className="fixed shadow top-0 w-full z-50 py-3">
            <Container className="container mx-auto max-w-screen-xl">
                <Row className="items-center">
                    {/* Logo Section */}
                    <Col lg={2}>
                        <div className="logo">
                            <img src={Logo} alt="Logo" className="w-full h-auto" />
                        </div>
                    </Col>

                    {/* Main Content Section */}
                    <Col lg={8}>
                        <nav className="main-nav">
                            <ul className="flex justify-center space-x-4 m-0 p-0">
                                <li><Link to={"/"} className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 transition no-underline"> Home </Link></li>
                                {/* <li><Link to={"/recipeform"} className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 transition no-underline"> Add Recipe </Link></li> */}
                                <li><Link to={"/ViewRecipe"} className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 transition no-underline"> View Recipe </Link></li>
                            </ul>
                        </nav>
                    </Col>

                    {/* Optional Section (Search, Icons, etc.) */}
                    <Col lg={2}>
                        <div className="header-actions flex items-center justify-end gap-x-3">
                            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">Sign&nbsp;In</button>
                            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">Sign&nbsp;Up</button>
                            <IconButton aria-label="cart">

                            <Badge badgeContent={4} color="primary" className='relative z-50 cursor-pointer'>
                                <FavoriteIcon color="action" />
                            </Badge>
                            </IconButton>
                        </div>
                    </Col>
                </Row>
            </Container>
        </header>
    );
};

export default Header