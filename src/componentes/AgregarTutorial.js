import React, { Component } from "react";

export default class AgregarTutorial extends Component {
  state = {
    titulo: "",
    descripcion: "",
    publicado: false,
  };

  // Al hacer click en agregar se ejecuta el evento submit y hago el post
  onSubmit = async (e) => {
    e.preventDefault();

    const newTutorial = {
      titulo: this.state.titulo,
      descripcion: this.state.descripcion,
      publicado: this.state.publicado,
    };

    try {
        await fetch(
        'http://localhost:3001/api/tutoriales',
        {
          method: "POST",
          body: JSON.stringify(newTutorial),
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

  // Traigo los datos de los inputs
  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { titulo, descripcion } = this.state;
    return (
      <div className="container p-4">
         <div className="col-md-4 offset-md-3">
        <div><h5>Tutorial</h5></div>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="">Titulo</label>
            <input
              type="text"
              name="titulo"
              className="form-control"
              value={titulo}
              required
              onChange={this.onChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="">Descripcion</label>
            <textarea
              name="descripcion"
              className="form-control"
              value={descripcion}
              required
              onChange={this.onChange}
            ></textarea>
          </div>

          <button type="submit" className="btn btn-success">
            Agregar
          </button>
        </form>
        </div>
      </div>
    );
  }
}