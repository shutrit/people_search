import React from 'react';

export const Painting = ({paintings, enterIT, leaveIT}) =>{


		return (<div>{
              	paintings.map((painting,index)=>{
     				return <div  title={painting.title} onMouseEnter={enterIT}   onMouseLeave={ leaveIT } className="painting" key={index}> price:{painting.price}, 
     				size:{painting.size}, 
                 	 technique:{painting.technique}</div>
                   })
              	 }
			</div>)
}