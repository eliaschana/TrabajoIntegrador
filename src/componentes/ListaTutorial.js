import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class ListaTutorial extends Component {
  
  state = {
    tutorial: "",
    tutorialState: false,
  };
  // Ver de cada tutorial
  verTutorial = (tutorial) => {
    this.setState({ tutorial: tutorial, tutorialState: true });
  };

  // Elimino TOdos los tutoriales
  eliminarTutorial = async () => {
    try {
        await fetch("http://localhost:3001/api/tutoriales",{
        method: "DELETE"
      });
      // Luego de eliminar traigo de nuevo los tutoriales para que se me actuelice en la interfaz
      // Cuando elimino todos no me va a mostrar nada, ya que no hay nada en la API...
      this.props.apiTutoriales();
    } catch (err) {
      alert("Se produjo el siguiente error: " + err);
    }
  };

  render() {
    const { tutorial, tutorialState } = this.state;
    const { tutoriales } = this.props;

    return (
      <div className="row lista-tutoriales">
        {/* Lista de tutoriales */}

        <div className="lista-tutoriales-items col-md-3 offset-md-3">
          <div className="container p-8">
            
              <h2>Lista de Tutoriales</h2>
              <br />
              <ul className="list-group">
                {tutoriales.map((tutorial) => (
                  <li
                    className="list-group-item list-group-item-action activea"
                    key={tutorial.id}
                    onClick={() => this.verTutorial(tutorial)}
                  >
                    {tutorial.titulo}
                  </li>
                ))}
              </ul>
              <br />
              <button type="button" className="btn btn-danger" onClick={() => this.eliminarTutorial()}>
                BorrarTodos
              </button>
      
          </div>
        </div>

        {/* Al hacer click en cada tutorial se abre este detalle de cada uno*/}
        {tutorialState ? (
          <div className="detalles-tutoriales col-md-3 offset-md-1">
            <h2>TUTORIAL</h2>
            <h5><strong>Titulo:</strong>{tutorial.titulo}</h5>
            <h5><strong>Descripción:</strong>{tutorial.descripcion}</h5>
            {tutorial.publicado ? <h5><strong>Estado</strong>:Publicado</h5> : <h5><strong>Estado</strong>:Pendiente</h5>}
            <Link to={`/editar/${tutorial.id}`}>
              <button type="button" className="btn btn-warning">Editar</button>
            </Link>
          </div>
        ) : (
          "" //<h4>Detalle de tutoriales</h4>
        )}
      </div>
    );
  }
}
