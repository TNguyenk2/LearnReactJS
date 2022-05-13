import React,{Component} from "react";
class Item extends Component {
    
    render() {
        return (
            <div>
                <h3>{this.props.name}</h3>
                <img src={this.props.img}/>
                <h5>{this.props.detail}</h5>
                <h5>{this.props.price}</h5>
                <button onClick={() => buy(this.props.name)}>Add to cart</button>
            </div>
        );
    }
}
function buy(name){
    alert(`Cảm ơn bạn đã đặt hàng sản phẩm ${name} thành công`);
}
export default Item;
