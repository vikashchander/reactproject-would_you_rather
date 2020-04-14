import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom';
import { handleAddQuestion } from "../actions/addQuestion";

class AddQuestion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            optionOne: "",
            optionTwo: ""
        }
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    handleOnChange(e) {
        //console.log(data)
        const value = e.target.value;
        this.setState({
            [e.target.name]: value
        });
        console.log(e.target.value)
    };

    handleClick = async () => {
        const { optionOne, optionTwo } = this.state;
        const { authedUser, history } = this.props;
        let optionOneText = optionOne;
        let optionTwoText = optionTwo;
        let author = authedUser;
        (!optionOne || !optionTwo) ? history.push("/newquestion") : history.push("/")
        //console.log({ optionOne, optionTwo, authedUser })
        await this.props.handleAddQuestion({
            optionOneText, optionTwoText, author
        })
        // console.log({ optionOneText, optionTwoText, author })
    }

    render() {
        const { optionOne, optionTwo } = this.state;
        const { users, authedUser } = this.props;
        const user = users[authedUser];
        return (
            <React.Fragment>
                <div class="card minwidth-300 w-25 mt-3 mx-auto">
                    <img src={user.avatarURL} height="200" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">{user.name}</h5>
                        <form class="needs-validation" noValidate>
                            <div class="form-row">
                                <h6>{user.name}'s Ask</h6>
                                <div class="col-md-12 mb-3">
                                    <input type="text" class="form-control" id="validationCustom01"
                                        name="optionOne" required placeholder="Enter Opinion One Text" value={optionOne}
                                        onChange={this.handleOnChange}
                                        required />
                                    <div class="valid-feedback">
                                        Looks good!
                                    </div>
                                </div>
                                <div class="col-md-12 mb-3">
                                    <input type="text" class="form-control"
                                        name="optionTwo"
                                        id="validationCustom02" required placeholder="Enter Opinion Two Text"
                                        value={optionTwo}
                                        onChange={this.handleOnChange} />
                                    <div class="valid-feedback">
                                        Looks good!
                                    </div>
                                </div>
                            </div>
                            <Link onClick={this.handleClick} className='btn btn-primary'>Ask Others Opinion</Link>
                        </form>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        users: state.allUsers,
        authedUser: state.setAuthedUser,
    };
};

export default withRouter(connect(mapStateToProps, { handleAddQuestion })(AddQuestion));