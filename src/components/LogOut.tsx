import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";


const LogOut: React.FC = () => {
    const user = useSelector((state:RootState)=> state.user.user)
    return (
        <div className="card text-center">
           <div className="card-body">
                <h2 className="card-title">Hello {user.name}</h2>    
           </div>
        </div>
        
    )
}

export default LogOut