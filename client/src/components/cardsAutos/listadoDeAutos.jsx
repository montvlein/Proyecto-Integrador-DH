import Card from "./card";
import {autos} from "../../AUTOS.json"

const ListadoDeAutos = () => {
    return(
        <div className="container">
            <div className="row gy-4">
                {autos.map(auto => 
                    <div className="col-md-4" key={auto.id}>
                    <Card {...auto}/>
                    </div>
                 )
                }
            </div>
        </div>
    )
}

export default ListadoDeAutos;