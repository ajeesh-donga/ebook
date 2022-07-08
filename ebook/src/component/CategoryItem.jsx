import { Link } from "react-router-dom";
import styled from "styled-components"


const Container= styled.div`
flex:1;
margin:4px;
height:80vh;
position:relative;`;

const Image= styled.img`
width: 100%;
height: 100%;
`;

const Info= styled.div`
position:absolute;
top: 0;
bottom: 0;
margin-top:50px;
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items:center;  
justify-content: center;`;

const Title= styled.h1`
color:white;
margin-bottom:20px;`;

const Button= styled.button`
border:none;
padding: 10px;
background-color: white;
color:gray;
cursor:pointer;
font-weight:600;`;

const CategoryItem = ({item}) => {
  return (
    <Container>
        <Link to={`/products/${item.cat}`}>
        <Image src={item.img}/>
        <Info>
            <Title>{item.title}</Title>
            <Button>Buy Now</Button>
        </Info>
        </Link>
    </Container>
  )
}

export default CategoryItem