import { getDatabase, ref, child, get } from "firebase/database";
function ShowData(){

    const dbRef = ref(getDatabase());
        get(child(dbRef, `/`)).then((snapshot) => {
        if (snapshot.exists()) {
            // console.log('Hola Data')
            console.log(snapshot.val());
            return(
                snapshot.val()
            )
            // console.log(snapshot)
            
        } else {
            console.log("No data available");
        }
        }).catch((error) => {
        console.error(error);
        });
        
        console.log(dbRef, "Hola Data")
            return(
                <h1>hola</h1>
            )
        }


export default ShowData;