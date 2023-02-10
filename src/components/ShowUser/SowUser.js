import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";

const SowUser = () => {
  const db = getDatabase();
  const [userData, setUserData] = useState([]);
useEffect(()=>{
    onValue(ref(db), (snapshot)=>{
        const data = snapshot.val();
        if(data !== null){
            Object.values(data).map((item) => {
                setUserData((prev)=>[...prev,item]);
            });
        }
    })
},[])

  return (
    <div>
        <div className="text-center">    
      <h1 className="text-2xl font-bold uppercase mt-20">User List</h1>
        </div>
        <table className="w-[50%] mx-auto text-gray-500 text-sm my-5">
            <thead>
                <tr className="text-left p-10">
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Password</th>
                </tr>
            </thead>
        <tbody>
        {
       userData.map(item=>
       <>
       <tr className="border p-10 border-gray-300 border-t-0 border-x-0 text-left">
        <td>{item.fName}</td>
        <td>{item.lName}</td>
       <td>{item.email} </td>
       <td>{item.password}</td>
       </tr>
       
       </>
       )
      }
        </tbody>
     
      </table>
    </div>
  );
};

export default SowUser;
