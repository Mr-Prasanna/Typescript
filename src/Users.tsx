import React, { useState } from "react"

interface Props{
    name:string
    age:number,
    isMarried:boolean
}

const Users =(props:Props)=>{

    const [isShowData,setIsShowData]=useState<boolean>(true);
    const [userBio,setUserBio]=useState<String | null>(null)

    const toogleInfo =()=>{
        setIsShowData((prev)=> !prev)
    }
    const handleChange=(event: React.ChangeEvent<HTMLInputElement>)=>{
        setUserBio(event.target.value)
    }
    return(
        <div>
          { isShowData && 
          <> 
            {/* <h2>User Details</h2> */}
            <p> Name : {props.name}</p>
            <p> Age : {props.age}</p>
            <p> This Users {props.isMarried? " is Married " :"Single"}</p>
            <p>
                {props.name} Bio : {!userBio ? "Bio not available":userBio}
            </p>
            <input onChange={handleChange}/>
         </>
            }

            <button onClick={toogleInfo}>{ isShowData ?"Hide":"Show"}</button>
        </div>
    )
}
export default Users