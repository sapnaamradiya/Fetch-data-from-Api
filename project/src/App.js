// ...................... FETCH DATA FROM an API IN REACT .....................

import React, { Component } from 'react';

export default class App extends Component{

    constructor(props){
        super(props)
        this.state={
            items:[],
            Dataisloaded:false 
        }
    }
 	//    ComponentDidMount is used to
	//    execute the code
    componentDidMount(){
        fetch("http://universities.hipolabs.com/search?country=United+States")
        .then((res)=>res.json())
        .then((json)=>{
            this.setState({
                items:json,
                Dataisloaded:true
            })
        })
    }
    render(){
        const{items, Dataisloaded}=this.state;
        if(! Dataisloaded) return <div>
            <h1>Please wait some time...</h1>
        </div>
        return(
            <div>
                <h1>Fetching the data....</h1>{
                    items.map((item)=>(
                        <ol key={item.id}>
                            country  : {item.country}  , 
                            University name : {item.name}  , 
                            alpha_two_code : {item.alpha_two_code}  ,
                            user_webpage : {item.web_pages} .
                        </ol>
                    ))
                }
            </div>
        )
    }
}