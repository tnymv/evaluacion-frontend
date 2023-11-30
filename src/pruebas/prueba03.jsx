import React, { Component } from "react";
import { render } from "react-dom";
import '../prueba3.css';

class Blog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: []
    };
  }

  componentDidMount() {
    let promesa = fetch("https://jsonplaceholder.typicode.com/posts");

    promesa
      .then(response => response.json())
      .then(data => {
        this.setState({
          articles: data
        });
      });
  }

  render() {
    return (
          <div className="padre">
            {this.state.articles.map(article => (
            
            <div key={article.id} className="tarjeta">
              <div className="titulo">
                <h2>{article.title}</h2>
              </div>
              <div className="cuerpo">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUNl-GzD9ybiPncXAJ3g8yB4v13oSi7lH5LtDMbPmHAA&s" />
                <p>{article.body}</p>
              </div>
            </div>
        ))}
          </div>
    );
  }
}

export default function BlogApp() {
  return (
    <div>
        <h1>Prueba 03</h1>
        <p>
        1. Revise y entienda que hace el siguiente componente
        </p>
        <p>
        2. Usando cualquier técnica de maquetación web, mejore
            la presentación de los datos al usuario
        </p>
        <p>
        3. Resuelva el Warning: Each child in a list should have a unique "key" prop.
        </p>
        <hr />
      <Blog/>
    </div>
  );
}
