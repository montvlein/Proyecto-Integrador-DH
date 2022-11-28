import { useEffect } from "react"

export default function GoogleOauth() {

  const client_id = import.meta.env.VITE_CLIENT_ID

  useEffect(()=>{
    const script = document.createElement("script")
    script.src = "https://accounts.google.com/gsi/client"
    script.async = true
    script.defer = true
    script.id = "googleScript"
    document.body.appendChild(script)
    return ()=>{
      document.body.removeChild(script)
    }
  }, [])

  useEffect(()=>{
    try {
      setTimeout(()=>{
        cargandoDatos(client_id)
      }, 3000)
    } catch (error) {
      console.error("error al cargar libreria: ", error)
    }
  }, [])

  function handleCredentialResponse(response) {
    const respuesta = fetch(`https://oauth2.googleapis.com/tokeninfo?id_token=${response.credential}`)
    respuesta.then(data => {
      return data.json()
    }).then(payload => {
      console.log(payload, payload.given_name, payload.family_name, payload.email)
      let nombre = payload.given_name
      let apellido = payload.family_name
      let email = payload.email
      accion({ nombre, apellido, email })
    })
  }

  function cargandoDatos(client_id) {
    google.accounts.id.initialize({
      client_id: client_id,
      callback: handleCredentialResponse
    });
    google.accounts.id.renderButton(
      document.getElementById("buttonDiv"),
      { theme: "outline", size: "large" }
    );
    // google.accounts.id.prompt()
}

    return(
      <div className="d-flex justify-content-center align-items-center">
        <div id="buttonDiv"></div>
      </div>
    )
}
