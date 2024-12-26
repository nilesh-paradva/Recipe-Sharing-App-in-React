import React, { useEffect } from 'react';
import Logo from '../../assets/images/logo/logo.png'
import { Col, Container, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { IconButton, Tooltip } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useDispatch, useSelector } from 'react-redux';
import { SignOutThunk } from '../../services/action/AuthAction';

const Header = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    // Get authentication state from Redux
    const {isSignIn} = useSelector(state => state.AuthReducer);
    console.log("isSignIn", isSignIn);
    
    
    const handleLogout = () => {
        dispatch(SignOutThunk()).then(() => {
            navigate('/SignIn'); 
        });
    };

    return (
        <header className="fixed top-0 w-full z-50 py-3">
            <Container className="container mx-auto max-w-screen-xl">
                <Row className="items-center flex-col gap-y-4 flex-lg-row">
                    <Col lg={2} md={3} xs={5}>
                        <div className="logo">
                            <img src={Logo} alt="Logo" className="img-fluid " />
                        </div>
                    </Col>

                    <Col lg={8}>
                        <nav className="main-nav">
                            <ul className="flex justify-center space-x-4 m-0 p-0">
                                <li><Link to={"/"} className="px-4 py-2 bg-[#4b964b] text-white rounded-md hover:bg-[#3a763a] transition duration-200 no-underline"> Home </Link></li>
                                <li><Link to={"/ViewRecipe"} className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 transition no-underline"> View Recipe </Link></li>
                            </ul>
                        </nav>
                    </Col>

                    <Col lg={2}>
                        <div className="header-actions flex items-center justify-center justify-content-lg-end gap-x-3">
                            {isSignIn ? (
                                <>
                                    <button onClick={handleLogout} className="bg-[#4b964b] text-white px-4 py-2 rounded-md hover:bg-[#346534] transition duration-200">Logout</button>
                                    <Tooltip title='Favorite Recipe'>
                                        <IconButton aria-label="cart" onClick={() => navigate('/favoriterecipe')}>
                                            <FavoriteIcon color="action" className='!text-white'/>
                                        </IconButton>
                                    </Tooltip>
                                </>
                            ) : (
                                <>
                                    <Link to={"/SignIn"} className="bg-[#4b964b] text-white px-4 py-2 rounded-md hover:bg-[#346534] transition duration-200">Sign&nbsp;In</Link>
                                    <Link to={"/SignUp"} className="bg-[#316562] text-white px-4 py-2 rounded-md hover:bg-[#234847] transition duration-200">Sign&nbsp;Up</Link>
                                </>
                            )}
                        </div>
                    </Col>
                </Row>
            </Container>
        </header>
    );
};

export default Header;