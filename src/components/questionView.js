import React, { useState } from 'react';
import { connect } from "react-redux";
import { useParams,withRouter,Link } from "react-router-dom";
import { handleAnswerQuestion } from '../actions/answerQuestion';


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
    const handleClick = () => {
        // action
        const qid = id;
        const answer = votedForOption;
        const authedUser = setAuthedUser;
        console.log({ authedUser, qid, answer });
        handleAnswerQuestion({ authedUser, qid, answer });
      history.push('/')
    };


    const allQuestionAnswer = Object.values(questions);
    // console.log(allQuestionAnswer);
    const unAnsweredQuestions = allQuestionAnswer.filter(data => !data.optionOne.votes.includes(setAuthedUser) && !data.optionTwo.votes.includes(setAuthedUser));
    //console.log(unAnsweredQuestions);
    const answeredQuestions = allQuestionAnswer.filter(data => data.optionOne.votes.includes(setAuthedUser) || data.optionTwo.votes.includes(setAuthedUser));
    //console.log(answeredQuestions);
    const unAnsweredData = unAnsweredQuestions.filter(data => data.id === id);
    const unAnsweredView = unAnsweredData[0];
    console.log(unAnsweredData[0]);
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
    const votePercentOptionTwo =
        Math.round((voteCountOptionTwo / totalVotes) * 10000) / 100;
    return (
        <React.Fragment>
            {answeredData.length === 1 ?
                (
                    <div class="card w-25 my-3 mx-auto">
                        <div class="view overlay">
                            <img class="card-img-top" src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg"
                                alt="Card image cap" />
                        </div>
                        <div class="card-body">
                            <h4 class="card-title">{answeredView.author}</h4>
                            <div class='mb-2'>
                                <div class="custom-control custom-radio">
                                    <input type="radio" class="custom-control-input" name='answerOption1' id="defaultGroupExample1" />
                                    <label class="custom-control-label" htmlFor="defaultGroupExample1">{answeredView.optionOne.text}</label>
                                </div>
                                <div class="custom-control custom-radio">
                                    <input type="radio" class="custom-control-input" name='answerOption2' id="defaultGroupExample2" />
                                    <label class="custom-control-label" htmlFor="defaultGroupExample2">{answeredView.optionTwo.text}</label>
                                </div>
                            </div>
                        </div>
                    </div>
                )
                : (<div class="card w-25 my-3 mx-auto">
                    <div class="view overlay">
                        <img class="card-img-top" src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg"
                            alt="Card image cap" />
                    </div>
                    <div class="card-body">
                        <h4 class="card-title">{unAnsweredView.author}</h4>
                        <div class='mb-2'>
                            <div class="custom-control custom-radio">
                                <input type="radio" class="custom-control-input" checked={votedForOption === "optionOne"} name='optionOne' value="optionOne" id="defaultGroupExample1" onChange={handleChange} />
                                <label class="custom-control-label" htmlFor="defaultGroupExample1">{unAnsweredView.optionOne.text}</label>
                            </div>
                            <div class="custom-control custom-radio">
                                <input type="radio" class="custom-control-input" checked={votedForOption === "optionTwo"}  name='optionTwo' value="optionTwo" id="defaultGroupExample2" onChange={handleChange} />
                                <label class="custom-control-label" htmlFor="defaultGroupExample2">{unAnsweredView.optionTwo.text}</label>
                            </div>
                        </div>
                        <div onClick={handleClick}  className="btn btn-primary">Submit Your Opinion</div>
                    </div>
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