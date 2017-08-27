import React from 'react';

export const People = ({people}) => {

	return (<div>
		{ people.map(function(shuki,idx){
			return <Person  key={idx} person={shuki}/>
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