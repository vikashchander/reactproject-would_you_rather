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
                {allLeaderCards.map(data => (
                    <div class="card w-25 mx-auto my-2" key={data.id}>
                        <div class="view overlay">
                            <img class="card-img-top" src={data.avatarURL}
                                alt="Card image cap" />

                        </div>
                        <div class="card-body">
                            <h4 class="card-title">{data.name}</h4>
                            <p class="card-text">answers: {data.userAnswers}</p>
                            <p class="card-text">questions: {data.questions.length}</p>
                            <p class="card-text">score: {data.score}</p>
                        </div>
                    </div>
                ))

                }
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