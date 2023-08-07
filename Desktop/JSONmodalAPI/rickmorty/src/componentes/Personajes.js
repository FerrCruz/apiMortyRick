import React from 'react'

const Personajes =({personajes=[]}) =>{
     return(
          <div className='row'>
               {personajes.map((item,index)=>(
                    <div id ={index}  key={index} className='col mb-4'>
                         <div className='card' style={{minWidth:'200px'}}>
                              <img src={item.image} alt=''></img>
                              <div className='card-boby'>
                                   <h5 className='card-title' >{item.name}</h5>
                                   <hr />
                                   <p>specie: {item.species} </p>
                                   <p>location: {item.location.name} </p>
                              </div>     
                         </div>
                    </div>        
                    ))
               }
          </div>
     );
}



export default Personajes