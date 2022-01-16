import { useState } from 'react'
import Form from 'react-bootstrap/Form'
import FloatingLabel from 'react-bootstrap/FloatingLabel'

function Login (props){
    const [username,setusername] = useState("");
    const[phonenumber, setphonenumber] = useState("");
    const[password , setpassword] = useState("");
    const[confirmdpass , setconfirmdpass] = useState("");

    function handleChangeuser(e){
        setusername(e.target.value)
    }
    function handleChangephonenumber(e){
        setphonenumber(e.target.value)
    }

    function handleChangepassword(e){
        setpassword(e.target.value)
    }
    function handleChangeconfirmpasswords(e){
        setconfirmdpass(e.target.value)
    }
    function handlesumbit(){
        props.addad({
                username: username,
                phonenumber: phonenumber,
                password: password,
                confirmdpass: confirmdpass
        })
    }

    return(
        <div>
         <FloatingLabel controlId="floatingInput" label="user name" className="mb-3">
             <Form.Control value={username} onChange={handleChangeuser} placeholder={"user name"} />
         </FloatingLabel>
         <FloatingLabel controlId="floatingInput" label="phone number" className="mb-3">
             <Form.Control  value={phonenumber} onChange={handleChangephonenumber} placeholder={"phone number"} />
         </FloatingLabel>

  <FloatingLabel controlId="floatingPassword" label="Password">
    <Form.Control type="password" value={password} onChange={handleChangepassword} placeholder={"password"} />
  </FloatingLabel>

  <FloatingLabel controlId="floatingPassword" label="confirm password">
    <Form.Control type="password" value={confirmdpass} onChange={handleChangeconfirmpasswords} placeholder={"password"} />
  </FloatingLabel>

            <button onClick={() => handlesumbit()}>submit</button>
        </div>
    )
}


export default Login;