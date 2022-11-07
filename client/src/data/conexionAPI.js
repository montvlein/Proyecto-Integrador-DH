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
        return handleFetch(`${this.uri}/listarTodos`)
        .then(res => res.json())
        .catch(error => {
            console.error(`CategoriaEndpoint error: ${error.message}`)
            throw(error)
        })
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
