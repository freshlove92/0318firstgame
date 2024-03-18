import { useEffect, useState } from "react";
import Tr from "./Table/Tr";
import styled from "styled-components"
const Table = styled.table`
   margin: 20px auto;
   width: 80%;
   padding: 10px;
   border-collapse: collapse;
`

export default function Show(props){
    const {infos, name} = props;
    //부모로 부터 가져온 것들

    const [items] = useState(Object.keys(infos[0]));
    const [values, setValues] = useState(Object.keys(infos[0]));
    //{}는 객체의 속성을, []는 배열의 요소를 각각 변수에 할당하는 데 사용
    // setValues(tmps);
    // console.log(Object.keys(infos[0])) //['name', 'age', 'job', 'lang', 'pay']
    
    useEffect(()=>{
        const tmp = infos.filter((info)=>info.name===name)[0];
        setValues(Object.values(tmp));
    },[name])
    
    // console.log(values) //['john', 45, 'bookstore', 'java', 5200]
    // console.log(items) //['name', 'age', 'job', 'lang', 'pay']
    
    return(
        <Table>
            <Tr items={items}/>
            <Tr items={values}/>
        </Table>

    )
}

{/* <tr>

    <th>
    </th>

    </tr> */}