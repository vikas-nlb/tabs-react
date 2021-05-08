import React from 'react';

function Names(props){
    const job = props.jobList; 
    return(
        <div className='names-container'>
            
             {props.jobList.map((item,index) =>(
                 <button key={item.id} onClick ={()=> props.onButtonClick(index)}>
                    {item.company}</button>
             ))}
        </div>
    )
}
export default Names;