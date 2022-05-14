import React,{Component} from "react";
class MediumScore extends Component {
    constructor(props){
        super(props);
        this.state ={
            HK1: 0,
            HK2: 0,
            Avg: 0,
            Result: "",
            Rank: "",
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange = (event) => {
        let key = event.target.name;
        let val = event.target.value;

        this.setState({ [key]: val });
        this.setState((state) => ({
            Avg: parseFloat((parseFloat(state.HK1) + parseFloat(state.HK2))/2),
        }));
        this.setResult();
        this.setRank();
    };
    handleSubmit = (event) => {
        event.preventDefault();
        alert("Bạn là học sinh " + this.state.Rank);
    };
    setResult = () => {
        if (this.state.Avg > 3.5) this.setState({Result: "Được lên lớp"});
        else this.setState({Result: "Ở lại lớp"});
    };
    setRank = () => {
        if (this.state.Avg <3.5) this.setState({Rank: "Yếu"});
        else if (this.state.Avg <6.5) this.setState({Rank: "Trung Bình"});
        else if (this.state.Avg <=8) this.setState({Rank: "Khá"});
        else (this.setState ({Rank: "Giỏi"}));
    };
    render() {
        return (
            <div className="container">
                <h3>Kết quả học tập</h3>
                <form onSubmit={this.handleSubmit} className="was-validated">
                    <div className="form-group">
                        <label htmlFor="HK1">Điểm HK1: </label>
                        <input
                            type="number"
                            className="form-control"
                            id="HK1"
                            name="HK1"
                            max={10}
                            min={0}
                            defaultValue={0}
                            required
                            onChange={this.handleChange}
                        />
                        <div className="invalid-feedback">Điểm không hợp lệ</div>
                    </div>
                    <div className="form-group">
                    <label htmlFor="HK2">Điểm HK2: </label>
                        <input
                            type="number"
                            className="form-control"
                            id="HK2"
                            name="HK2"
                            max={10}
                            min={0}
                            defaultValue={0}
                            required
                            onChange={this.handleChange}
                        />
                        <div className="invalid-feedback">Điểm không hợp lệ</div>
                    </div>
                    <div className="form-group">
                    <label htmlFor="HK2">Điểm Trung Bình: </label>
                        <input
                            type="number"
                            className="form-control"
                            readOnly
                            value={this.state.Avg}
                        />
                        <div className="invalid-feedback">Điểm không hợp lệ</div>
                    </div>
                    <div className="form-group">
                    <label htmlFor="HK2">Kết quả: </label>
                        <input
                            type="text"
                            className="form-control"
                            defaultValue={0}
                            readOnly
                            value={this.state.Result}
                        />
                    </div>
                    <div className="form-group">
                    <label htmlFor="HK2">Xếp loại: </label>
                        <input
                            type="text"
                            className="form-control"
                            defaultValue={0}
                            readOnly
                            value={this.state.Rank}
                        />
                    </div>
                    <button type="submit" value="Submit" className="btn btn-primary">Xem kết quả</button>
                </form>             
            </div>
        );
    }
}

export default MediumScore;
