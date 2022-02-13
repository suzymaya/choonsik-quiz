import styled from "styled-components";

export const Wrapper = styled.div`
	width: 50vw;
	height: 70vh;
	background-color: #fff;
	margin: auto;
	border: 1px solid #ccc;
	border-radius: 10px;
	display: flex;
	flex-direction: column;
	align-items: center;
	box-sizing: border-box;
`;


export const Container = styled.div`
    position: relative;

    height: 100%;
    width: 100%;
    display: inline-block;
    box-sizing: border-box;
    text-align: center;
    padding: 16px;
`;

export const Title = styled.h1`
    font-size: 32px;
`;

export const Highlight = styled.span`
    background-color: #FED78A;
    border-radius: 16px;
    padding: 0 10px;
`;

export const ImageBox = styled.div`
    width: 180px;
    height: 180px;
    background: url(https://c.tenor.com/RSFvAKQkWJoAAAAd/%EC%B6%98%EC%8B%9D-%EC%B6%98%EC%8B%9D%EC%9D%B4.gif);
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    margin: auto;
    margin-bottom: 20px;
`;

export const Button = styled.div`
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


export const SelectGroup = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	justify-content: space-evenly;
`;

export const Select = styled.div`
	background-color: #fed78a;
	width: 80px;
	height: 80px;
	border-radius: 40px;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 20px;

	font-weight: bolder;
	font-size: 32px;

	cursor: pointer;
`;

