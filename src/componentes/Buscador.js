import React, {Component} from 'react';

class Buscador extends Component{

      /* busquedadRef = React.createRef();
    obtenerTitulo=(e)=>
    {
          e.preventDefault();
          toamos el valor del input
          const titulo= this.busquedaRef.cunrrent.value;
          lo enviamos al componente principal
          this.props.datosBusqueda(titulo)
    }*/
    render()
    {
        return(
            <div className="app container">
            <div className="jumbotron">
            <form >
                <div className="row">
                    <div className="form-group col-md-8">
                    <input type="texto" className="form-control"
                    placeholder="Busca tu tutorial por nombre"/>
                    </div>
                
                 <div className="form-group col-md-4">
                    <input type="submit " className="btn btn-lg btn-info btn-block" placeholder="BUSCAR"
                    />
                  </div>
               </div>
           </form>
           </div>
        </div>
        )
    }
}export default Buscador;
