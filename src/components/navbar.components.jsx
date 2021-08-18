import { Component } from "react";
class Navbar extends Component {
  render() {
    return (
      <>
        <div class="container">
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#demo">
              Navbar
              <span class="badge bg-secondary p-2">4</span>
            </a>
          </nav>
        </div>
      </>
    );
  }
}

export default Navbar;
