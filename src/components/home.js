import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './home.css';

class Home extends React.Component {
    render() {
        const { question, users, setAuthedUser } = this.props;
        // console.log(this.props);
        const allQuestionAnswer = Object.values(question);
        //console.log(allQuestionAnswer);
        const unAnsweredQuestions = allQuestionAnswer.filter(data => !data.optionOne.votes.includes(setAuthedUser) && !data.optionTwo.votes.includes(setAuthedUser));
        //console.log(unAnsweredQuestions);
        const answeredQuestions = allQuestionAnswer.filter(data => data.optionOne.votes.includes(setAuthedUser) || data.optionTwo.votes.includes(setAuthedUser));
        //console.log(answeredQuestions);
        const unAnsweredTab = unAnsweredQuestions.map(data => users[data.author])
        // console.log('this page render with new anAnswedtab');
        const answeredTab = answeredQuestions.map(data => users[data.author])

        return (
            <React.Fragment>
                <div className='container w-75 my-3'>
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active text-capitalize" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home"
                                aria-selected="true">Unanswered Questions <span className="badge badge-info">{unAnsweredQuestions.length}</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-capitalize" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile"
                                aria-selected="false">Answered Questions <span className="badge badge-info">{answeredQuestions.length}</span></a>
                        </li>
                    </ul>
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active " id="home" role="tabpanel" aria-labelledby="home-tab">
                        <div className='container mx-auto row mb-5'>
                            {unAnsweredQuestions.map((data, index) =>
                              <div className="card data m-2 col-md-6" key={data.id} >
                                  <div className='mx-auto'>
                                  <img className="w-50 rounded-circle ml-5 my-3" src={unAnsweredTab[index].avatarURL} alt="user" />
                                     </div>       
                                    <div className="card-body my-2">
                                        <h5 className="card-title text-capitalize">{unAnsweredTab[index].name}'s ask</h5>
                                         <h6 className="text-capitalize">would you rather</h6>
                                        <li className="card-text text-capitalize">{data.optionOne.text}</li>
                                        <p className="card-text text-center mb-0 pb-0 text-capitalize">or</p>
                                        <li className="mt-0 card-text text-capitalize">{data.optionTwo.text}</li>
                                    </div>
                                    <Link to={`/questions/${data.id}`} className="mb-4 btn btn-info">Choose Your Poll</Link>
                                    </div>
                            )}
                            </div>
                        </div>
                        <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                        <div className='container mx-auto row mb-5'>
                            {answeredQuestions.map((data, index) =>
                                < div className="card data m-2 col-md-6" key={data.id} >
                                    <div className="mx-auto">
                                        <img className="w-50 rounded-circle ml-5 my-3" src={answeredTab[index].avatarURL}
                                            alt="user" />
                                    </div>
                                    <div className="card-body my-2">
                                        <h5 className="card-title">{answeredTab[index].name}</h5>
                                         <h6 className="text-capitalize">would you rather</h6>
                                        <li className="card-text text-capitalize">{data.optionOne.text}</li>
                                        <p className="text-center mb-0 pb-0 text-capitalize">or</p>
                                        <li className="mt-0 card-text text-capitalize">{data.optionTwo.text}</li>
                                    </div>
                                    <Link to={`/questions/${data.id}`} className="mb-4 btn btn-info btn-block">View Poll</Link>
                                </div >
                            )}
                        </div>
                        </div>
                    </div>
                </div>
            </React.Fragment >
        )
    }
}

const sortQuestionsByTimeStamp = questions => {
    const questionsSorted = {};
    Object.keys(questions)
      .map(key => questions[key])
      .sort((a, b) => b.timestamp - a.timestamp)
      .forEach(question => {
        questionsSorted[question.id] = question;
      });
    return questionsSorted;
  };

const mapStateToProps = (state) => {
    return {
        question:sortQuestionsByTimeStamp(state.loadQuestion),
        users: state.allUsers,
        setAuthedUser: state.setAuthedUser
    }
}


export default connect(mapStateToProps)(Home);