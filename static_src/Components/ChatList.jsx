import React from 'react';
import {bindActionCreators} from "redux";
import connect from "react-redux/es/connect/connect";
import { Link } from 'react-router-dom'
import { push } from 'connected-react-router';
import { List, ListItem } from 'material-ui/List';
import { TextField } from 'material-ui';
import AddIcon from 'material-ui/svg-icons/content/add';
import PropTypes from "prop-types";
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import { addChat } from '../actions/chatActions';


class ChatList extends React.Component {
   static propTypes = {
       chats: PropTypes.object.isRequired,
       addChat: PropTypes.func.isRequired,
	   push: PropTypes.func.isRequired,
   };

   state = {
       input: '',
   };

   handleChange = (event) => {
       this.setState({ [event.target.name]: event.target.value });
   };

   handleKeyUp = (event) => {
       if (event.keyCode === 13) { // Enter
           this.handleAddChat();
       }
   };

   handleAddChat = () => {
       if (this.state.input.length > 0) {
           this.props.addChat(this.state.input);
           this.setState({ input: '' });
       }
   };

   handleNavigate = (link) => {
       this.props.push(link);
   };
   
   render() {
       const { chats } = this.props;
       const chatElements = Object.keys(chats).map(chatId => (
               <ListItem
                   key={ chatId }
                   primaryText={ chats[chatId].title }
                   leftIcon={ <KeyboardArrowRightIcon /> }
                   onClick={ () => this.handleNavigate(`/chat/${chatId}`) }
               />));


       return (
           <List>
               { chatElements }
               <ListItem
                   key="Add new chat"
                   leftIcon={ <AddIcon /> }
                   onClick={ this.handleAddChat }
                   style={ { height: '60px' } }
                   children= {<TextField
                       key="textField"
                       fullWidth
                       name="input"
                       hintText="добавить"
                       onChange={ this.handleChange }
                       value={ this.state.input }
                       onKeyUp={ this.handleKeyUp }
                   />}
               />
           </List>
       )
   }
}

const mapStateToProps = ({ chatReducer }) => ({
   chats: chatReducer.chats,
});

const mapDispatchToProps = dispatch => bindActionCreators({ addChat, push }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ChatList);