import React  from 'react';

class Nav extends React.Component{
    state ={
        name: 'Patric',
        counter: 0
    };

    constructor(){
       //musi byc super
        super();

        // wywołuje odpowiedz po ustalanym czasie 
        setTimeout(() =>{
            console.warn('po 5 sekundach');
           // zmienia też HTMLA
            this.setState({name : 'John'})
            console.warn(this.state.name);

        }, 5000);

        setInterval(() => {
            this.setState({counter: this.state.counter +1});
        }, 1000);
    }

    // musi byc render
    render(){
        return(
            <nav>
              Time on the page: {this.state.counter}
            </nav>
        )
     }

}

export{Nav};