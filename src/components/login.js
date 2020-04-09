import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setAuthedUser } from '../actions/login';
class Login extends React.Component {

    render() {
        const { sarahedo, tylermcginnis, johndoe } = this.props;
        const data1 = { ...sarahedo };
        const data2 = { ...tylermcginnis };
        const data3 = { ...johndoe };



        return (
            <React.Fragment>
                <div class="card w-25 mx-auto my-2">
                    <div class="view overlay">
                        <img class="card-img-top" src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg"
                            alt="Card image cap" />
                        <a href="#!">
                            <div class="mask rgba-white-slight"></div>
                        </a>
                    </div>
                    <div class="card-body">
                        <div class="form-group">
                            <select class="form-control" id="exampleFormControlSelect1">
                                <option value="data" disabled selected>Select Users</option>
                                <option value={data1.id}>{data1.name}</option>
                                <option value={data2.id}>{data2.name}</option>
                                <option value={data3.id}>{data3.name}</option>
                            </select>

                        </div>
                        <a href="#" class="btn btn-primary mx-auto">Login</a>
                    </div>
                </div>
            </React.Fragment >
        )
    }
}
const mapStateToProps = state => {
    return { ...state.allUsers };
};
export default connect(mapStateToProps)(Login);