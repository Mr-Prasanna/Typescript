
interface Props{
    name:string
    age:number,
    isMarried:boolean
}

const Users =(props:Props)=>{
    return(
        <div>
            <h1>User Details</h1>
            <p> Name : {props.name}</p>
            <p> Age : {props.age}</p>
            <p> This Users {props.isMarried? " is Married " :"Single"}</p>
             </div>
    )
}
export default Users