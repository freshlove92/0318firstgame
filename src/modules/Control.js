import styled from "styled-components"
const Div = styled.div`
    
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-item: center;

`
//스타일 줄때 하는거 //스타일 줄 위치에 단어 교체해줄것. styled.(div)원래위치.


export default function Control(){

    return(

        <Div>
            <div><a href="#">CREATE</a></div>
            <div><a href="#">UPDATE</a></div>
            <div><a href="#">DELETE</a></div>
        </Div>

    )

}