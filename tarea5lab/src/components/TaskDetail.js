import React, { Component } from "react";
import TaskPGD from "../services/taskService";

export default class TaskDetail extends Component {
  constructor(props) {
    super(props);
    this.getTutorial = this.getTutorial.bind(this);
    this.deleteTutorial = this.deleteTutorial.bind(this);

    this.state = {
      currentTutorial: {
        id: null,
        description: ""
      },
      message: ""
    };
  }

  componentDidMount() {
    this.getTutorial(this.props.match.params.id);
  }

 
  getTutorial(id) {
    TaskPGD.get(id)
      .then(response => {
        this.setState({
          currentTutorial: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }


  deleteTutorial() {    
    TaskPGD.delete(this.state.currentTutorial.id)
      .then(response => {
        console.log(response.data);
        this.props.history.push('/tutorials')
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { currentTutorial } = this.state;

    return (
      <div>
        <h1>Detalle</h1>
        {currentTutorial ? (
          <div>
              <div >
                <label >Description: </label>
                <strong> {currentTutorial.description} </strong>
              </div>


            <button
              className="badge badge-danger mr-2"
              onClick={this.deleteTutorial}
            >
              Delete
            </button>

            <p>{this.state.message}</p>
          </div>
        ) : (
          <div>
            <br />
            <p></p>
          </div>
        )}
      </div>
    );
  }
}
