import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

class Footer extends Component {
    render() {
        return (
            <React.Fragment>
                <footer className="bg-info font-small fixed-bottom ">
                    <div className="float-right mr-3 py-3">© {(new Date().getFullYear())} Copyright:
                        <span> Vikash Chander</span>
                    </div>
                </footer>
            </React.Fragment>
        )
    }
}

export default Footer;