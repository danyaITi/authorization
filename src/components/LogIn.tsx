import React, { FormEvent } from "react";
import { useState } from "react";
import { useDispatch} from "react-redux";
import { logIn, User } from "../redux/userSlice";

const LogIn: React.FC = () => {

const [name,setName] = useState('')
const [email,setEmail] = useState('')
const [password,setPassword] = useState('')

const dispatch = useDispatch()

const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
  e.preventDefault()
  const userObj: User = {
    name:name,
    email:email,
    password: password
  }
  dispatch(logIn(
    userObj
  ))
}

    return (
        <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Authorization </h5>
          </div>
          <div className="modal-body">
            <form action=""  onSubmit={(e)=>handleSubmit(e)}>
              <div className="row mb-3">
                <label htmlFor="nameID" className=" col-sm-2 col-form-label">Username:</label>
                <div className="col-sm-10">
                  <input type="text" className="form-control" id="nameID" value={name} onChange={(e)=>setName(e.target.value)}/>
                </div>
              </div>
              <div className="row mb-3">
                <label htmlFor="emailID" className=" col-sm-2 col-form-label">Email</label>
                <div className="col-sm-10">
                  <input type="email" className="form-control" id="emailID" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                </div>
              </div>
              <div className="row mb-3">
                <label htmlFor="passwordID" className=" col-sm-2 col-form-label">Password</label>
                <div className="col-sm-10">
                  <input type="password" className="form-control" id="passwordID" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                </div>
              </div>
              <div className="modal-footer">
                <button className="btn btn-secondary" type="submit">
                  Log in 
                </button>
              </div>
            </form> 
          </div> 
        </div>
      </div> 
    )
}

export default LogIn