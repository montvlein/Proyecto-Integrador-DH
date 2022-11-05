class API {

    constructor(basepath="http://localhost:8080") {
        this.basepath = `${basepath}/v1/`
    }

    listarTodos() {
        return fetch(`${this.uri}/listarTodos`).then(res => res.json()).catch(Error)
    }

}

class Categoria extends API {
    constructor(categoriaUri="categoria", basepath) {
        super(basepath)
        this.categoriaUri = categoriaUri
        this.uri = `${this.basepath}${this.categoriaUri}`
    }
}

export const API_categoria = new Categoria()
