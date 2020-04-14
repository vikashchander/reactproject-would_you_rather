import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

class Home extends React.Component {
    render() {
        const { question, users, setAuthedUser } = this.props;
        console.log(this.props);
        const allQuestionAnswer = Object.values(question);
        //console.log(allQuestionAnswer);
        const unAnsweredQuestions = allQuestionAnswer.filter(data => !data.optionOne.votes.includes(setAuthedUser) && !data.optionTwo.votes.includes(setAuthedUser));
        //console.log(unAnsweredQuestions);
        const answeredQuestions = allQuestionAnswer.filter(data => data.optionOne.votes.includes(setAuthedUser) || data.optionTwo.votes.includes(setAuthedUser));
        //console.log(answeredQuestions);
        const unAnsweredTab = unAnsweredQuestions.map(data => users[data.author])
        console.log('this page render with new anAnswedtab');
        const answeredTab = answeredQuestions.map(data => users[data.author])

        return (
            <React.Fragment>
                <div className='container w-50 my-3'>
                    <ul class="nav nav-tabs" id="myTab" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home"
                                aria-selected="true">Unanswered Questions</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile"
                                aria-selected="false">Answered Questions</a>
                        </li>
                    </ul>
                    <div class="tab-content" id="myTabContent">
                        <div class="tab-pane fade show active mw-100" id="home" role="tabpanel" aria-labelledby="home-tab">
                            {unAnsweredQuestions.map((data, index) =>
                                < div className="card w-50 my-2" key={data.id} >
                                    <div className="view overlay mr-0">
                                        <img className="" width="200" height="100" src={unAnsweredTab[index].avatarURL}
                                            alt="Card image cap" />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">{unAnsweredTab[index].name}</h5>
                                        <li className="card-text">{data.optionOne.text}</li>
                                        <p className="text-center mb-0 pb-0">OR</p>
                                        <li className="mt-0 card-text">{data.optionTwo.text}</li>
                                        <Link to={`/questions/${data.id}`} className="btn btn-primary">Choose Your Poll</Link>
                                    </div>
                                </div >
                            )}
                        </div>
                        <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                            {answeredQuestions.map((data, index) =>
                                < div className="card w-50 my-2" key={data.id} >
                                    <div className="view overlay mr-0 ">
                                        <img className="card-img-top" width="200" height="100" src={answeredTab[index].avatarURL}
                                            alt="Card image cap" />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">{answeredTab[index].name}</h5>
                                        <li className="card-text">{data.optionOne.text}</li>
                                        <p className="text-center mb-0 pb-0">OR</p>
                                        <li className="mt-0 card-text">{data.optionTwo.text}</li>
                                        <Link to={`/questions/${data.id}`} className="btn btn-primary">View Poll</Link>
                                    </div>
                                </div >
                            )}
                        </div>
                    </div>
                </div>
            </React.Fragment >
        )
    }
}

const mapStateToProps = (state) => {
    return {
        question: state.loadQuestion,
        users: state.allUsers,
        setAuthedUser: state.setAuthedUser
    }
}


export default connect(mapStateToProps)(Home);