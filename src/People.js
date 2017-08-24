import React from 'react';

export const People = ({people}) =>{

		return (<div>{
              	people.map((people,index)=>{
     
              		 return <p key={index}>name:{people.name} company:{people.company}, city:{people.city}, 
                 	 email:{people.email}, job_hisotry:{people.job_history}</p>
                   })
              	 }
			</div>)
}