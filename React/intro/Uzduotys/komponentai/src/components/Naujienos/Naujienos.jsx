import Naujiena from "../Naujiena";
import "./Naujienos.css";

const Naujienos = () => {
  return (
    <div className="naujienos-wrapper">
      <h2>Naujienos</h2>
      <div className="naujienos-list">
        <Naujiena />
        <Naujiena />
        <Naujiena />
        <Naujiena />
        <Naujiena />
      </div>
    </div>
  )
}

export default Naujienos
