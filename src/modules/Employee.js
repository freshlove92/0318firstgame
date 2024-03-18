import styled from "styled-components"
const Div = styled.div`
    width: 600px;
    margin: 10px auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`


export default function Employee(props) { 

    const { infos, setName } = props;
    //부모에게서 추출해서 사용하는것

    const onClick =(event)=>{
        setName(event.target.textContent);
        // 눌렀을때 내용? 이름을 바꾸겠다.인듯..?
        // console.log(event.target.textContent) // park john kim
    };

    return(
        <>
            <Div>
                {infos.map((info) => <div onClick={onClick}><a href="#">{info.name}</a></div>)}
            </Div>
        </>
    )

}

  //부모한테 주는 모양이 export default function
  //부모가 받아올때 import ooo from './해당/위치'; (보통 자동완성 됨)
 
  //자식한테 주는 모양이 props 
  //<Employee infos={infos} name={name} setName={setName}/>
  //<Employee (여기 사이에 들어가는게 props)/>
  //부모의 파일에서 위에 선언해준걸 자식이 연결해서 쓸 수 있도록 해주는거 같음
  
  //자식이 가져왔을때 
  //export default function Employee(props) { 
  //const { infos, setName } = props;  <<여기서 재선언 해줌

  //받아올때 