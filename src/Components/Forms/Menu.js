import React, {Component} from "react";
class Menu extends Component {
    constructor(props){
        super(props);
        this.state={
            nameDrink: "",
            quantity: null,
            price: null,
            pay: null,
            total: null,
            moneyLeftOver: null
        }
 
        this.handleChange= this.handleChange.bind(this); //tránh binding trong render là bind trong hàm tạo constructor
        this.handleSubmit= this.handleSubmit.bind(this);
    }
    list = [
        {
            name: "Cà phê sữa",
            price: 10000
        },
        {
            name: "Cà phê đá",
            price: 10000
        },
        {
            name: "String dâu",
            price: 10000
        },
        {
            name: "Trà đá",
            price: 10000
        },
    ]
    handleChange =  (event) =>{
        let key = event.target.name;
        let val = event.target.value;
console.log(val);
        this.setState(prev => {
            const prevState = {...prev}
            prevState[key] = val
            this.list.filter(ele => ele.name === this.state.nameDrink).map(ele =>
                this.setState((prev) => ({
                    price: ele.price,
                    total:(prev.price * prev.quantity),
                    moneyLeftOver:(prev.pay - prev.total)
                }))
            )
            return prevState
        });    
       
    }
 
    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
        alert(`Bạn đã mua ${this.state.nameDrink} với số lượng là ${this.state.quantity} và  có tổng tiền là ${this.state.total}. ${this.state.moneyLeftOver < 0 ? "You need pay "+ String(this.state.moneyLeftOver).slice(1) +" for this Refresment" : this.state.moneyLeftOver > 0 ? "Your money left is" + this.state.moneyLeftOver +"" : "See you again ^.^"} `);
    }
render() {
        return (
            <div className="container">  
                <form className="mainMenu" name="forml" onSubmit={this.handleSubmit}>
                    <table>
                        <tr>
                            <td colSpan={2} align ="center">MENU</td>  
                        </tr>
                        <tr><td colSpan={2} align ="center">Cafe sữa     ............................. 12.000đ</td></tr>
                        <tr><td colSpan={2} align ="center">Cafe đá      ............................. 10.000đ</td></tr>
                        <tr><td colSpan={2} align ="center">String dâu   ............................. 8.000đ</td></tr>
                        <tr><td colSpan={2} align ="center">Trà đá       ............................. 2.000đ</td></tr>
                        <tr>
                            <td>MENU</td>
                            <td>
                                <select onChange={this.handleChange} name="nameDrink"  className="typeWater" >
                                    <option value={this.state.value} >Chọn loại nước bạn muốn uống</option>
                                    <option value= "Cà phê sữa">Cà phê sữa</option>
                                    <option value="Cà phê đá">Cà phê đá</option>
                                    <option value="String dâu">String dâu</option>
                                    <option value="Trà đá">Trà đá </option>
                                </select>
                            </td>
                        </tr>
                        <br></br>
                        <tr>
                            <td>Số lượng</td>
                            <td>
                                <input
                                    type="number"
                                    name="quantity"
                                    className="form-control"
                                    max={10}
                                    min={0}
                                    required
                                    onChange={this.handleChange}  
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>Tiền khách trả</td>
                            <td>
                                <input
                                    className="form-control"
                                    type="number"
                                    name="pay"
                                    required
                                    onChange={this.handleChange}  
                                />
                            </td>
                        </tr>
<tr>
                            <td>Tổng tiền</td>
                            <td>
                                <input
                                    type="number"
                                    name="total"
                                    className="form-control"
                                    readOnly
                                    value={this.state.total}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>Tiền dư</td>
                            <td>
                                <input
                                        type="number"  
                                        name="moneyLeftOver"
                                        className="form-control"
                                        readOnly
                                        value={this.state.moneyLeftOver}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2}><input type="submit" name="Submit" value="Tính tiền" /></td>
                        </tr>
                   
                    </table>
                </form>              
            </div>
        );
    }
}
export default Menu;
 
