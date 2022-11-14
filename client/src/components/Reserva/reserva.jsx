import React from "react";
import stylesArticlulo from './reservaContenedor.module.css';
import Calendario from './calendario/calendario.module.css';
import DetalleReserva from "./detalleReserva/detalleReserva.module.css";
import FormDatos from './formDatos/formDatos.module.css';
import HorarioReserva from './horarioReserva/horarioReserva.module.css';

export default function Reserva() {
    const { idProducto } = useParams()
    const [cargando, setEstaCargando] = useState(true);
    const [producto, setProducto] = useState({});
    const [isOpen, setOpen] = useState(false);
    const toggle = () => {
      setOpen(!isOpen);
    };
  
    useEffect(() => {
      DigitalBookingApi.auto.buscarPorID(idProducto).then((auto) => {
        setProducto(auto);
        setEstaCargando(false);
      });
    }, []);
  
    if (cargando) {
      return(
        <article className={`${stylesArticlulo.reservaContenedor} d-flex justify-content-center`}>
          <div className="spinner-border m-5" roler="status"></div>
        </article>
      )
    }
  
    return (
      <article className={`${stylesArticlulo.reservaContenedor} contenedor`}>
        <Calendario />
        <DetalleReserva />
        <FormDatos/>
        <HorarioReserva/>
        
      </article>
    )
  }
  