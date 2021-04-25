import React from 'react';
import HornedBeast from './HornedBeast';

class Main extends React.Component{

   render(){
       return <div>
           {/* <div>
           <h4> Title</h4>
           </div>
           <div>
           <h4> Image URL</h4>
           </div>
           <div>
           <h4> Description</h4>
           </div> */}
           <HornedBeast/>
           <HornedBeast/>
       </div>
   }

    
}


export default Main;