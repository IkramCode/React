import React, { useState } from 'react'
import {updateTodo} from '../features/Slices/TodoSlice'
import {useDispatch} from 'react-redux'

export default function Updatetodo() {
    
    const [editing , setEditing] = useState(false)
    const [newText, setNewText] = useState("");
    const dispatch = useDispatch();

    const handleEdit = () => {
        setEditing(true)
    }
    const handleSave = () => {
        dispatch(updateTodo({id : todo.id , text:newText}))
        setEditing(false)
    }
    const handleChange = (e) => {
        setNewText(e.target.value)
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
          <span>{""}</span>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
    )
}
