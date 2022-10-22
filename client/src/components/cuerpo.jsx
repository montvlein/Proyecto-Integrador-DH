import { useState } from "react";
import styles from "../styles/cuerpo.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays, faLocationDot, faClock, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css fil
import {format} from "date-fns";
import SearchBar from "./searchBar";

const Cuerpo = () => {
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);

  const [openDate, setOpenDate] = useState(false);


    return(
        <main>
          <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light" className={styles.Banner}>
              <div class="col-md-5 p-lg-5 mx-auto my-5">
                  <h1 class="display-4 fw-normal">Disfruta la primavera, disfruta el camino.</h1>
                      <p class="lead fw-normal">Busca alquiler de autos baratos en Argentina.
Con una flota diversa de 19.000 vehículos, Digital Booking
ofrece a sus consumidores una atractiva y divertida selección.</p>
                  <a class="btn btn-warning" href="#">Alquila tu auto</a>
          </div>
    <div class="product-device shadow-sm d-none d-md-block"></div>
    <div class="product-device product-device-2 shadow-sm d-none d-md-block"></div>
  </div>

<div className="d-flex justify-content-center">


  <section className={styles.headerSearch}>
  <div className={styles.headerSearchItem}>
                <FontAwesomeIcon icon={faLocationDot} />
                <input type="text" placeholder="A donde quieres ir?" className={styles.headerSearchInput}/>
            </div>

      <div className={styles.headerSearchItem}>
        <span onClick={()=>setOpenDate(!openDate)} className="headerSearchText"><FontAwesomeIcon icon={faCalendarDays} className={styles.headerIcon}/>    {`Desde ${format(date[0].startDate, "MM/dd/yyyy")}`} <FontAwesomeIcon icon={faArrowRight}/> {`${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
        {openDate && <DateRange editableDateInputs={true} 
        onChange={item => setDate([item.selection])} 
        moveRangeOnFirstSelection={false} 
        ranges={date} 
        className={styles.date}/>}
      </div>


      <div className={styles.headerSearchItem}>
        <FontAwesomeIcon icon={faClock} className={styles.headerIcon}/>
        <span className="headerSearchText">Hora de retiro</span>
      </div>

      <div className={styles.headerSearchItem}>
        <FontAwesomeIcon  icon={faClock}  className={styles.headerIcon}/>
        <span className="headerSearchText">Hora de devolucion</span>
      </div>

      <div className={styles.headerSearchItem}>
        <button class="btn btn-outline-light me-2">Search</button>
      </div>
  </section>
  </div>
     </main>
    )
}

export default Cuerpo;

/*BODY: BACKGROUND COLOR + 100*/