import React from 'react';


export default class PracticeComponent extends React.Component{
  
  constructor(){
    this.state = {
      name1: 'vet',
      name2: 'ket',
      name3: 'fet',
      name4: 'tet'
    }
  }
  render(){
    return(
    <ol>
        { console.log(Object.entries(this.state))}
        {Object.entries(this.state).map( (entry) => {
            return (
                <li> 
                  <span> {entry[0]} </span>
                    =
                  <span> {entry[1]} </span>
                </li>
            );
          })
        }
    </ol>
    );
  }
}