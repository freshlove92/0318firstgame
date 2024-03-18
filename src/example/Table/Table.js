import { useState } from "react";
import { TableStyle } from "../Ui/Style";
import Th from "./Th";
import Tr from "./Tr";
//이거는 불러오는거 import

const data = {
    과목: ["국어","영어","수학"],
    강감찬: [80, 90, 85],
    을지문덕: [70, 90, 85],
    이순신: [80, 90, 85]
}

const Table =()=>{

    // const [subjects, setSubjects] = useState(data) //배열로 리턴
    const subjects = data
    // const useState[1] = function setSubjects


    console.log(subjects)
    //const [a,aA] = useState(초기값)
            // a=초기값 data 읽는것 get aA= 함수 / 변경해주는것 set
    //subjects는 임의로 정해주는 이름이고 data 객체를 초기 상태로 받고있다.
    //모양에 대한 이해가 필요한거 같음.


    // console.log(subjects.강감찬)

    const keys = Object.keys(subjects)
    //과목, 강감찬, 을지문덕, 이순신 <data의 제목부분>
    const title = subjects.과목
    //국어, 영어, 수학
    const heads = [keys[0], ...title]
    //과목, 국어, 영어, 수학 (이건 왜 만든건지 모르겠음)
    const names = keys.slice(1)
    //강감찬, 을지문덕, 이순신 <data의 제목부분에서 과목(1)을 제외>
    

    return(
            
        <TableStyle>
            <tr>{heads.map(head=><Th head={head}/>)}</tr>
            {/* //테이블의 th부분을 만드는 구문 */}
           
            {names.map((name)=><Tr name={name} subjects={subjects} />)}
                                    {/* {}중괄호 = 객체 []대괄호 = 배열
                                  //name은 이름 subjects 성적데이터? 모양이 궁금
            //names에는 강감찬, 을지문덕, 이순신이 들어있음. */}
       
            {/* [<tr></tr>, <tr></tr>, <tr></tr>] 이 모양을 만들려고 함*/}
            
            {/*예제 
            <tr>
                <th></th>    
            </tr>
            
            <tr>
                <td></td>
            </tr> */}

        </TableStyle>
        
        
    )
};

export default Table;

