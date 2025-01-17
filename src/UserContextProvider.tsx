// import { createContext, useEffect, useState } from "react";

// interface User{
//     name:string
//     age:number,
//     isMarried:boolean
// }

// interface UserContextType{
//     users: User | null;
//     addUser: (user:User)=>void;
//     updateUser:(id: string)=> void;
//     deleteUser: (id: string)=>void;
// }

// const contextInitialValues={
//     users: null,
//     addUser: ()=> null,
//     updateUser: ()=> null,
//     deleteUser: ()=> null,
// }

// const UserContext = createContext<UserContextType>(contextInitialValues);

// interface Props{
// children: React.ReactNode;
// }

// export const UserProvider=(props:Props)=>{

//     const [users,setUsers]=useState<User[] | null>(null);

//     useEffect(()=>{
//     setUsers([{ name:"Sanjay",age: 25,isMarried: true}])
//     },[])

//     const addUser = (user:User) => {null}
//     const updateUser= (id: string) => {null};
//     const deleteUser =(id: string) => {null};
//     return(
//         <UserContext.Provider value={{ users,addUser,updateUser,deleteUser}}>
//             {props.children}
//         </UserContext.Provider>
//     )
// }


import { createContext, useEffect, useState } from "react";

interface User {
    name: string;
    age: number;
    isMarried: boolean;
}

interface UserContextType {
    users: User[] | null; // Change this to User[] | null
    addUser: (user: User) => void;
    updateUser: (id: string) => void;
    deleteUser: (id: string) => void;
}

const contextInitialValues: UserContextType = {
    users: null,
    addUser: () => null,
    updateUser: () => null,
    deleteUser: () => null,
};

const UserContext = createContext<UserContextType>(contextInitialValues);

interface Props {
    children: React.ReactNode;
}

export const UserProvider = (props: Props) => {
    const [users, setUsers] = useState<User[] | null>(null); // User[] | null

    useEffect(() => {
        setUsers([{ name: "Sanjay", age: 25, isMarried: true }]);
    }, []);

    const addUser = (user: User) => {
        setUsers((prevUsers) => (prevUsers ? [...prevUsers, user] : [user]));
    };

    const updateUser = (id: string) => {
        // Placeholder for update logic
    };

    const deleteUser = (id: string) => {
        // Placeholder for delete logic
    };

    return (
        <UserContext.Provider value={{ users, addUser, updateUser, deleteUser }}>
            {props.children}
        </UserContext.Provider>
    );
};
