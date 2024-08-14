import { useDispatch, useSelector } from "react-redux";
import { login } from "../features/loginFeature";

const Login = () => {
   const selector=useSelector(state=>state.user.value)
   const dispatch=useDispatch()
    return ( 
        <div>
            <p>Name:{selector.name}</p>
            <p>Age:{selector.age}</p>
            <p>Email:{selector.email}</p>
            <button onClick={()=>dispatch(login({name:'tia',age:2,email:'tia@gmail.com'}))}>Login</button>
        </div>
     );
}
 
export default Login;
