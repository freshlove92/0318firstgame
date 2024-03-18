import {useState} from 'react'
const obj = {name:'', nickname:''}

export default function Info(){

    const[data, setData] = useState(obj)

    const onChangeName = (e) =>{
        const newData = {
            ...data,
            [e.target.name]: e.target.value //e.target.name ="name"
        }
        setData(newData)
    }

    const onChangeNickname = (e) =>{
        const newData ={
            ...data,
            [e.target.name]: e.target.value //e.target.name = "nickname"
        }
        setData(newData)
    }
    return[
        <form onsubmit = {handleSubmit}>
        <label>
                과일을 선택하세요 <br/>
                <select value={value} onChange={handleChange}>
                    <option value="apple">apple</option>
                    <option value="bannana">bannana</option>
                    <option value="grape">grape</option>
                </select>
            </label>
            <button type='submit'>제출</button>
        </form>
        ];
    }
//     return(
//         <>
//         <div>
//             <input 
//                 name="name" 
//                 value={data.name} 
//                 onChange={onChangeName} 
//                 placeholder="이름" />

//             <input 
//                 name="nickname" 
//                 value={data.nickname} 
//                 onChange={onChangeNickname} 
//                 placeholder="닉네임" />
//         </div>
        
//         <div>


//         </div>

//         <div>
//             <b>이름:{data.name}</b>
//         </div>

//         <div>
//             <b>닉네임: {data.nickname}</b>
//         </div>
//         </>
//     )

// }