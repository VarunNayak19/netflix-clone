import React from 'react'
import styled from "styled-components"
import { useNavigate } from "react-router-dom"

const Header = (props) => {
    const navigate = useNavigate();
    return (
        <Container className='flex a-center j-between'>
            <div className="logo"><img src={require("../assets/logo.png")} alt="logo" /></div>
            <button onClick={() => navigate(!props.navigate ? "/login" : "/signup")}>
                {props.login ? "Log In" : "Sign In"}
            </button>
        </Container>
    )
}
const Container = styled.div`
padding: 0 4rem;
.logo{
    img{
        height: 5rem;
    }
}
button{
    padding: 0.5rem 1rem;
    background-color: #e50914;
    border:none;
    cursor:pointer;
    border-radius:0.2rem;
    color:#fff;
    font-weight: bolder;
    font-size: 1.05rem;
}
`;
export default Header