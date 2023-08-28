import {React, useState} from 'react';
import style from '../app.module.css'; 

export const Addtodo = ({addToDo}) => {
    const [text, setText] = useState('');
    const [desc, setDesc] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if(!text || !desc){
        alert("Title or Descriptions cannot be empty.");
      }
      else{
        addToDo(text,desc);
        setText("");
        setDesc("");
      }
    }

    return (
      <ul className={style.ul}>
        <li className={style.li}><input className={style.title}
          placeholder='Title'
          value={text}
          onChange={(event) => setText(event.target.value)}
        /></li>
        <li className={style.li}><textarea className={style.textarea}
          placeholder='Description'
          value={desc}
          onChange={(event) => setDesc(event.target.value)}
        /></li>
        <div>
        <button className="btn btn-primary my-3" type="submit" onClick={handleSubmit}>Add Note</button>
        </div>
        <div>
         
        </div>
      </ul>
  )
}
