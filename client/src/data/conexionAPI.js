class DigitalBookingAPI {

    constructor(basepath="http://localhost:8080/") {
        this.categoria = new CategoriaEndPoint(basepath)
        this.ciudad = new CiudadEndPoint(basepath)
        this.auto = new AutoEndPoint(basepath)
        this.usuario = new UsuarioEndPoint(basepath)
        this.reserva = new ReservaEndPoint(basepath)
        this.caracteristica = new CaracteristicasEndPoint(basepath)
        this.imagen = new ImagenEndPoint(basepath)
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
        return handleFetch(`${this.uri}/${id}`, opciones(null, true, 'DELETE'))
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

class CaracteristicasEndPoint extends CRUD {
    constructor(basepath, caracteristicaUri="api/v1/caracteristica") {
        super(basepath, caracteristicaUri)
    }
}

class ImagenEndPoint extends CRUD {
    constructor(basepath, caracteristicaUri="api/v1/imagen") {
        super(basepath, caracteristicaUri)
    }
}

class ReservaEndPoint extends CRUD {
    constructor(basepath, categoriaUri="api/v1/reserva") {
        super(basepath, categoriaUri)
    }

    buscarPorIdUsuario(id){
        return handleFetch(`${this.uri}/buscarPorUsuario/${id}`, {
            method: "GET",
            headers: {
              "Authorization": `Bearer ${localStorage.getItem("DigitalToken")}`
            }
          })
        .then(res => res.json())
        .catch(error => { throw(error) })
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
        if (parametros.hasOwnProperty("fechaInicio") && parametros.hasOwnProperty("fechaFinal")) filtro = `fechaInicio=${parametros.fechaInicio}&fechaFinal=${parametros.fechaFinal}`
        if (parametros.hasOwnProperty("categoria") && parametros.hasOwnProperty("ciudad")) {
            filtro = `categoria=${parametros.categoria}&ciudad=${parametros.ciudad}`
        }
        if (parametros.hasOwnProperty("fechaInicio") && parametros.hasOwnProperty("fechaFinal") && parametros.hasOwnProperty("ciudad")) filtro = `ciudad=${parametros.ciudad}&fechaInicio=${parametros.fechaInicio}&fechaFinal=${parametros.fechaFinal}`
        if (parametros.hasOwnProperty("fechaInicio") && parametros.hasOwnProperty("fechaFinal") && parametros.hasOwnProperty("ciudad") && parametros.hasOwnProperty("categoria")) filtro = `categoria=${parametros.categoria}&ciudad=${parametros.ciudad}&fechaInicio=${parametros.fechaInicio}&fechaFinal=${parametros.fechaFinal}`
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
        return handleFetch(`${this.uri}/nuevi`, opciones(obj, false))
        .then( res => res )
        .catch(error => { throw(error) })
    }

    login(obj) {
        return handleFetch(`${this.uri}/autenticacion`, opciones(obj, false))
        .then( res => res.json() )
        .catch(error => { throw(error) })
    }

    infoToken(token) {
        return handleFetch(`${this.uri}/tokenInfo?token=${token}`)
        .then( res => res.json() )
        .catch(error => { throw(error) })
    }

    googleOauth(token) {
        return handleFetch(`${this.uri}/googleauth`, opciones(token, false))
        .then( res => res.json() )
        .catch(error => { throw(error) })
    }

    agregarFavorito(fav) {
        return handleFetch(`${this.uri}/agregarFavorito`, opciones(fav, false))
        .catch(error => { throw(error) })
    }

    eliminarFavorito(fav) {
        return handleFetch(`${this.uri}/eliminarFavorito`, opciones(fav, false))
        .catch(error => { throw(error) })
    }
}

function opciones(informacion, isAuthRequired = true, metodo = "POST", tipo = "application/json") {
    const headerConAuth = {
        method: metodo,
        headers: {
          "Content-Type": tipo,
          "Authorization": `Bearer ${localStorage.getItem("DigitalToken")}`
        },
        body: JSON.stringify(informacion),
      };
    const headerSinAuth = {
        method: metodo,
        headers: {
          "Content-Type": tipo,
        },
        body: JSON.stringify(informacion),
      };
    return isAuthRequired?headerConAuth:headerSinAuth
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

export const DigitalBookingApi = new DigitalBookingAPI("https://api.monkeydbooking.com.ar/")
