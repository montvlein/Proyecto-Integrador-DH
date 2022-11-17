class DigitalBookingAPI {

    constructor(basepath="http://localhost:8080/") {
        this.categoria = new CategoriaEndPoint(basepath)
        this.ciudad = new CiudadEndPoint(basepath)
        this.auto = new AutoEndPoint(basepath)
        this.usuario = new UsuarioEndPoint(basepath)
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
        .then( res => res.json() )
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

    filtrarPor(parametros) {
        let filtro = ""
        if (parametros.hasOwnProperty("categoria")) filtro = `categoria=${parametros.categoria}`
        if (parametros.hasOwnProperty("ciudad")) filtro = `ciudad=${parametros.ciudad}`
        if (parametros.hasOwnProperty("categoria") && parametros.hasOwnProperty("ciudad")) {
            filtro = `categoria=${parametros.categoria}&ciudad=${parametros.ciudad}`
        }
        return handleFetch(`${this.uri}/buscarPor?${filtro}`)
        .then(res => res.json())
        .catch(error => { throw(error) })
    }

    recomendados() {
        return handleFetch(`${this.uri}/recomendados`)
        .then(res => res.json())
        .catch(error => { throw(error) })
    }
}

class UsuarioEndPoint extends CRUD {
    constructor(basepath, categoriaUri="api/v1/usuario") {
        super(basepath, categoriaUri)
    }

    crear(obj) {
        return handleFetch(`${this.uri}/nuevi`, opciones(obj))
        .then( res => res )
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
            return fetch(request, settings).then(handleError)
    }
}

function handleError(response) {
    if (!response.ok) throw Error(response.status)
    return response
}

export const DigitalBookingApi = new DigitalBookingAPI("http://ec2-3-145-58-195.us-east-2.compute.amazonaws.com:8080/")
