import React, { useEffect } from 'react';
import Logo from '../../assets/images/logo/logo.png'
import { Col, Container, Row } from 'react-bootstrap';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { IconButton, Tooltip } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { GetFavoriteRecipeThunk} from '../../services/action/RecipeAction';
import { toggleModal, toggleModalSignIn } from '../../services/action/UsersAction';

const Header = () => {

    const {favoriteRecipe, } = useSelector(state => state.RecipeReducer);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const FavoriteRecipeLength = favoriteRecipe.length

    const handleToggleModal = () => {
        dispatch(toggleModal());
    };

    const handleToggleSignIn = () => {
        dispatch(toggleModalSignIn())
    }

    useEffect(() => {
        dispatch(GetFavoriteRecipeThunk())
    }, [])
    

    return (
        <header className="fixed shadow top-0 w-full z-50 py-3">
            <Container className="container mx-auto max-w-screen-xl">
                <Row className="items-center flex-col gap-y-4">
                    {/* Logo Section */}
                    <Col lg={2} md={3} xs={5}>
                        <div className="logo">
                            <img src={Logo} alt="Logo" className="img-fluid " />
                        </div>
                    </Col>

                    {/* Main Content Section */}
                    <Col lg={8}>
                        <nav className="main-nav">
                            <ul className="flex justify-center space-x-4 m-0 p-0">
                                <li><Link to={"/"} className="px-4 py-2 bg-[#4b964b] text-white rounded-md hover:bg-[#3a763a] transition duration-200 no-underline"> Home </Link></li>
                                {/* <li><Link to={"/recipeform"} className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 transition no-underline"> Add Recipe </Link></li> */}
                                <li><Link to={"/ViewRecipe"} className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 transition no-underline"> View Recipe </Link></li>
                            </ul>
                        </nav>
                    </Col>

                    {/* Optional Section (Search, Icons, etc.) */}
                    <Col lg={2}>
                        <div className="header-actions flex items-center justify-center gap-x-3">
                            {/* <button className="bg-[#4b964b] text-white px-4 py-2 rounded-md hover:bg-[#346534] transition duration-200" onClick={handleToggleSignIn}>Sign&nbsp;In</button> */}
{/*                             <button className="bg-[#316562] text-white px-4 py-2 rounded-md hover:bg-[#234847] transition duration-200" onClick={handleToggleModal}>Sign&nbsp;Up</button> */}
                            <Tooltip title='Favorite Recipe'>
                                <IconButton aria-label="cart" className='hover:!bg-[#375a37]' onClick={() => navigate('/favoriterecipe')}>
                                    <Badge badgeContent={FavoriteRecipeLength == 0 ? "0" : FavoriteRecipeLength} color="primary" className='relative z-50 cursor-pointer'>
                                        <FavoriteIcon color="action" className='!text-white'/>
                                    </Badge>
                                </IconButton>
                            </Tooltip>
                        </div>
                    </Col>
                </Row>
            </Container>
        </header>
    );
};

export default Header
