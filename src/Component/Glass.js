import React, { Component } from 'react'

export default class Glass extends Component {
    state = {
        img: "./Img/v1.png"
    }
    renderImg = (color) => {
        // Gán Giá Trị Mới Cho State,render Lại UI
        this.setState({
            img: `./Img/v${color}.png`
        })
    }
    render() {
        return (
            <div className="imgmodel opa" style={{ backgroundImage: "url(./img/background.jpg)" }} >
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <img src="./img/model.jpg" alt="" className="img-fluid my-5" style={{marginTop:"100px"}}/>
                            <img src={this.state.img} alt="" className="img-fluid child" style={{ height: "80px" }} />
                        </div>
                    

                    </div>
                  
                    <div className="row mx-5 bodyChild ">
                            <div className="col-2">
                                <img className="imgchild" src="./img/g1.jpg" onClick={
                                    () => {
                                        this.renderImg("1")
                                    }
                                }></img>
                            </div>


                            <div className="col-2">
                                <img className="imgchild" src="./img/g2.jpg" onClick={
                                    () => {
                                        this.renderImg("2")
                                    }
                                }></img>
                            </div>


                            <div className="col-2">
                                <img className="imgchild" src="./img/g3.jpg" onClick={
                                    () => {
                                        this.renderImg("3")
                                    }
                                }></img>
                            </div>


                            <div className="col-2">
                                <img className="imgchild" src="./img/g4.jpg" onClick={
                                    () => {
                                        this.renderImg("4")
                                    }
                                }></img>
                            </div>
                            <div className="col-2">
                                <img className="imgchild" src="./img/g5.jpg" onClick={
                                    () => {
                                        this.renderImg("5")
                                    }
                                }></img>
                            </div>
                            <div className="col-2">
                                <img className="imgchild" src="./img/g6.jpg" onClick={
                                    () => {
                                        this.renderImg("6")
                                    }
                                }></img>
                            </div>
                            <div className="col-2">
                                <img className="imgchild" src="./img/g7.jpg" onClick={
                                    () => {
                                        this.renderImg("7")
                                    }
                                }></img>
                            </div>
                            <div className="col-2">
                                <img className="imgchild" src="./img/g8.jpg" onClick={
                                    () => {
                                        this.renderImg("8")
                                    }
                                }></img>
                            </div>
                            <div className="col-2">
                                <img className="imgchild" src="./img/g9.jpg" onClick={
                                    () => {
                                        this.renderImg("9")
                                    }
                                }></img>
                            </div>






                        </div>

                  







                </div>
            </div>





        )
    }
}
