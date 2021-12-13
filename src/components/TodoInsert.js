import { MdAdd } from 'react-icons/md';
import './TodoInsert.css';
import { useState, useCallback } from 'react';

const TodoInsert = (props) => {
    const [value, setValue] = useState('');
    const onChange = useCallback((e) => {
        setValue(e.target.value);
    });
    const onSubmit = useCallback((e) => {
        props.onInsert(value);
        setValue('');
        e.preventDefault();
    }, [value]);


    return (
        <form className="TodoInsert" onSubmit={onSubmit}>
             
            <input placeholder="숫자를 입력하세요" value={value}
                onChange={onChange} />
            <button type="submit">
                투구
            </button>
           
        </form>
    );
};
export default TodoInsert;