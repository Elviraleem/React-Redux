import React, {Component} from 'react';

class Member extends Component {
    
        render() {
            return (
                <div>
                    {this.props.members.map(member => {
                      return (
                        <div key={member.id}>
                        <h1>{member.name}</h1>
                        <img src={member.img} alt="img"></img>
                        </div> )          
                        })
                      }
                </div>
            )}
    }

class App extends Component {
    constructor() {
        super();
        this.state = {
            isHidden: true,
            members: []
        }
    }
    toggleHidden () {
        this.setState({
            isHidden: !this.state.isHidden
          })
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
            <button onClick={this.toggleHidden.bind(this)}>Hidden</button>
                    {!this.state.isHidden && <Member />}
                <ul>
                    
                    <Member members={this.state.members}/>
                </ul>
            </div>
        );
    }
}


export default App;
