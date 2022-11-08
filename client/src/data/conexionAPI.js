class DigitalBookingAPI {

    constructor(basepath="http://localhost:8080/") {
        this.basepath = basepath
        this.categoria = new CategoriaEndPoint(this.basepath)
    }

}

class CRUD {
    constructor(basepath, endpoint) {
        this.endpoint = endpoint
        this.uri = `${basepath}${this.endpoint}`
    }

    listar() {
        return handleFetch(`${this.uri}/listarTodis`)
        .then(res => res.json())
        .catch(error => {
            console.error(`CategoriaEndpoint error: ${error.message}`)
            throw(error)
        })
    }
}

class CategoriaEndPoint extends CRUD {
    constructor(basepath, categoriaUri="api/v1/categoria") {
        super(basepath, categoriaUri)
    }
}

function handleFetch(request) {
    return fetch(request).then(handleError)
}

function handleError(response) {
    if (!response.ok) throw Error(response.status)
    return response
}

export const DigitalBookingApi = new DigitalBookingAPI()
