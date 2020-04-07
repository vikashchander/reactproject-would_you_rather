import React, { Component } from 'react'

class LeaderBoard extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div class="card w-25 mx-auto my-2">
                    <div class="view overlay">
                        <img class="card-img-top" src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg"
                            alt="Card image cap" />
                        <a href="#!">
                            <div class="mask rgba-white-slight"></div>
                        </a>
                    </div>
                    <div class="card-body">
                        <h4 class="card-title">Card title</h4>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                        content.</p>
                        <a href="#" class="btn btn-primary">Button</a>
                    </div>
                </div>
            </React.Fragment >
        )
    }
}

export default LeaderBoard;