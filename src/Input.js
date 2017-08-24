import React from 'react';



export const Input = ({search}) =>{
	
		
		return (<input type="text"  onChange={search.bind(this)}/>)
	
	
}