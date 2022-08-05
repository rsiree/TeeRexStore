import React from 'react'
import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getData } from "../Redux/action";
import { DataDiv, FlexDiv, MainDiv, ProductDiv } from '../Styles/StyledComponents';
import {FilterComponent} from "../Components/FilterComponent"


export const HomePage = () => {
  const { loading, data, error } = useSelector((state) => {
    // console.log(state);
    return {
      loading: state.loading,
      data: state.data,
      error:state.error
    }
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData());
    // console.log(data)
  }, []);
  return (
    <MainDiv>
      <FlexDiv>
        <FilterComponent />
      </FlexDiv>
      <DataDiv>
        {loading && <div>...loading</div>}
        {data?.map((e) => (
          <ProductDiv key={e.id}>
            <img src={e.imageURL} width="70%" />
            <h3>{e.name}</h3>
            <p>Rs. {e.price}/-</p>
          </ProductDiv>
        ))}
      </DataDiv>
    </MainDiv>
  )
}
