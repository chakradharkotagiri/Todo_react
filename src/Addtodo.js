import React, { useState } from "react";



const Addtodo = ({addTodo}) => {
    const [title,setTitle]=useState("");
    const [desc,setDesc]=useState("");

    const submit =(e)=>{
        e.preventDefault();

        if(title==="" || desc===""){
            console.log(title,desc);
            alert("Title or Description cannot be blank");
        }
        else addTodo(title,desc);
    }
  return (
    <div className="container ">
        <h3 className="my-3">Add Todo </h3>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="title" value={title}  className="form-label">
            Todo Title
          </label>
          <input
          onChange={(e)=>{setTitle(e.target.value)}}
          value={title}
            type="text"
            className="form-control"
            id="title"
            aria-describedby="emailHelp"
          />
         
        </div>
        <div className="mb-3">
          <label htmlFor="desc" value={desc}   className="form-label">
            Description
          </label>
          <input
          onChange={(e)=>{setDesc(e.target.value)}}
            type="text"
            className="form-control"
            id="desc"
          />
        </div>
        <button type="submit"  className="btn btn-sm btn-success">
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default Addtodo;
