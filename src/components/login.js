import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: false,
            value: null
        }
        this.handleSelection = this.handleSelection.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    handleSelection(e) {

        var value = e.target.value;
        this.setState({ data: true, value })
        console.log(value);
        // this.props.setAuthedUser(value);
        // console.log(this.props.setAuthedUser(value).payload);

    }

    handleSubmit() {
        const { history } = this.props;
        console.log(this.state.value)
        this.props.setAuthedUser(this.state.value);
        console.log(this.props.setAuthedUser(this.state.value).payload);
        this.state.data ? history.push('/') : history.push('/login');
    }

    render() {
        const { sarahedo, tylermcginnis, johndoe } = this.props.allUsers;
        console.log(this.props);
        const data1 = { ...sarahedo };
        const data2 = { ...tylermcginnis };
        const data3 = { ...johndoe };
        return (
            <React.Fragment>
                <div className="card w-25 mx-auto my-2">
                    <div className="view overlay">
                        <img className="card-img-top" src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg"
                            alt="Card image cap" />
                    </div>
                    <div className="card-body">
                        <div className="form-group">
                            <select value={this.state.value} onChange={this.handleSelection} className="form-control" id="exampleFormControlSelect1">
                                <option disabled selected>Select Users</option>
                                <option value={data1.id}>{data1.name}</option>
                                <option value={data2.id}>{data2.name}</option>
                                <option value={data3.id}>{data3.name}</option>
                                {console.log(this.props)}
                            </select>
                        </div>
                        <Link onClick={this.handleSubmit} className="btn btn-info btn-md btn-block">Login</Link>
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