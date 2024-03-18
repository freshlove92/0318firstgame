import { useState } from "react";
import Li from "./Li"
// import { UlStyle } from "./Style";
import { TableStyle } from "./Style";

const list = ["자바", "자바스크립트", "리액트", "노드"]


const Ul = () => {
   const [subjects, setSubjects] = useState(list)
   const [title, setTitle] = useState('')

   const onChange =(e)=>{
        setTitle(e.target.value)
   }

    return(
        <>
        
        {/* // <UlStyle> */}
            <TableStyle>
                <th>과목</th>
                <td>강감찬</td>
                <td>을지문덕</td>
                <td>이순신</td>
            </TableStyle>
        <input onChange={onChange} value={title} type="text"></input>

        {subjects.map((item,idx)=>
        <Li 
            title ={title}
            setTitle={setTitle}
            idx={idx}
            subjects = {subjects} 
            item={item}
            setSubjects = {setSubjects} />)}
        {/* // </UlStyle> */}
        </>
            
    )

};
export default Ul;














// const list =[]
//     for (let i=0; i<4; i++){
//         list.push(<Li num={i+1}/>);
             
//     }
