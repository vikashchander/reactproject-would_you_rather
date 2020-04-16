import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
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
    handleSelection(e) {
        var value = e.target.value;
        this.setState({ data: true, value })
        // console.log(value);
        // this.props.setAuthedUser(value);
        // console.log(this.props.setAuthedUser(value).payload);
    }

    handleSubmit() {
       // console.log(this.state.value)
        this.props.setAuthedUser(this.state.value);
       // console.log(this.props.setAuthedUser(this.state.value).payload);
      
    }

    render() {
        const { sarahedo, tylermcginnis, johndoe } = this.props.allUsers;
        const data1 = { ...sarahedo };
        const data2 = { ...tylermcginnis };
        const data3 = { ...johndoe };
        const Redirect =this.state.data ? "/" : "/login";
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
                        <Link onClick={this.handleSubmit} to={Redirect} className="btn btn-info btn-md btn-block">Login</Link>
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