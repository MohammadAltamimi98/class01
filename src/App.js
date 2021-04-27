import React from 'react';
import Header from './component/Header';
import Footer from './component/Footer';
import Main from './component/Main';
import ListItem from './data.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap'

class App extends React.Component{
  render(){
    return (
      <div>
       
       <Container fluid>
        <Header/>
        <br/>
        <Main data={ListItem}/>
        <Footer/>
        </Container>
      </div>
    )
  }
}

export default App;