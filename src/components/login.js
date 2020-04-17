import React from 'react';
import { connect } from 'react-redux';
import {withRouter } from 'react-router-dom';
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: false,
            value: 'DEFAULT'
        }
        this.handleSelection = this.handleSelection.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
     referrer = null;

  componentDidMount() {
    const {
      history,
      location: { pathname }} = this.props;
    this.referrer = pathname;
    history.push("/login");
  }

    handleSelection(e) {
        var value = e.target.value;
        this.setState({ data: true, value })
        // console.log(value);
        // this.props.setAuthedUser(value);
        // console.log(this.props.setAuthedUser(value).payload);
    }

    handleSubmit() {
         const { history } = this.props;
        console.log(this.referrer)
       // console.log(this.state.value)
        if (this.state.data ===true) { this.props.setAuthedUser(this.state.value) }
       // console.log(this.props.setAuthedUser(this.state.value).payload);
         if (this.referrer === "/login") {
          history.push("/");
    } else {
      history.push(String(this.referrer));
    }
      
    }

    render() {
        const { sarahedo, tylermcginnis, johndoe } = this.props.allUsers;
        const data1 = { ...sarahedo };
        const data2 = { ...tylermcginnis };
        const data3 = { ...johndoe };
        return (
            <React.Fragment>
                <div className="card w-25 mx-auto my-2">
                    <div className="view overlay">
                        <img className="card-img-top" src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg"
                            alt="Login" />
                    </div>
                    <div className="card-body">
                        <div className="form-group">
                            <select value={this.state.value} onChange={this.handleSelection} className="form-control" id="exampleFormControlSelect1">
                                <option value='DEFAULT' disabled >Select Users</option>
                                <option value={data1.id}>{data1.name}</option>
                                <option value={data2.id}>{data2.name}</option>
                                <option value={data3.id}>{data3.name}</option>
                            </select>
                        </div>
                        <button onClick={this.handleSubmit}  className="btn btn-info btn-md btn-block">Login</button>
                    </div>
                </div>
            </React.Fragment >
        )
    }
}
const mapStateToProps = state => {
    return { ...state };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setAuthedUser: (data) => dispatch({ type: 'SET_STATE_USER', payload: data })
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));