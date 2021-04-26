
import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


class HornedBeast extends React.Component{

        constructor(props){
            super(props);
            this.state = {
              numOfLikes:0
            }
        }

        increaseNumOfLikes=()=>{
            this.setState({
                numOfLikes:this.state.numOfLikes + 1
                
            });
        }   
     render(){
         return (<div>
             
             <Card bg="info" border="dark" style={{ width: '18rem' }}>

               <Card.Title><h2>{this.props.title}</h2></Card.Title>

               <Card.Img  onClick={this.increaseNumOfLikes} variant="top" src={this.props.imageUrl} alt={this.props.title} title={this.props.title} />
               <Card.Body>
    
              <Card.Text>{this.props.description}</Card.Text>
              
              
              <Card.Text>❤️{this.state.numOfLikes} </Card.Text>
              <Button variant="outline-danger" onClick={this.increaseNumOfLikes}>Like ❤️</Button>{' '}
              
              
  </Card.Body>
</Card>

      
<br/>
      </div>)
}}

export default HornedBeast;  




// {/* <h2>{this.props.title}</h2>

//         <img onClick={this.increaseNumOfLikes} src={this.props.imageUrl} alt={this.props.title} title={this.props.title}/>

//         <p> ❤️{this.state.numOfLikes}</p>

//         <p>{this.props.description}</p> */}