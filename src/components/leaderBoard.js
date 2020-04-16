import React from 'react';
import { connect } from "react-redux";

class LeaderBoard extends React.Component {
    render() {
        const { user } = this.props;
        // console.log(user)
        const usersWithScore = {};
          Object.keys(user).forEach((data) =>{
            const userData = user[data];
            const answeredQuestions = Object.keys(userData.answers).length;
            const createdQuestions = userData.questions.length;
            userData.score = answeredQuestions + createdQuestions;
            userData.userAnswers = Object.keys(userData.answers).length;;
            usersWithScore[data] = userData;
         })
        // console.log(usersWithScore);
        const userWithSortedScore = {};
        Object.keys(user)
            .map(uid => user[uid])
            .sort((a, b) => b.score - a.score)
            .forEach(data => {
                userWithSortedScore[data.id] = data;
            });
        // console.log(userWithSortedScore);
        const allLeaderCards = Object.values(userWithSortedScore)
        // console.log(allLeaderCards);

        return (
            <React.Fragment>
                <div className='container mx-auto row mb-5'>
                {allLeaderCards.map((data,index) => (
                    <div className="card data m-3 col-md-6" key={data.id}>
                        <div className="mx-auto">
                            <img className="w-50 rounded-circle ml-5 my-3" src={data.avatarURL}
                                alt="user" />
                        </div>
                        <div className='card-body'>
                        <div className='mx-auto'>
                            <h4 className="card-title mx-1">{data.name}</h4>
                            <h5 className='text-capitalize mx-5'>Rank : <span className='text-primary'>{++index}</span></h5>
                        </div>
                        <div className='d-flex'>
                         <div className="flex-column ml-1 p-2 border-right  border-secondary">
                            <h6 className='text-info'>Answers: {data.userAnswers}</h6>
                            <h6 className='text-primary' >Questions: {data.questions.length}</h6>
                            </div>
                            <div className='flex-column ml-3'>
                                <h6 className='text-success'>Score</h6>
                                <span className="badge badge-info p-3  rounded-circle">{data.score}</span>
                            </div>
                      </div>
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
