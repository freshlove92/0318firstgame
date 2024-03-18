import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import info from './Table/data.json'
import Employee from './modules/Employee';
import Show from './modules/Show';
import Control from './modules/Control';
import Create from './modules/Create';
import Update from './modules/Update';
//자식들 불러오기(부모가 받는것)

function App() {
  const [mode, setMode] = useState('employee');
  const [control, setControl] = useState("UPDATE") //CREATE / UPDATE
  const [infos, setInfos] = useState(info)
   // console.log(infos) // infos는 Deta에 작성한 내용들이네~
  const [name, setName] = useState ('john')
  const [list, setList] =useState([])
 
  const onclick = (event) =>{
    if(mode==='main'){
      const newList = [<div style={{margin: '10px'}}>Main</div>]
      event.target.innerHTML = 'employee'
      setMode('employee')
      setList(newList)
    }else if(mode==='employee'){
      const newList = [<div style={{margin: '10px'}}>Employee</div>]
      event.target.innerHTML = 'main'
      setMode('main')
      setList(newList)
    }
  }
  
 
  // const [mode, setMode] = useState('main')
  // const [list, setList] =useState([])
  // const onclick = (event) =>{
  //   if(mode==='main'){
  //     const newList = [<div style={{margin: '10px'}}>Main</div>]
  //     event.target.innerHTML = 'employee'
  //     setMode('employee')
  //     setList(newList)
  //   }else if(mode==='employee'){
  //     const newList = [<div style={{margin: '10px'}}>Employee</div>]
  //     event.target.innerHTML = 'main'
  //     setMode('main')
  //     setList(newList)
  //   }
  // }

  return (
    <div className="App">
      <div>
        <div style={{ fontSize: '40px' }} onClick={onclick}>
        main
        </div>
        <div style={{margin: '10px'}}>Employee</div>
        <Employee infos={infos} name={name} setName={setName}/> 
        {/*Employee컴포넌트에 props전달 name은 현재 선택된 직원의 이름, setName은 이름을 설정하기 위한 함수 */}
        <hr />
        <br />
        <br />

        <Show infos={infos} name={name}/>
        {/* Show컴퓨넌트에 props전달 infos는 데이터  */}
        <br />
        <br />
        <Control />
        <br />
        <br />
        {control === "CREATE" ? <Create infos={infos} setInfos={setInfos}/> :
                               <Update infos={infos} name={name} setInfos={setInfos} />}
                               {/* 조건부 렌더링 1.CREATE일경우 2.CREATE아닐경우 Update*/}
    
      </div>
    </div>
  );
}

export default App;