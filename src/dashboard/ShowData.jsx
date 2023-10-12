import { getDatabase, ref, child, get } from "firebase/database";



function ShowData(){

    const dbRef = ref(getDatabase());
        get(child(dbRef, `/`)).then((snapshot) => {
        if (snapshot.exists()) {
            console.log(snapshot.val());
            console.log('Hola Data')
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