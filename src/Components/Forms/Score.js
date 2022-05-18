import React, {Component} from "react";
class Score extends Component {
    constructor(props){
        super(props);
        this.state = {
            hk1: 0,
            hk2: 0,
            MediumScore: '',
            academicPower: '',
            KQ: ''
        };   
    }
    myChangeHandler = (event) =>{
        let key =event.target.name;
        let value = event.target.value;
        this.setState({
            [key]:value
        });
    }  
    mySubmitHandler = (event) =>{
        event.preventDefault();
        let hk1 = this.state.hk1;
        let hk2 = this.state.hk2;
        let Medium = 0 ;
        if(!Number(hk1) || !Number(hk2)){
            alert("Score semester must be a number");
        }else{
            Medium= (parseFloat(hk1) + parseFloat(hk2*2))/3;
            this.setState({MediumScore:Medium});
            if(Medium >= 9){
                this.setState({KQ: "HSG"});
                this.setState({academicPower: "Được lên lớp"});
                }else if(Medium >= 7 && Medium < 9){
                    this.setState({KQ:"HSK"});
                    this.setState({academicPower:"Được lên lớp"});
                }else if(Medium >= 5 && Medium < 7){
                    this.setState({KQ:"HSTB"});
                    this.setState({academicPower:"Được lên lớp"});

                }else{
                    this.setState({KQ:"HSY"});
                    this.setState({academicPower: "Không được lên lớp"});
                }
        }
        console.log(event);
    }
    render() {
        return (
            <form name="forml" onSubmit={this.mySubmitHandler}>
                <table width={670} height={177} border = {0} align="center" >
                    <tbody>
                        <tr bgcolor>
                            <td colSpan={2} align="center">
                                <font color size={5}><b>KẾT QUẢ HỌC TẬP</b></font>
                            </td>
                        </tr>
                        <tr>
                            <td width={125}><span>Điểm HK1: </span></td>
                            <td width={261}><label><input name="hk1" type="number" min="0" max="10" size={90} onChange={this.myChangeHandler}/></label></td>
                        </tr>
                        <tr>
                            <td width={125}><span>Điểm HK2: </span></td>
                            <td width={261}><label><input name="hk2" type="number" min="0" max="10" size={20} onChange={this.myChangeHandler}/></label></td>
                        </tr>
                        <tr>
                            <td width={125}><span>Điểm trung bình: </span></td>
                            <td width={261}><label>
                                <input name="MediumScore" type="text" readOnly value={this.state.MediumScore} size={20} onChange={this.myChangeHandler}/></label></td>
                        </tr>
                        <tr>
                            <td width={125}><span>Kết quả: </span></td>
                            <td width={261}><label><input name="ketqua" type="text" readOnly value={this.state.KQ} size={20} onChange={this.myChangeHandler}/></label></td>
                        </tr>
                        <tr>
                            <td width={125}><span>Xếp loại học lực: </span></td>
                            <td width={261}><label><input name="x" type="text" readOnly value={this.state.academicPower} size={20} onChange={this.myChangeHandler}/></label></td>
                        </tr>
                        <tr>
                            <td colSpan={2} align="center"><input type="submit" defaultValue="Xem kết quả"/></td>
                        </tr>
                    </tbody>
                </table>
            </form>
        );
    }
}
export default Score;