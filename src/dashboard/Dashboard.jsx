function Dashboard(){
    return(
        <div className="container dashboard my-4">
            <h1>Dashboard</h1>
            <h3>Agregar una nueva pelicula:</h3>

            <div>
                <label>Nombre: </label>
                <input type="text" />
            </div>

            <div>
                <label>Poster: </label>
                <input type="text" />
            </div>

        </div>
    )
}

export default Dashboard;