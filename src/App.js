import { getAllByDisplayValue } from '@testing-library/react';
import React from 'react';
import { Component } from 'react/cjs/react.production.min';
import api from './services/api'


class App extends Component{

  async componentDidMount(){
  /*  state = {
      data : []]
    }*/

        
    const response = await api.get('/api/v1/forecastforcity', {
      params: {
        city: 'Blumenau'
      }
    });
    console.log(response.data);
  }

  render(){
    return(
      <div>
        <h1>Listar Artigos</h1>
      </div>
    );
  };
};


export default App;
