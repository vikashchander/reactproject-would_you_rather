import React from 'react';
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
        // console.log(e.target.value)
    };
      
    //console.log({ optionOne, optionTwo, authedUser })

    handleClick = async () => {
        const { optionOne, optionTwo } = this.state;
        const { authedUser} = this.props;
        let optionOneText = optionOne;
        let optionTwoText = optionTwo;
        let author = authedUser;
        // (optionOne==undefined && optionTwo==undefined) ?history.push("/"):history.push("/newquestion") 
        //console.log({ optionOne, optionTwo, authedUser })
        (optionOne !=="" && optionTwo!=="") && (await this.props.handleAddQuestion({
            optionOneText, optionTwoText, author
        }))
        // console.log({ optionOneText, optionTwoText, author })
    }

    render() {
        const { optionOne, optionTwo } = this.state;
        const { users, authedUser } = this.props;
        const user = users[authedUser];
        var redirect =(optionOne !=="" && optionTwo!=="")?"/":"/newquestion";
        return (
            <React.Fragment>
                <div className="card w-25 my-4 h-50 mx-auto">
                    <img src={user.avatarURL} className="h-50 w-25 rounded-circle mx-auto" alt="user" />
                    <div className="card-body">
                        <h5 className="card-title">{user.name}</h5>
                         <h6 className="text-capitalize">would you rather</h6>
                        <form className="needs-validation" noValidate>
                            <div className="form-row">
                                <div className="col-md-12 mb-3 ">
                                    <input type="text" className="form-control" id="validationCustom01"
                                        name="optionOne" required placeholder="Enter Opinion One Text" value={optionOne}
                                        onChange={this.handleOnChange} />
                                    <div className="valid-feedback">
                                        Looks good!
                                    </div>
                                </div>
                                <div className="col-md-12 mb-3">
                                    <input type="text" className="form-control"
                                        name="optionTwo"
                                        id="validationCustom02" required placeholder="Enter Opinion Two Text"
                                        value={optionTwo}
                                        onChange={this.handleOnChange} />
                                    <div className="valid-feedback">
                                        Looks good!
                                    </div>
                                </div>
                                <Link onClick={this.handleClick} to={redirect} className='btn btn-info  btn-block'>Ask Others Opinion</Link>
                            </div> 
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