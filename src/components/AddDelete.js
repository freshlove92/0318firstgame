import { useState } from "react";

// const arrs = ["자바", "자바스크립트", "리액트", "css"]

const AddDelete = () =>{
    const [arrs, setArrs] = useState([]);
    const [name, setName] = useState('')

    const onChange =(e)=>{
        setName(e.target.value);
    }
   
    const onDelete =(idx) =>{
        const newArrs = arrs.filter((item, jdx)=>jdx!==idx);
        setArrs(newArrs);
    }

    const onClick =(e)=>{
        const newArrs = [...arrs, name]
        setArrs(newArrs);
        setName('')
    }

    const onKeyPress = (e) =>{
        if(e.key ==='Enter'){
            onClick();
        }
    }
    
    return(
        <>
            <input 
            name="name" 
            value={name} 
            onChange={onChange}
            onKeyPress={onKeyPress}/>
            <button onClick={onClick}>첨가</button>
            <ul>
                {arrs.map((item, idx)=>(
                <li onClick={()=> onDelete(idx)}>{item}</li>
                ))}
                </ul>
                    
        </>
    )
}
export default AddDelete;





// const list = []
    // for (let item of arrs){
    //     const tag = <li>${item}</li>
    //     list.push(tag)
    // }
    
    // console.log(list)