import { useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Announcement from "../component/Announcement";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import Newsletter from "../component/Newsletter";
import Products from "../component/Products";

const Container=styled.div``;

const Title=styled.h1`
    margin:20px;
`;

const FilterContainer=styled.div`
display: flex;
justify-content: space-between;
`;

const Filter=styled.div`
margin: 20px;
`;
const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`;

const Option = styled.option``;


const ProductList = () => {
  const location=useLocation();
  const cat=location.pathname.split("/")[2];
  const [filters,setFilters]=useState({});
  const [sort,setSort]=useState("Newest");

  const handleFilters=(e)=>{
    const value=e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,})
  }

console.log(filters)
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Title>Best Selling books !</Title>
        <FilterContainer>
            <Filter><FilterText>Filter Books:</FilterText>
            <Select name="types" onChange={handleFilters}>
            <Option disabled >
              Types
            </Option>
            <Option>action and adventure</Option>
            <Option>comic</Option>
            <Option>fantasy</Option>
            <Option>historical fiction</Option>
            <Option>horror</Option>
            <Option>business</Option>
            <Option>romance</Option>
            <Option>biographies</Option>
          </Select>
          </Filter>
          <Filter>
          <FilterText>Sort Books:</FilterText>
          <Select onChange={e=>setSort(e.target.value)}>
            <Option value="newest">Newest</Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="desc">Price (desc)</Option>
          </Select>
        </Filter>


        </FilterContainer>
        <Products cat={cat} filters={filters} sort={sort}/>
        <Newsletter/>
        <Footer/>

    </Container>
  )
}

export default ProductList