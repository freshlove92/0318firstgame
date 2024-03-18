import { useState, useEffect } from "react";

const Infoinfo = () =>{
    const [name, setName] =useState('');
    const [nickname, setNickname] = useState('');

    useEffect (()=>{
            console.log("effect");
            console.log(name);
        return()=>{
            console.log("cleanUp");
            console.log(name);
        }
    }, [name,nickname])

    return(
    <div>
        <div>
            <input name ='name'
                value={name}
                onChange={(e)=>setName(e.target.value)} />

            <input name ='Nickname'
                value={nickname}
                onChange={(e)=>setName(e.target.value)} />    

        </div>
    </div>
    )
}
export default Infoinfo;