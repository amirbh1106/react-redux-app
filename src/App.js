import { useDispatch } from 'react-redux'
import {addnewuser } from './reducer/user'
import Login from './components/login'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import 'bootstrap/dist/css/bootstrap.min.css';
import Showuser from './components/showuser'

const regexpass = (/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/gm)
function App() {
function updateuser(ownuser){
  let valid = true;
    if(!validatepass(ownuser) ){
      valid = false;
      alert("pass")
    }
   if(!validatephone(ownuser)){
    valid = false;
    alert("phone")
   }
   if(!validateusername(ownuser)){
    valid = false;
    alert("name")
    }
      if(valid){
      dispatch(addnewuser(ownuser)) 
    }
  }

    function validatepass(ownuser){
      let result = ownuser.password.match(regexpass)
      let valid = true;
      if(ownuser.password !== ownuser.confirmdpass){
        alert("password does not match")
        valid = false;
      }
      
        if(!result){
          alert("password is not strong enough" + result)
          valid = false
         }
         return valid;
  }
    function validateusername(ownuser){
      if(ownuser.username.length > 0 && ownuser.username.length < 32){
        return true;
    }else{
      alert("user name too long ")
      return false;
    }
  }

    function validatephone(ownuser){
      if(ownuser.phonenumber.length === 10){
        return true;
      }else{
        alert("phone number is not valid")
        return false;
      }
    }

  const dispatch = useDispatch()
  return (
<>
        <Tabs defaultActiveKey="login" id="uncontrolled-tab-example" className="mb-3">
            <Tab eventKey="login" title="Login">
                  <Login addad={updateuser}/>
            </Tab>
            <Tab eventKey="user" title="User">
                  <Showuser />
            </Tab>
      </Tabs>
</>
        );
}

export default App;
