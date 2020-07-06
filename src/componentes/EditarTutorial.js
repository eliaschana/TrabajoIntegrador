import React, { Component } from "react";

class EditarTutorial extends Component {
  state = {
    titulo: "",
    descripcion: "",
    publicado: false,
  };

 componentDidMount() {
    this.getTutorial();
  }

  // Traigo el tutorial con el id y lleno los campos en el estado
  // para que me aparezcan todos los campos del tutorial a editar
  getTutorial = async () => { 
    try {
      const res = await fetch(
        `http://localhost:3001/api/tutoriales/${this.props.match.params.id}`,
        { method: "GET" }
      );
      const tutorial = await res.json();

      //console.log(tutorial);

      this.setState({
        titulo: tutorial.titulo,
        descripcion: tutorial.descripcion,
        publicado: tutorial.publicado,
      });
    } catch (err) {
      //console.log(err);
      alert("Se produjo el siguiente error: " + err);
    }
  };

  onSubmit = async (e) => {
    e.preventDefault();
  };

  onClick = () => {
    this.setState({ publicado: !this.state.publicado });
  };
  
  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  // Elimino el tutorial con el id 
  // luego vuelvo a la pantalla de lista de tutorial

eliminarTutorial = async (id) => {
    try {
      await fetch(`http://localhost:3001/api/tutoriales/${this.props.match.params.id}`, {
        method: "DELETE",
      });

    } catch (err) {
      alert("Se produjo el siguiente error: " + err);
    }
    window.location.href = "/";
  };

  //actualizo los datos del tutorial
  actualizarTutorial = async () =>{

    const updateTutorial = {
      titulo: this.state.titulo,
      descripcion: this.state.descripcion,
      publicado: this.state.publicado,
    };
    console.log(updateTutorial )

    try {
      await fetch(
        `http://localhost:3001/api/tutoriales/${this.props.match.params.id}`,
        {
          method: "PUT",
          body: JSON.stringify(updateTutorial),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    } catch (err) {
      //console.log(err);
      alert("Se produjo el siguiente error: " + err);
    }
    
    window.location.href = "/";
  };
   
  render() {
    const { titulo, descripcion, publicado } = this.state;

    return (
      <div className="col-md-6 offset-md-3 container p-4">
        <h4>Editar</h4>
        <form onSubmit={this.onSubmit}>
          {/* Nota Titulo */}
          <div className="form-group">
            <input
              type="text"
              name="titulo"
              className="form-control"
              placeholder="Título"
              value={titulo}
              onChange={this.onChange}
            />
          </div>
          {/* Nota Descripcion */}
          <div className="form-group">
            <textarea
              name="descripcion"
              className="form-control"
              placeholder="Descripción"
              value={descripcion}
              onChange={this.onChange}
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="">
              <strong>Estado</strong>
            </label>
            {publicado ? <h4>Publicado</h4> : <h4>Pendiente</h4>}
          </div>

          <div className="botones">
            <button type="button" className="btn btn-primary" onClick={this.onClick}>Publicar Tutorial</button>
            <button type="button" className="btn btn-success" onClick={() => this.actualizarTutorial()} >
             Actualizar Tutorial</button>
            <button type="button" className="btn btn-danger" onClick={() => this.eliminarTutorial()}>
              Borrar Tutorial</button>
          </div>
        </form>
      </div>
    );
  }
}

export default EditarTutorial;
