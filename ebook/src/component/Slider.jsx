import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons"
import { useState } from "react";
import styled from "styled-components"

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
`;
const Arrow= styled.div`
    width: 50px;
    height: 50px;
    background-color: pink;
    border-radius: 50%;
    display: flex;
    align-items:center;  
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index:2;
    
`;

const Wrapper=styled.div`
    height: 100%;
    display: flex;
    tansition: all 1s ease;
    transform: translateX(${(props)=>props.slideIndex * -100}vw);
`;

const Slide=styled.div`
width: 100vw;
height: 100vh;
display: flex;
align-items:center;
background-color: #${props=>props.bg};
`;

const ImgContainer=styled.div`
height: 100%;
flex: 1;  
`;

const Img=styled.img`
height: 80%;
padding-left: 100px;
padding-top: 20px;
`;

const InfoContainer=styled.div`
flex: 1;    
padding: 50px;
`;

const Title=styled.h1`
font-size: 70px`;
const Desc=styled.p`
margin: 50px 0px;
font-size: 20px;
font-weight: 500;
letter-spacing: 3px`;
const Button=styled.button`
padding: 10px;
font-size: 20px;
background-color: transparent;
cursor: pointer;
`;

const Slider = () => {
    const [slideIndex,setSlideIndex]=useState(0)
    const handleClick = (direction) => {

        if(direction==="left"){
            setSlideIndex(slideIndex > 0 ? slideIndex -1 : 2)
        }
        else{
            setSlideIndex(slideIndex <2 ? slideIndex +1 : 0)
        }
    };
  return (
    <Container>
        <Arrow direction="left" onClick={()=>handleClick("left")}>
            <ArrowLeftOutlined/>
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
            <Slide bg="f5fafd">
            <ImgContainer>
                <Img src="https://res.cloudinary.com/e-bookstore/image/upload/v1656435830/e%20book/TheEverygirl-14-Books-to-Read-That-Will-Actually-Change-Your-Life-This-Year-Vertical-Image_da4v4m.jpg"/>
            </ImgContainer>
            <InfoContainer>
                <Title>Friday Sale!!</Title>
                <Desc>Don't compromise.BECOME THE PERSON WHO WOULD ATTRACT THE RESULT YOU SEEK.</Desc>
                <Button>Buy Now</Button>
            </InfoContainer>
            </Slide>
            <Slide bg="fcf1ed">
            <ImgContainer>
                <Img src="https://res.cloudinary.com/e-bookstore/image/upload/v1656477212/Dark_Blue_International_Children_s_Book_DayInstagram_Story_1_zcoe0j.png"/>
            </ImgContainer>
            <InfoContainer>
                <Title>VACATION Sale!!</Title>
                <Desc>Don't compromise.GET 50% DISCOUNT ON YOUR FAVOURITE BOOK</Desc>
                <Button>Buy Now</Button>
            </InfoContainer>
            </Slide>
            <Slide bg="fbf0f4">
            <ImgContainer>
                <Img src="https://res.cloudinary.com/e-bookstore/image/upload/v1656477212/Dark_Blue_International_Children_s_Book_DayInstagram_Story_zr6gok.png"/>
            </ImgContainer>
            <InfoContainer>
                <Title>SUMMER Sale!!</Title>
                <Desc>GET FLAT 30% DISCOUNT ON NEW ARRIVALS. </Desc>
                <Button>Buy Now</Button>
            </InfoContainer>
            </Slide>
        </Wrapper>
        <Arrow direction="right" onClick={()=>handleClick("right")}>
            <ArrowRightOutlined/>
        </Arrow>
      
    </Container>
  )
}

export default Slider
