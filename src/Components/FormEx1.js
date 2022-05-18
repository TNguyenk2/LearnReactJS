import React,{Component} from "react";
class FormEx1 extends Component {
    constructor(props){
        super(props);
        this.state = {usename: ''};
    }
    mySubmitHandler = (event) =>{
        event.preventDefault();
        alert("You are submitting " + this.state.usename);
    }
    myChangeHandler = (event) => {
        this.setState({usename: event.target.value})
    }
    render() {
        return (
            <><form onSubmit={this.mySubmitHandler}>
                <h1>Hello {this.state.usename}</h1>
                <p>Enter your name, and submit:</p>
                <input
                    type='text'
                    onChange={this.myChangeHandler} />
                <input
                    type='submit' />
            </form><div>

                </div></>
        );
    }
}
// class FormEx1 extends Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             usenrame: '',
//             age:null,
//         };
//     }
//     myChangeHandler = (event) =>{
//         let nam = event.target.name;
//         let val = event.target.value;
//         this.setState({[nam]:val});
//     }
//     render() {
//         return (
//             <form>
//                 <h1>Hello {this.state.username} {this.state.age}</h1>
//                 <p>Enter your name:</p>
//                 <input 
//                     type='text'
//                     name='username'
//                     onChange={this.myChangeHandler}
//                 />
//                  <p>Enter your age:</p>
//                 <input 
//                     type='text'
//                     name='age'
//                     onChange={this.myChangeHandler}
//                 />
//             </form>
//         );
//     }
// }

export default FormEx1;
