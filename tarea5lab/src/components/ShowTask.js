import React, {Component} from 'react';
import TaskPGD from "../services/taskService";
import { Link } from "react-router-dom";
import styled from 'styled-components'


export default class TutorialsList extends Component {

  
  constructor(props) {


    super(props);
    this.retrieveTutorials = this.retrieveTutorials.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveTutorial = this.setActiveTutorial.bind(this);
  

    this.state = {
      tutorials: [],
      currentTutorial: null,
      currentIndex: -1,
      clicked: false,
      black:true
    };
  }

  componentDidMount() {
    this.retrieveTutorials();
  }

  
  retrieveTutorials() {
    TaskPGD.getAll()
      .then(response => {
        this.setState({
          tutorials: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  refreshList() {
    this.retrieveTutorials();
    this.setState({
      currentTutorial: null,
      currentIndex: -1
    });
  }

  setActiveTutorial(tutorial, index) {
    this.setState({
      currentTutorial: tutorial,
      currentIndex: index
    });
  }

  


  render(){

  const { tutorials, currentTutorial, currentIndex } = this.state;
  
  

  return (
    <>
      <h1 InputBox>Show Tasks</h1>
      <div className="list row">
        <div className="col-md-6">
          <ul className="list-group">
            {tutorials &&
              tutorials.map((task, index) => (
                <li 
                  className={"list-group-item"+
                    (index === currentIndex ? "active" : "")
                  }
                  
                  onClick={() => this.setActiveTutorial(task, index)}
                  key={index}
                  
                 >
                  
                  {task.description}
                </li>
              ))}
          </ul>
        </div>
        <div className="col-md-6">
          {currentTutorial ? (
            <div>
              <h4>Task</h4>
              <div>
                <label>
                  <strong>Description:</strong>
                </label>{" "}
                {currentTutorial.description}
              </div>

              <Link
                to={"/tasks/" + currentTutorial.id}
                className="badge badge-warning"
              >
                Detalle
              </Link>
              <button className="badge badge-secondary mr-2"  > Done </button>
            </div>
          ) : (
            <div>
              
            </div>
          )}
        </div>
      </div>
    
       </>
  )}
}
