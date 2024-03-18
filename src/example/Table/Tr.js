import styled from "styled-components"
import Th from "./Th";
import Td from "./Td";


const Tr = ({items})=>{

    return(
        <tr>
          {items.map(item=><Td item={item}/>)}
        </tr>
    );
};
export default Tr;