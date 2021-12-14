import React from 'react';
import './TodoTemplate.css';


  
const TodoTemplate = (props, { children }) => {
return (
    
<div className="TodoTemplate">

<button onClick={()=>{
    const arr = props.rndN();
    console.log(arr);
}}> 야구게임시작</button>
<div className="content">{children}</div>
</div>
);
};
export default TodoTemplate;
