import React,{Component} from "react";
import data from "../data"
import Item from "./Item"
import "../Products.css"
class Products extends Component {
    constructor(props){
        var arrProducts = data("products");
        var arrCategories = data("categories");
        super(props);
        this.state = {
        // arrPro: arrProducts,
        // arrCate: arrCategories
        arrProducts,arrCategories,
        idCategory: 4
        }
       
    }
    render() {
        var rows = [];
        for (var i =0; i< this.state.arrProducts.length; i++) {
            if (this.state.idCategory == this.state.arrProducts[i].id_category){
                rows.push(
                    <Item 
                        name = {this.state.arrProducts[i].name}
                        img = {this.state.arrProducts[i].img}
                        detail = {this.state.arrProducts[i].detail}
                        price = {this.state.arrProducts[i].price}
                        >
                       
                    </Item>
                
                )
            }          
        }
        return (
            <div className="container">
                <div >
                    <button onClick={ () => this.setState({idCategory:1})}>Máy ảnh</button>
                    <button onClick={ () => this.setState({idCategory:2})}>Đồng hồ thông minh</button>
                    <button onClick={ () => this.setState({idCategory:3})}>Điện thoại</button>
                    <button onClick={ () => this.setState({idCategory:4})}>Laptop</button>
                </div>
                <div className="pro">
                    {rows}
                    
                </div>
            </div>
        );
    }
    
}

export default Products;
