
import './App.css'
import Users from './Users'


function App() {

  const fetchdata =()=>(
    [{name:"guru",age:25,isMarried:false},
      {name:"Moorthy",age:35,isMarried:true}
    ])

  const userdata =fetchdata();  
  return (
    <>
    { userdata.map((user,index)=>(
      <Users key={index} name={user.name} age={user.age} isMarried={user.isMarried}/>)) }
   
    </>
  )
}

export default App
