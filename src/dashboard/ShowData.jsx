import { getDatabase, ref, child, get } from "firebase/database";



function ShowData(){

    const dbRef = ref(getDatabase());
        get(child(dbRef, `/`)).then((snapshot) => {
        if (snapshot.exists()) {
            // console.log('Hola Data')
            console.log(snapshot.val());
            
        } else {
            console.log("No data available");
        }
        }).catch((error) => {
        console.error(error);
        });
            return(
                <></>
            )
        }


export default ShowData;