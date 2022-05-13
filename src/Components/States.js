import React,{Component} from "react";
import products_data from "../data";
import "./App.css";
class States extends Component {
    constructor(props) {
        var arrProduct = products_data();
        super(props);
        this.state = {arrProduct};
    } 
    render() {
        return (
            <div>
                {
                    this.state.arrProduct.map(key => 
                        <div>
                            <h2>{key.name}</h2>
                            <h2>src={key.img}</h2>
                            <h2>{key.detail}</h2>
                            <h2>{key.price}</h2>
                           
                        </div>
                    //     <div className="App">
                    //     <div className="container">
                    //         <div className="row">
                    //         <h2>{key.name}</h2>
                    //                    <img src={key.img}></img>
                    //                    <h2>{key.detail}</h2>
                    //                    <h2>{key.price}</h2>
                    //         </div>
                    //     </div>
                    //   </div>
                    )
                        
                }
            </div>
            
        );
    }
}
export default States;
