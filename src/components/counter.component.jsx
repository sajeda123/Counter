import { Component } from "react";

class Counter extends Component {
  getFormat = () => {
    if (this.state.counter === 0) return "Zero";
    else return this.state.counter;
  };

  render() {
    //console.log("Akhane pros pabo ",this.props);
    return (
      <>
        <ul className="container">
          <li class="list-unstyled">
            <div>
              <span className="badge bg-warning p-2 mr-5">
                {this.props.value}
              </span>
              <button
                onClick={() => this.props.onIncrement(this.props.id)}
                type="button"
                class="btn btn-secondary m-2"
              >
                +
              </button>
              <button
                onClick={() => this.props.onDecrement(this.props.id)}
                type="button"
                class="btn btn-secondary m-2"
                disabled={this.props.value === 0 ? "disabled" : ""}
              >
                -
              </button>
              <button 
              onClick={() => this.props.onDelete(this.props.id)}
              type="button" class="btn btn-danger m-2">
                Delete
              </button>
            </div>
          </li>
        </ul>
      </>
    );
  }
}

export default Counter;
