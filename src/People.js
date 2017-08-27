import React from 'react';

export const People = ({people}) => {

	return (<div>
		{ people.map(function(p_obj,idx){
			return <Person  key={idx} person={p_obj}/>
			}) 
		 }</div>)
	
}

export const Person = ({person}) => {

 return (<div>
 	{Object.keys(person).map(function(key,index) {
   		 return <span key={index}>{key}:{person[key]} </span>;
		})
	}</div>)
}