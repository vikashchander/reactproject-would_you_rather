import React from 'react';
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

function QuestionView(props) {
    let { id } = useParams();
    console.log(id);
    const { question, users, setAuthedUser } = props;
    // // console.log(this.props);
    const allQuestionAnswer = Object.values(question);
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
    console.log(answeredView)
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
                                    <input type="radio" class="custom-control-input" id="defaultGroupExample1" name="groupOfDefaultRadios" />
                                    <label class="custom-control-label" htmlFor="defaultGroupExample1">{answeredView.optionOne.text}</label>
                                </div>
                                <div class="custom-control custom-radio">
                                    <input type="radio" class="custom-control-input" id="defaultGroupExample2" name="groupOfDefaultRadios" />
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
                                <input type="radio" class="custom-control-input" id="defaultGroupExample1" name="groupOfDefaultRadios" />
                                <label class="custom-control-label" htmlFor="defaultGroupExample1">{unAnsweredView.optionOne.text}</label>
                            </div>
                            <div class="custom-control custom-radio">
                                <input type="radio" class="custom-control-input" id="defaultGroupExample2" name="groupOfDefaultRadios" />
                                <label class="custom-control-label" htmlFor="defaultGroupExample2">{unAnsweredView.optionTwo.text}</label>
                            </div>
                        </div>
                        <a href="#" class="btn btn-primary">Submit Your Opinion</a>
                    </div>
                </div>)}
        </React.Fragment>
    )
}

const mapStateToProps = (state) => {
    return {
        users: state.allUsers,
        question: state.loadQuestion,
        setAuthedUser: state.setAuthedUser
    }
}

export default connect(mapStateToProps)(QuestionView);