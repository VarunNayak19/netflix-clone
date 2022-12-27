import React from 'react'
import styled from "styled-components"
const BackgroundImage = () => {
    return (
        <Container>
            <img src={require("../assets/login.jpg")} alt="bg" />
        </Container>
    )
}

const Container = styled.div`
height:100vh;
width: 100vw;
img{
   height:100vh;
width: 100vw; 
}
`;

export default BackgroundImage;