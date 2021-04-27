import React from 'react';
import HornedBeast from './HornedBeast';
import CardDeck from "react-bootstrap/CardDeck";

class Main extends React.Component{

   render(){
       return  (<CardDeck>
           {this.props.data.map((i,index)=>(
            <HornedBeast imageUrl={i.image_url} 
            title={i.title} 
            description={i.description} 
            index={index}  
            close={this.props.close}
            open={this.props.open}
            show= {this.props.show}/>
            ))}
             </CardDeck>
             );
   }

    
}


export default Main;