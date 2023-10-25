import {Outlet, Navigate } from "react-router";


function ProtectedRoutes({redirectTo="/", user}){

      if(user){
          return <Navigate to={redirectTo} />
      }

        return <Outlet />
 
      }    

export default ProtectedRoutes;