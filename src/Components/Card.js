import React, {Component} from 'react';
import './Card.css';

class Card extends Component {

    render() {
        return (
            
            <div className="card" id={'card' + this.props.info.id}>
                <Header firstName={this.props.info.firstName} lastName = {this.props.info.lastName} />
                <Body url={this.props.info.imagePath} email = {this.props.info.email} dept = {this.props.info.department}/>
                <Footer details={this.props.details} handleDelete={this.props.handleDelete} studentID={this.props.info.id}/>
            </div>

        );
    }
}

function Header(props) {
    return (
        <div className="card-header">
            {props.firstName + ' ' + props.lastName}
        </div>
    );
}

function Body(props) {
    console.log(props);
    return(
        <div className="card-body">
            <img src={props.url} alt={props.imgAlt} />
            <div className="container">
                <p>Email: {props.email}</p>
                <p>Department: {props.dept}</p>
            </div>
        </div>
    );
}

function Footer(props) {
    return(
        <div className="card-footer">
            <button className="btn btn-danger" onClick={props.handleDelete.bind(this, props.studentID)} >DELETE</button>
        </div>
    );
}

// exposes the Card to other models/files so it can imported and used there
export default Card;