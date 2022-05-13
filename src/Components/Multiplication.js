import React,{Component} from "react";
class Multiplication extends Component {
    constructor(props){
        super(props);
        this.state = {
            fields:{
                name: 'Nguyen Thao Nguyen',
                email: 'tngreen2k2@gmail.com',
            }
        }
    }
    render() {
        return (
            <div>
               <h1>{this.state.fields.name}</h1>
               <h1>{this.state.fields.email}</h1>
            </div>
        );
    }
}
export default Multiplication;