import React, { Component } from 'react'
import dataGlasses from "./data/dataGlasses.json"
import "./glassesImage/background.jpg"
import "./glassesImage/model.jpg"

import "./Glass.css"


export default class Glass extends Component {


    state = {
        glassesCurrent: {
            "id": 2,
            "price": 50,
            "name": "GUCCI G8759H",
            "url" :"./glassesImage/v2.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
           
          
        }
        
    }
    renderList = () => {
        return dataGlasses.map((glassesItem, index) => {
            return <img onClick={()=>{ this.changeGlasses(glassesItem) }} className="ml-3 p-3 border border-width-1" style={{ width: '110px', cursor: 'pointer' }} key={index} src={glassesItem.url} />
        })
    }

    changeGlasses = (newGlasses) => {
        this.setState({
            glassesCurrent:newGlasses
        })
    }


    

   

    render() {
        
        return (
            <div className="bg-glass">
               

                <div className="bg">
                    <h3 className="text-center text-light p-5 bg-rgb">GLASSES </h3>
                    <div className="container">
                        <div className="row mt-5 text-center">
                            <div className="col-6">
                                <div className="position-relative">
                                    <img className="position-absolute bg-model styleGlasses " style={{ width: '250px' }}  />
                                    <img  className="position-relative glass" src={this.state.glassesCurrent.url} />
                                    <div  className="position-relative infoGlasses ">
                                        <span  className="font-weight-bold span1">{this.state.glassesCurrent.name}</span> <br />
                                        <span className="span2">{this.state.glassesCurrent.desc}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <img className="bg-model"  />

                            </div>
                        </div>
                    </div>
                    <div className="bg-light container text-center mt-5 d-flex justify-content-center p-5">
                        {this.renderList()}
                    </div>
                 
                </div>
            </div >
        )

       
        
        

      


    }
}
