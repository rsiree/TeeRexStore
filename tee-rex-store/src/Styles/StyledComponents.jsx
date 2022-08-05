import  styled  from "styled-components";

export const MainDiv = styled.div`
    /* border:1px solid red; */
    width:98%;
    margin:auto;
    height:500px;
    display:flex;
    gap:2%;
    flex-wrap:wrap;
    box-sizing:border-box
`
export const FlexDiv = styled.div`
 border:1px solid blue;
    width:16%;
    height:auto;
    text-align:left;
    display:flex;
`
export const DataDiv = styled.div`
    /* border:1px solid pink; */
    width:77%;
    height:auto;
    padding:1%;
    display:flex;
    flex-wrap:wrap;
    column-gap:10px;
    row-gap:10px;
    margin:auto

`
export const ProductDiv=styled.div`
    /* border:1px solid salmon; */
    width:230px;
    border-radius:10px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`