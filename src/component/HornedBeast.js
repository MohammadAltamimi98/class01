
import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import SelectedBeast from './SelectedBeast';

class HornedBeast extends React.Component{

        constructor(props){
            super(props);
            this.state = {
              numOfLikes:0,
              showModal: false
            }
        }

        increaseNumOfLikes=()=>{
            this.setState({
                numOfLikes:this.state.numOfLikes + 1
                
            });
        }   


        onOpen = () => this.setState({showModal: true});

        onClose = () => this.setState({showModal: false});

       

        
     render(){
         return (<div>
             
             <Card bg="info" border="dark" style={{ width: '18rem' }}>

               <Card.Title><h2>{this.props.title}</h2></Card.Title>

               <Card.Img  onClick={this.onOpen} variant="top" src={this.props.imageUrl} alt={this.props.title} title={this.props.title} />
               <Card.Body>
    
               <Card.Text>{this.props.description}</Card.Text>
              
              
               <Card.Text>❤️{this.state.numOfLikes} </Card.Text>
               <Button variant="outline-danger" onClick={this.increaseNumOfLikes}>Like ❤️</Button>{' '} 
               </Card.Body>
             </Card>
             <SelectedBeast show={this.state.showModal} onClose={this.onClose} title={this.props.title} description={this.props.description} imageUrl={this.props.imageUrl} />
             <br/>
             </div>)
              }
}

export default HornedBeast;  


