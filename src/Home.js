import styled from "styled-components";
import {Link} from "react-router-dom";


function Home () {
    return (
        <Container>
            <Title>춘식이 찐팬인지 알아보겠다냥</Title>
            <ImageBox></ImageBox>
            <Link to="/quiz"><Button>시작</Button></Link>
        </Container>
    );
}

export default Home;

const Container = styled.div`
    position: relative;

    height: 100%;
    width: 100%;
    display: inline-block;
    box-sizing: border-box;
    text-align: center;
    padding: 16px;
`;

const Title = styled.h1`
    font-size: 32px;
`;

const ImageBox = styled.div`
    width: 180px;
    height: 180px;
    background: url(https://c.tenor.com/Q5ETLkSFYfcAAAAC/chunsik-%EC%B6%98%EC%8B%9D.gif);
    background-size: cover;
    background-position: center;
    margin: auto;
    margin-bottom: 20px;
`;

const Button = styled.div`
    position: absolute;
    left:25%; bottom: 30px;

    width: 50%;
    height: 30px;
    border-radius: 10px;
    background-color: #000;

    font-weight: bold;
    color: #fff;

    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
`;