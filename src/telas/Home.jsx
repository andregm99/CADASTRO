import Card from '../list'
import { useState ,useEffect,} from "react"
import { Link } from "react-router-dom"

export function Home(){
const[studentName, setStudentName]=useState('')//pegar nome do aluno
const[students,setStudents]=useState([])//colocar no vetor 
const[removedStudents, setRemovedStudents] = useState([]);//estado para alunos removidos 
const[user,setUser]=useState({name:'',avatar:''})//dados da minah api

function AddStudent(){
  if (studentName=='') {
   alert('Favor preencher todos  os campos')
  }
  else{
    const NewStudent={
      name:studentName,
      time:new Date().toLocaleTimeString("pt-br",{
        hour:'2-digit',
        minute:'2-digit',
        second:'2-digit'
      })
    }
      
      setStudents(prevstate=>[...prevstate,NewStudent])//estado anterior e novo estado.  
  }
    setStudentName('')
    let input= document.getElementsByTagName('input')[0];
    input.focus();
}

function RemoveStudent() {
  if (students.length === 0) return;

  const newStudents = [...students];
  const studentRemoved = newStudents.pop();

  setStudents(newStudents);
  setRemovedStudents(prevstate=>[...prevstate,studentRemoved])
  
}

useEffect(()=>{
  fetch('https://api.github.com/users/andregm99')
  .then(response => response.json())
  .then(data=>{
    setUser({
      name:data.name,
      avatar:data.avatar_url,
    })
  })
},[])


    return(
      <div className="container">
    
      <Link style={{color:"white", textedecoration:"none"}}
        to='/login'
        state={{ students : removedStudents }}
      >
        Login
      </Link>
      <header>
      <h3 style={{color:"white"}}>Lista de presença</h3>
      <div>
        <strong>{user.name}</strong>
        <img src={user.avatar} alt="Foto Perfil"></img>
      </div>
      </header>
     
      <input type="text" placeholder="Digite seu nome aqui" onChange={e=>setStudentName(e.target.value)} value={studentName}
      onKeyUp={e=>{if (e.key=='Enter') {
        AddStudent()
      }}} />
    
      <input type="button" value="Adicionar" className="botão" onClick={AddStudent} onBeforeInputCapture />
      <input type="button" value="Remover" onClick={RemoveStudent}  className="botão"/>
      
      { students.map(student=><Card name={student.name} time={student.time} />)}

    
  
    </div>
    )
}

