import { useSelector} from 'react-redux'



function Showuser(){
    const state = useSelector((state ) => state)
   
    return(
        <>
             <h1>{"user name :" + state.user.user.username}</h1> 
             <h1>{"phone number :" + state.user.user.phonenumber}</h1> 
        </>
    )
}

export default Showuser;