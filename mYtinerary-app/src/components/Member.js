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

export default Member;