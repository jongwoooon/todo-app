import React from 'react';
import './TodoTemplate.css';
const TodoTemplate = ({ children }) => {
return (
    
<div className="TodoTemplate">
{/* <div className="app-title">일정표
</div> */}
<button>야구게임시작</button>
<div className="content">{children}</div>
</div>
);
};
export default TodoTemplate;
