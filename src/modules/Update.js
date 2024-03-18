import { useEffect, useState } from "react";

export default function Update(props){
    const {name, infos, setInfos} = props;
    const [inputList, setInputList] = useState([])
    
    const onsubmit = (event)=>{
        event.preventDefault(); //기본 이벤트 막는거
        const newInfos = [...infos]
        for (let i=0; i<newInfos.length; i++){
            if(newInfos[i].name === name) {
                const keys = Object.keys(newInfos[i])
                for(let key of keys){
                    if (key === Object.keys(infos[0])[0]) continue;
                    newInfos[i] = {...newInfos[i], [key]:event.target[key].value}
                }
            
                
            } console.log(newInfos)
        }
        setInfos(newInfos);

        // const obj={} //obj안에 뭘 담을건데
        // for(let key of Object.keys(infos[0])){ 
        //     // odj[key]=event.target[key].value
        //     obj[key] = event.target[key].value 
        //     //obj[key]는 event.target(form/onsubmit)에 적는 벨류값이야

        // }setInfos([...infos, obj]);
        //변수를 키값으로 사용할땐 []로 감싸주자
    };

    useEffect(()=>{

        const list = []
        for(let info of infos){
            
            if(info.name === name){
                for(let [key, value] of Object.entries(info)){
                   if(key === "name"){
                    list.push(
                        <p>
                            {key}:
                            <input name={key} placeholder={value} disabled />              
                            </p>
                        );
                    }else {
                        list.push(
                            <p>
                            {key}:
                            <input name={key} placeholder={value} />              
                            </p>
                        )
                    }
                }
                
            break;
        }
            //새로 적은 값을(변한내용) setInfos에 넣을건데 원래내용 복사 + 새내용이야 
            // console.log(event.target["age"])
    
        }
        setInputList(list)
    }, [name,infos])
   
    //  console.log(list)

   

    return(

        <form onSubmit={onsubmit}>
            {inputList}
         <p><input type="submit" /></p>
        </form>
    )

}