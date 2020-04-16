import React, { useState } from 'react';
import { connect } from "react-redux";
import { useParams,withRouter,Link } from "react-router-dom";
import { handleAnswerQuestion } from '../actions/answerQuestion';
import './home.css';


function QuestionView(props) {
    const { questions, users, history,setAuthedUser } = props;
    // console.log(this.props);
    let { id } = useParams();
    const [votedForOption, setvotedForOption] = useState();
    const handleChange = (e) => {
        let dataValue =e.target.value;
      setvotedForOption(dataValue);
    console.log(votedForOption);
    }
    var redirect = `/questions/${id}`;
    const handleClick = () => {
        // action
        const qid = id;
        const answer = votedForOption;
        const authedUser = setAuthedUser;
        //console.log({ authedUser, qid, answer });
        
      (answer !==undefined )&&props.handleAnswerQuestion({ authedUser, qid, answer });
    };
    const question = questions[id];
    const userData = users[question.author];
    //console.log(userData);
    const allQuestionAnswer = Object.values(questions);
    // console.log(allQuestionAnswer);
    const unAnsweredQuestions = allQuestionAnswer.filter(data => !data.optionOne.votes.includes(setAuthedUser) && !data.optionTwo.votes.includes(setAuthedUser));
    //console.log(unAnsweredQuestions);
    const answeredQuestions = allQuestionAnswer.filter(data => data.optionOne.votes.includes(setAuthedUser) || data.optionTwo.votes.includes(setAuthedUser));
    //console.log(answeredQuestions);
    const unAnsweredData = unAnsweredQuestions.filter(data => data.id === id);
    const unAnsweredView = unAnsweredData[0];
   // console.log(unAnsweredData[0]);
    const answeredData = answeredQuestions.filter(data => data.id === id);
    const answeredView = answeredData[0];
    // console.log(answeredView)    
    // console.log(questions[id].optionOne.votes.includes(setAuthedUser))
    const votedForOptionOne = questions[id].optionOne.votes.includes(setAuthedUser);
    const votedForOptionTwo = questions[id].optionTwo.votes.includes(setAuthedUser);
    const voteCountOptionOne = questions[id].optionOne.votes.length;
    const voteCountOptionTwo = questions[id].optionTwo.votes.length;
    const totalVotes = voteCountOptionOne + voteCountOptionTwo;
    const votePercentOptionOne =
        Math.round((voteCountOptionOne / totalVotes) * 10000) / 100;
        console.log(votePercentOptionOne)
    const votePercentOptionTwo =
        Math.round((voteCountOptionTwo / totalVotes) * 10000) / 100;
        console.log(votePercentOptionTwo);
        var processBarOne =votePercentOptionOne;
        var processBarTwo = votePercentOptionTwo
    return (
        <React.Fragment>
            {answeredData.length === 1 ?
                (
                    <div className="card w-25 my-3 mx-auto" key={userData.id}>
                        <div className="view overlay w-50 mx-auto" >
                            <img className="my-2 rounded-circle w-75 z-depth-2" src={userData.avatarURL}
                                alt="userImage" />
                        </div>
                        <div className="card-body">
                            <h4 className="card-title">{userData.name}'s Opinion</h4>
                            <div className='mb-2'>
                             <div className='d-inline-block'>
                             <p className='text-capitalize'>{answeredView.optionOne.text}</p>
                             {votedForOptionOne && <span className="badge badge-info mr-2">Is Your Choice</span>}
                             </div>
                            <div className="progress">
                            <div className={`progress-bar bg-info w-${processBarOne}`} role="progressbar"   aria-valuemax="100">{voteCountOptionOne} out of {totalVotes} votes</div>
                            </div>
                            
                                   <p className='my-2 mr-3 text-capitalize'>{answeredView.optionTwo.text}{votedForOptionTwo && <span className="badge badge-info mr-2">Is Your Choice</span>}</p>
                                   <div className="progress">
                          <div className={`progress-bar bg-info w-${processBarTwo}`} role="progressbar"  aria-valuemax="100">{voteCountOptionTwo} out of {totalVotes} votes</div>
                            </div>
                            </div>
                        </div>
                    </div>
                )
                : (<div className="card data m-2 mx-auto">
                    <div className="mx-auto">
                        <img className="w-50 rounded-circle ml-5 my-3" src={userData.avatarURL}
                            alt="userImage" />
                    </div>
                    <div className="card-body my-2">
                        <h4 className="card-title">{userData.name}'s Ask </h4>
                        <div className='mb-2'>
                            <div className="card-text custom-control custom-radio">
                                <input type="radio" class="custom-control-input" checked={votedForOption === "optionOne"} name='optionOne' value="optionOne" id="defaultGroupExample1" onChange={handleChange} />
                                <label className="custom-control-label text-primary text-capitalize" htmlFor="defaultGroupExample1">{unAnsweredView.optionOne.text}</label>
                            </div>
                            <div className="card-text custom-control custom-radio">
                                <input type="radio" class="custom-control-input" checked={votedForOption === "optionTwo"}  name='optionTwo' value="optionTwo" id="defaultGroupExample2" onChange={handleChange} />
                                <label className="custom-control-label text-success text-capitalize" htmlFor="defaultGroupExample2">{unAnsweredView.optionTwo.text}</label>
                            </div>
                        </div>
                        <Link onClick={handleClick} to={votedForOption===undefined?redirect:'/'} className="btn btn-info">Submit Your Opinion</Link></div>
                </div>)}
        </React.Fragment>
    )
}

const mapStateToProps = (state) => {
    return {
        users: state.allUsers,
        questions: state.loadQuestion,
        setAuthedUser: state.setAuthedUser
    }
}

export default withRouter(connect(mapStateToProps,{ handleAnswerQuestion})(QuestionView));