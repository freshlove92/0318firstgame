const Li = (props) => {

    const {title, setTitle, subjects, idx, item, setSubjects} = props;

        const onClick =()=>{
        const newSubjects = [...subjects]
        newSubjects.splice(idx, 1, title)    
        setSubjects(newSubjects);
        setTitle('')
    };

    return(
        <>
            <li onClick={onClick}>{item}</li>

        </>
    );

};
export default Li