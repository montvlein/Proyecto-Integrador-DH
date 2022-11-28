import { useEffect } from "react"
import { DigitalBookingApi } from "../../data/conexionAPI"
import { useContext } from "react";
import Contexto from "../../contexto/AppContext"
import { useNavigate } from "react-router-dom"

export default function GoogleOauth() {
  const redirigir = useNavigate()
  const { iniciarSesion, setEnEspera, getSinUsuarioParaReserva, setSinUsuarioParaReserva, getUltimaConsultaPreviaReservar } = useContext(Contexto)

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
      }, 1500)
    } catch (error) {
      console.error("error al cargar libreria: ", error)
    }
  }, [])

  function handleCredentialResponse(response) {
    DigitalBookingApi.usuario.googleOauth(response.credential)
    .then(respuesta => {
          setEnEspera(false)
          iniciarSesion(respuesta.usuario)
          localStorage.setItem("DigitalToken", respuesta.token )
          getSinUsuarioParaReserva()?redirigir(getUltimaConsultaPreviaReservar()):redirigir("/")
          setSinUsuarioParaReserva(false)
        })
    .catch(e => {
      alert("error al intentar cargar el usuario")
      setEnEspera(false)
    })
  }

  function cargandoDatos(client_id) {
    google.accounts.id.initialize({
      client_id: client_id,
      callback: handleCredentialResponse
    });
    // google.accounts.id.renderButton(
    //   document.getElementById("buttonDiv"),
    //   { theme: "outline", size: "large" }
    // );
    google.accounts.id.prompt()
}

    return(
      <div className="d-flex justify-content-center align-items-center">
        <div id="buttonDiv"></div>
      </div>
    )
}
