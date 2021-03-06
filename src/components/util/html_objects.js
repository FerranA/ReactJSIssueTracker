import React from 'react';
import '../../styles/App.css';
import {Link } from 'react-router-dom';

export class Nav extends React.Component {

    render() {
        console.log(this.props.user);
        return (
          <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
              <div className="container">
                  <button className="navbar-toggler navbar-toggler-right border-0 p-0" type="button" data-toggle="collapse" data-target="#navbar14">
                      <p align="center" className="navbar-brand mb-0 text-white">
                          <i className="fa d-inline fa-lg fa-stop-circle" /> ISSUE TRACKER
                      </p>
                  </button>
                  <div className="collapse navbar-collapse" id="navbar14">
                      <ul className="navbar-nav mr-auto">
                          <li className="nav-item"><Link to="/AllIssues"><a class="nav-link">Issues</a></Link> </li>
                      </ul>
                      <p className="d-none d-md-block lead mb-0  text-white">
                          <i className="fa d-inline fa-lg fa-stop-circle" /> <b> ISSUE TRACKER</b>
                      </p>
                      <ul className="navbar-nav ml-auto">
                        <li className="nav-item"> <a className="nav-link">{this.props.user.username}</a> </li>
                        <li className="nav-item"> <img src={this.props.user.avatar_url} style={{height:"36px", borderRadius:"18px", marginRight:"20px"}}/> </li>
                        <li className="nav-item"> <Link to="/logout"><a className="nav-link">Log Out</a></Link></li>
                      </ul>
                  </div>
              </div>
          </nav>
        );
    }
}


export const Footer = function() {
  return (
    <div className="footer" style={{color: 'white', paddingTop: '25px', paddingBottom: '20px'}}>
        <p style={{textAlign: 'center'}}>©2019 Issue Tracker For Student Purposes</p>
    </div>
  );
}

export const Metadata = function() {
    return (
        <div>
            <meta charSet='utf-8'/>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" type="text/css" />
            <link rel="stylesheet" href="https://static.pingendo.com/bootstrap/bootstrap-4.3.1.css" />
        </div>
    );
}