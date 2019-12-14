import React from "react";

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "",
      items: [],      
    };
  }

  onChange = (event) => {
    this.setState({
      userInput: event.target.value
    });
  };

  addTodo = () => {    
    this.setState({
      items: [...this.state.items, {todo:this.state.userInput, complete:false}],
      userInput: ""
    });
  };
  
  deleteTodo =(index) =>{ 
    this.setState({items:this.state.items.filter((el,i)=>i!==index)})   

  };

  changeBtn = (key) =>{
    this.setState({items:this.state.items.map((el,i)=>i===key?{...el,complete:!el.complete}:el)})
  };  

  render() {
    return (
      <div>
        <div className="intro-container">
          <h1>To-Do App!</h1>
          <h3>Add New To-Do</h3>
          <input
            value={this.state.userInput}
            type="text"
            placeholder="Enter new task"
            className="text-area"
            onChange={this.onChange}
          />
          <br />
          <br />
          <button onClick={this.addTodo} className="btn-intro">Add</button>           
          
        </div>
        <p>Let's get some work done!</p>
        <div >{this.state.items.map((el,i)=>
        <div className="dynamic-btn">
           <button onClick={()=>this.changeBtn(i)} className='btn'>{el.complete?'Undo':'complete'}</button>
           <button onClick={()=>this.deleteTodo(i)} className='nor'>Delete</button>
           <span style={{textDecoration:el.complete &&'line-through'}}>{el.todo}</span></div>)}
        </div>    
    
      </div>
    );
  }
}

export default Todo;
