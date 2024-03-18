import styled from "styled-components"
const Title = styled.td`
    border-top: 1px solid #000;
    border-bottom: 1px solid #000;
    border-collapse: collapse;
`



const Td =({item})=>{
    // console.log(item)
    return(
        <>
        <Title>{item}</Title>
        </>

    )
}

export default Td;