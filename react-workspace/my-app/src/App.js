import React, { Component } from 'react';

const Empty = ()=> {
    return(<label className ="label-error">
        <div> 
            This field cannot be empty
        </div>
       </label>)
}

class App extends Component {

  state = {
    email: '',
    password: '',
    isSubmitted: false,
    isEmpty: true,
  };



  handleLogin = (event) => {
      console.log('event',event);
    this.setState({ isSubmitted: true });
    this.setState({isEmpty: (!this.state.password || !this.state.email)})

    };

  handleChangeEmail = (event) => {
      // !! - zamiana typów nie boolean na boolean np. 'Szyszon' jako string to TRUE 
    this.setState({ email: event.target.value }); 
    this.setState({isEmpty: !event.target.value});
    this.setState({isSubmitted: false})
   

  };

  handleChangePassword = (event) => {
      this.setState({isSubmitted:false});
    this.setState({ password: event.target.value }); 
    this.setState({isEmpty: !event.target.value});
  };

  handleLogout = () => {
    this.setState({ password: '', email: '', isSubmitted: false });
    this.setState({isEmpty: true});
    
  };
 
  render() {
    return (
      <>
        { 
           (this.state.isSubmitted === false || this.state.isEmpty === true) && (
          <section>
            <div>
              <label className="label-email">E-mail:</label>
              <input
                onChange={this.handleChangeEmail}
                value={this.state.email}
              />
            </div>
            { this.state.isSubmitted === true && !!this.state.email === false && (<Empty/>)}
            <div>
              <label className="label-password">Password:</label>
              <input
                onChange={this.handleChangePassword}
                type="password"
                value={this.state.password}
              />
            </div>
            { this.state.isSubmitted === true && !!this.state.password === false && (
        
       <Empty/>)
       }
           

            <button onClick={this.handleLogin}>Login</button>
          
          </section>
        )}

        {(this.state.isSubmitted === true && this.state.isEmpty === false) && (
          <section>
            <div>
              <label>E-mail:</label> {this.state.email}
            </div>

            <div>
              <label>Password:</label> {this.state.password}
            </div>
            <button onClick={this.handleLogout}>Logout</button>
          </section>
        )}
      </>
    );
  }
}

export default App;
