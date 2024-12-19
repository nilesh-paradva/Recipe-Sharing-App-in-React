import { useDispatch, useSelector } from "react-redux";
import Banner from "../components/banner/Banner"
import Header from "../components/header/Header"
import { Container, Spinner } from "react-bootstrap";
import { useEffect } from "react";
import { GetUserThunk } from "../services/action/UsersAction";

const Home = () => {

    return (
        <>
            <Header />
            <Banner />
        </>
    )
}

export default Home