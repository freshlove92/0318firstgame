import {useState} from 'react'


export default function Info(){

    const[name, SetName] = useState('')
    const onChange =(e)=>{
        console.log(e)
        e.preventDefault();
        SetName(e.target.value);
    }
    const onSubmit=(e)=>{
        // alert(`이름:${name}`);
        SetName('');
    }



    return[
        <>
        <form onSubmit = {onSubmit}>
            <input name="name" value={name} onChange={onChange}/>
            {/* <input type="button">확인</input>*/}
            <button type='submit'>확인</button>
        </form>
        </>
        ];
    }