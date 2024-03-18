import styled from "styled-components"
const Title = styled.td`
    border-top: 1px solid #000;
    border-bottom: 1px solid #000;
    border-collapse: collapse;
    padding: 10px;
    
`



const Td =({item})=>{
    // console.log(item) 화면에 노출되는 리프데이터?값 대부분이 item으로 되어있네
    return(
        <>
        <Title>{item}</Title>
        </>

    )
}

export default Td;

//td는 값이 나오는 테이블 부분이네