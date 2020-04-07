import React, { Component } from 'react'

class AddQuestion extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div class="card minwidth-300 w-25 mt-3 mx-auto">
                    <img src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <div class="input-group mb-3 d-block">
                            <input type="text" class="form-control p-2 my-2" placeholder="Enter Option first details" aria-label="option-1" aria-describedby="basic-addon1" />
                            <input type="text" class="form-control p-2 my-2" placeholder="Enter Option Second details" aria-label="option-2" aria-describedby="basic-addon1" />
                        </div>

                        <a href="#" class="btn btn-primary">Ask Opinion</a>
                    </div>
                </div>

            </React.Fragment>
        )
    }
}

export default AddQuestion;