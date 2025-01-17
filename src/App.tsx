
import './App.css'
import { UserProvider } from './UserContextProvider';
import Users from './Users'


function App() {

  const fetchdata =()=>(
    [
      {name:"Guru",age:22,isMarried:false},
      {name:"Moorthy",age:35,isMarried:true}
    ])

  const userdata =fetchdata();  
  return (
    <>
    <UserProvider>
    { userdata.map((user,index)=>(
      <Users key={index} name={user.name} age={user.age} isMarried={user.isMarried}/>)) }
   </UserProvider>
    </>
  )
}

export default App
