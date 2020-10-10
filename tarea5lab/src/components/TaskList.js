import React ,{Component}from 'react';
import TaskPGD from "../services/taskService";

export default class TaskList extends Component {

  constructor(props) {
    super(props);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.saveTutorial = this.saveTutorial.bind(this);
    this.newTutorial = this.newTutorial.bind(this);

    this.state = {
      id: null,
      description: "", 

      submitted: false
    };
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    });
  }

  saveTutorial() {
    var data = {
      description: this.state.description
    };

    TaskPGD.create(data)
      .then(response => {
        this.setState({
          id: response.data.id,
          description: response.data.description,

          submitted: true
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  newTutorial() {
    this.setState({
      id: null,
      description: "",

      submitted: false
    });
  }
  
  render() {
  return (
    <>
      <h1>TODO List</h1>
      {this.state.submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={this.newTutorial}>
              Add
            </button>
          </div>
        ) : (
      <div className="col-lg-12">
        <form className="form-inline">
          <div className="input-group w-100">
            <input 
              type="text"
              className="form-control"
              id="description"
              required
              value={this.state.description}
              onChange={this.onChangeDescription}
              name="description"/>
            <div  className="input-group-append">
              <input onClick={this.saveTutorial} type="button" value="Add" className="btn btn-primary"/>
            </div>
          </div>
        </form>
      </div>
       )}
    </>
  )
  }
}