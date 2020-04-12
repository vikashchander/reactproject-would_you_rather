import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

class Home extends React.Component {

    render() {
        const { question, users, setAuthedUser } = this.props;
        console.log({ ...question });
        const allUsers = Object.values(users);
        const allQuestionAnswer = Object.values(question);
        console.log(allQuestionAnswer);
        console.log(allUsers);

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
                        <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                            {/* {mainData.map(data =>
                                <div class="card w-50 my-2">
                                    <div class="view overlay">
                                        <img class="card-img-top" src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg"
                                            alt="Card image cap" />
                                    </div>
                                    <div class="card-body">
                                        <h4 class="card-title">{data.users}</h4>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                                   content.</p>
                                        <a href="#" class="btn btn-primary">View Poll</a>
                                    </div>
                                </div>
                            )} */}
                        </div>
                        <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                            <div class="card w-50 my-2">
                                <div class="view overlay">
                                    <img class="card-img-top" src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg"
                                        alt="Card image cap" />
                                </div>
                                <div class="card-body">
                                    <h4 class="card-title">Card title</h4>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                        content.</p>
                                    <a href="#" class="btn btn-primary">View Poll</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        question: state.loadQuestion,
        users: state.allUsers,
        setAuthedUser: state.setAuthedUser,
    }
}


export default connect(mapStateToProps)(Home);