import { useNavigate } from "react-router";
import { useEffect } from "react";

const userDataString = localStorage.getItem('userData');
const userData = JSON.parse(userDataString);


function ProtectedRoutes({children}){
    const navigate = useNavigate();

    useEffect(() => {
        if(userData){
            navigate('/')
        }
        
      }, [userData]);
      return (
        children
      )
    
}

export default ProtectedRoutes;