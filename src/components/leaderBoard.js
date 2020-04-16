import React, { Component } from 'react';
import { connect } from "react-redux";

class LeaderBoard extends React.Component {
    render() {
        const { user } = this.props;
        console.log(user)
        const userScore = Object.keys(user);
        const usersWithScore = {};
        userScore.map(data => {
            const userData = user[data];
            console.log(userData);
            const answeredQuestions = Object.keys(userData.answers).length;
            const createdQuestions = userData.questions.length;
            userData.score = answeredQuestions + createdQuestions;
            userData.userAnswers = Object.keys(userData.answers).length;;
            usersWithScore[data] = userData;
        })
        console.log(usersWithScore);
        const userWithSortedScore = {};
        Object.keys(user)
            .map(uid => user[uid])
            .sort((a, b) => b.score - a.score)
            .forEach(data => {
                userWithSortedScore[data.id] = data;
            });
        console.log(userWithSortedScore);
        const allLeaderCards = Object.values(userWithSortedScore)
        console.log(allLeaderCards);

        return (
            <React.Fragment>
                <div className='container mx-auto row mb-5'>
                {allLeaderCards.map(data => (
                    <div className="card data m-3 col-md-6" key={data.id}>
                        <div className="mx-auto">
                            <img className="w-50 rounded-circle ml-5 my-3" src={data.avatarURL}
                                alt="Card image cap" />
                        </div>
                        <div className="card-body my-2">
                            <h4 className="card-title">{data.name}</h4>
                            <h6 className='text-info'>Answers: {data.userAnswers}</h6>
                            <h6 className='text-primary' >Questions: {data.questions.length}</h6>
                            <h6 className='text-success'>Score: {data.score}</h6>
                        </div>
                    </div>
                ))}
                </div>
            </React.Fragment >
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.allUsers,
        question: state.loadQuestion
    }
}

export default connect(mapStateToProps)(LeaderBoard);
