import Td from "./Td";
import Th from "./Th";

const Tr = ({name, subjects})=>{

    // const keys = Object.keys(subjects)
    // const title = subjects.과목
    // const total = [keys[0], ...title]
    // console.log(total)

    return(

        <tr>
            <td>{name}</td> 
            {subjects[name].map(score=><Td score={score}/>) }

            {/* // {keys.map((name)=><Tr name={name} subjects={subjects} />)} */}
            {/* [<Td/>, <Td/>, <Td/>] */}

         </tr>
    )
}
export default Tr;