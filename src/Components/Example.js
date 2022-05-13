import React,{Component} from "react";
class Example extends Component {
    constructor(props){
        super(props);
        this.state = { index: 0};
    }
    render() {
        return (
            <div>
                 <p>Giá trị {this.state.index}</p>
               <button
                onClick={() =>{
                    this.setState({
                        index: this.state.index + 1
                    })
                }}
                >
                    Tăng
               </button>
               <button
                onClick={() =>{
                    this.setState({
                        index: this.state.index - 1
                    })
                }}
                >
                    Giảm
               </button>
            </div>
        );
    }
}
export default Example;