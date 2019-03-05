import React, {Component} from 'react';
import Member from "./components/Member"



class App extends Component {
    constructor() {
        super();
        this.state = {
            isHidden: true,
            members: []
        }
    }
    toggleHidden = ()=> {
        this.setState({
            isHidden: !this.state.isHidden
          })
        }

        sayHi = ()=> {
console.log("Hola")
        }
  
    componentDidMount() {
        this.setState({
            members: [
                {
                    id: 1,
                    name: "Luke Williams",
                    img: "./pictures/LukeWilliams.png"
                }, {
                    id: 2,
                    name: "Martin Wright",
                    img: "./pictures/MartinWright.png"
                }, {
                    id: 3,
                    name: "Sabrina Miller",
                    img: "./pictures/SabrinaMiller.png"
                }, {
                    id: 4,
                    name: "Sai Patel",
                    img: "./pictures/SaiPatel.png"
                }
            ]
        });
    }

    render() {
        return (
            <div className="App">
            <button onClick={this.toggleHidden}>Hidden</button>
                    {this.state.isHidden ? <Member members={this.state.members}/> : null}
               
              <button onClick={this.sayHi}>SayHu</button>      
                    
              
            </div>
        );
    }
}


export default App;
