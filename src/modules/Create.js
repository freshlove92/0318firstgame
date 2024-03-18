// const onSubmit = ()=>{

// }
// const onChange =()=>{

// }

export default function Create(props){
    const {infos, setInfos} = props;
    //부모채널인 App에서 불러오는 props
    
    const onsubmit = (event)=>{
        event.preventDefault(); //기본 이벤트 막는거
        const obj={} //obj라고 선언한 그릇안에 뭘 담을건데
        for(let key of Object.keys(infos[0])){ 
            //key를 선언함 > 뭐라고? > Object.keys(infos[0])중 하나라고
            
            obj[key] = event.target[key].value 
            //obj[key]는 event.target(form/onsubmit)에 적는 벨류값이야
            console.log(event.target[key].value)

        }setInfos([...infos, obj])
        //새로 적은 값을(변한내용) setInfos에 넣을건데 원래내용 복사 + 새내용이야
        //infos는 Deta 
        


        // console.log(event.target["age"])

    }
    console.log(Object.keys(infos[0]))
    //onsubmit함수 - 폼태그에서 사용하는 함수인데 제출한 내용을 검증해 true / false를 내보냄
    //map함수 - 배열에 있는 각 데이터를 리스트 아이템으로 변환할 때 씀
    //어쩌구배열.map((어쩌구) => <li key={number.toString()}>{number}</li>)보통 이런식으로 생김 
    return(
   <form onSubmit={onsubmit}>
        
        {Object.keys(infos[0]).map((item)=>
        <p>{item}:<input name={item} onChange={onchange} placeholder={item}/></p>)}

        <input type="submit"></input>

   </form>

    )

}