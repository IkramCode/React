import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateTodo } from '../features/Slices/TodoSlice';

export default function Updatetodo({ todo }) {
    const [editing, setEditing] = useState(false);
    const [newText, setNewText] = useState(todo.text); // Initialize with the current todo text
    const dispatch = useDispatch();

    const handleEdit = () => {
        setEditing(true);
    }

    const handleSave = () => {
        dispatch(updateTodo({ id: todo.id, text: newText }));
        setEditing(false);
    }

    const handleChange = (e) => {
        setNewText(e.target.value);
    }

    return (
        <div>
            {editing ? (
                <div>
                    <input type="text" value={newText} onChange={handleChange} />
                    <button onClick={handleSave}>Save</button>
                </div>
            ) : (
                <div>
                    <span>{todo.text}</span>
                    <button onClick={handleEdit}>Edit</button>
                </div>
            )}
        </div>
    );
}
