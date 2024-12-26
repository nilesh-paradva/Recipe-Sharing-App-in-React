import { useEffect, useState } from "react";
import Banner from "../components/banner/Banner";
import Header from "../components/header/Header";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { GetUsersThunk, SignInSUC, SignOutThunk } from "../services/action/AuthAction";
import { UserIdGet } from "../services/storeidget/StoreIdGet";

const Home = () => {
    const { user } = useSelector((state) => state.AuthReducer);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        const storedUser = UserIdGet();
        console.log("storedUser", storedUser);
        
        if (storedUser) {
            dispatch(SignInSUC(storedUser));
        } else {
            dispatch(SignOutThunk());
        }
    }, [dispatch]);

    useEffect(() => {
        if (!user) {
            navigate("/SignIn");
        }
    }, [user]);

    return (
        <>
            <Header />
            <Banner />
        </>
    );
};

export default Home;