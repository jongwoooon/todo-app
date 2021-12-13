import React from 'react';
import './TodoTemplate.css';


  
const TodoTemplate = ({ children }) => {
return (
    
<div className="TodoTemplate">

<button> 야구게임시작</button>
<div className="content">{children}</div>
</div>
);
};
export default TodoTemplate;
