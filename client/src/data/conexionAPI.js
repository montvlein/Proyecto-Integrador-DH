class DigitalBookingAPI {

    constructor(basepath="http://localhost:8080/") {
        this.basepath = basepath
        this.categoria = new CategoriaEndPoint(this.basepath)
        this.ciudad = new CiudadEndPoint(this.basepath)
        this.auto = new AutoEndPoint(this.basepath)
    }

}

class CRUD {
    constructor(basepath, endpoint) {
        this.uri = `${basepath}${endpoint}`
    }

    listar() {
        return handleFetch(`${this.uri}/listarTodis`)
        .then(res => res.json())
        .catch(error => { throw(error) })
    }

    crear(obj) {
        return handleFetch(`${this.uri}/nuevi`, opciones(obj))
        .then( res => res )
        .catch(error => { throw(error) })
    }

    buscarPorID(id) {
        return handleFetch(`${this.uri}/${id}`)
        .then( res => res.json())
        .catch(error => { throw(error) })
    }

    actualizar(obj) {
        return handleFetch(`${this.uri}/${id}`, opciones(obj, "PUT"))
        .then( res => res )
        .catch(error => { throw(error) })
    }

    borrarPorID(id) {
        return handleFetch(`${this.uri}/${id}`, { method:'DELETE' })
        .then( res => res )
        .catch(error => { throw(error) })
    }
}

class CategoriaEndPoint extends CRUD {
    constructor(basepath, categoriaUri="api/v1/categoria") {
        super(basepath, categoriaUri)
    }
}

class CiudadEndPoint extends CRUD {
    constructor(basepath, categoriaUri="api/v1/ciudad") {
        super(basepath, categoriaUri)
    }
}

class AutoEndPoint extends CRUD {

    constructor(basepath, categoriaUri="api/v1/auto") {
        super(basepath, categoriaUri)
    }

    filtrarPorCiudad(nombreProvincia) {
        return handleFetch(`${this.uri}/burcarPor?ciudad=${nombreProvincia}`)
        .then(res => res.json())
        .catch(error => { throw(error) })
    }

    filtrarPorCategoria(tituloCategoria){
        return handleFetch(`${this.uri}/burcarPor?categoria=${tituloCategoria}`)
        .then(res => res.json())
        .catch(error => { throw(error) })
    }

    filtrarPorCategoria_y_Ciudad(tituloCategoria, nombreProvincia){
        return handleFetch(`${this.uri}/burcarPor?categoria=${tituloCategoria}&ciudad=${nombreProvincia}`)
        .then(res => res.json())
        .catch(error => { throw(error) })
    }

    recomendados() {
        return handleFetch(`${this.uri}/recomendados`)
        .then(res => res.json())
        .catch(error => { throw(error) })
    }
}

function opciones(informacion, metodo = "POST", tipo = "application/json") {
    return {
      method: metodo,
      headers: {
        "Content-Type": tipo,
      },
      body: JSON.stringify(informacion),
    };
  };

function handleFetch(request, settings) {
    switch (arguments.length) {
        case 1:
            return fetch(request).then(handleError)
        case 2:
            return fetch(request, settings)
    }
}

function handleError(response) {
    if (!response.ok) throw Error(response.status)
    return response
}

export const DigitalBookingApi = new DigitalBookingAPI()
