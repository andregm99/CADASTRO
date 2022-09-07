import { Link } from "react-router-dom";
// import { useParams } from "react-router-dom";
import { useLocation } from 'react-router-dom'

import Card from '../list';

export function Login(){
    
    const location = useLocation();
    const { students } = location.state;



    return(
        <>
            <h1 style={{color:"white", textDecoration:"none"}}>Login</h1>
            <br />

            <Link to="/"><h1>Home</h1></Link>

            {students.map(student => (
                <Card name={student.name} time={student.time} />
            ))}
        </>
    )
}