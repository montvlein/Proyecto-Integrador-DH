class DigitalBookingAPI {

    constructor(basepath="http://localhost:8080/") {
        this.basepath = basepath
        this.categoria = new CategoriaEndPoint(this.basepath, "v1/categoria")
    }

}

class CategoriaEndPoint {
    constructor(basepath, categoriaUri="api/v1/categoria") {
        this.categoriaUri = categoriaUri
        this.uri = `${basepath}${this.categoriaUri}`
    }

    listarTodos() {
        return fetch(`${this.uri}/listarTodos`).then(res => res.json()).catch(Error)
    }
}

export const DigitalBookingApi = new DigitalBookingAPI()
