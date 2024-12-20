import { useDispatch, useSelector } from "react-redux";
import Banner from "../components/banner/Banner"
import Header from "../components/header/Header"
import { useEffect } from "react";
import { SignClose } from "../services/action/UsersAction";

const Home = () => {

    const { isSignInSuc } = useSelector((state) => state.UserReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        if (isSignInSuc) {        
           dispatch(SignClose());
        }
    }, [isSignInSuc]);
    

    return (
        <>
            <Header />
            <Banner />
        </>
    )
}

export default Home