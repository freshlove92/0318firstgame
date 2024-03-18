import Th from "./Th";
import Td from "./Td";

import styled from "styled-components"
const Where = styled.tr`
    background-color: blue;
`
//tr도 값이 나오는 테이블 부분이네
//부모가 자식을 불러오는거

const Tr = ({items})=>{
  // console.log(items)

    return(
        <tr>
          {items.map(item=><Td item={item}/>)}
        </tr>
    );
};
export default Tr;

// item은 키와 데이터?
// ['name', 'age', 'job', 'lang', 'pay']
// ['john', 45, 'bookstore', 'java', 5200]


// 이런구조니까 tr이 맨 앞(부모)
//   <tr>
//     <th>
//       <td></td>
//     </th>
//   </tr>