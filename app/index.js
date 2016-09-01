import React from 'react'
import ReactDom from'react-dom'
import axios from 'axios'



let Header = React.createClass({
    render: function(){
        return <div className="test-header">This is a Header Component</div>
    }
})


let Footer = React.createClass({
    render: function(){
        return <div className="test-footer">This is a Footer Component</div>
    }
})


let ContentLeft = React.createClass({
    getInitialState: function(){
        return{
            data: []
        }
    },
    
     getAjaxData: function(){
         //The API youhave suggested should have an api key so i need to register for those rather that i have used other api
         axios.get('http://swapi.co/api/vehicles/6/').then(results => {
             this.setState({
                 users:results.data
             })
         })
      },
    
    render: function(){
        console.log(this.state.users)
        return (
            <div className="test-left">
                This is a Left content 
            <input ref="textBox"  type="text"/>
            <button onClick={this.getAjaxData}>search</button>
            <div >result: click on search button and see the o/p in console.log</div>
            </div>)
    }
              
})


let ContentRight = React.createClass({
    
    
    getInitialState: function(){
        return{
            data: []
        }
    },
    
     getAjaxData: function(){
         //The API youhave suggested should have an api key so i need to register for those rather that i have used other api
         axios.get('http://swapi.co/api/vehicles/6/').then(results => {
             this.setState({
                 users:results.data
             })
         })
      },
    
    render: function(){
        console.log(this.state.users)
        return (
            <div className="test-right">
                This is a Left content 
            <input ref="textBox"  type="text"/>
            <button onClick={this.getAjaxData}>search</button>
            <div >result: click on search button and see the o/p in console.log</div>
            </div>)
    }
             
    
                 
})

let App = React.createClass({
       render:function(){
        return (
            <div className="test-container">
              <Header />
                 <ContentLeft />
                 <ContentRight />
              <Footer />
            </div>
               )
    }
})

ReactDom.render(<App />, document.getElementById('test'))  
