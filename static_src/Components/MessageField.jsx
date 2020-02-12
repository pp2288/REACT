import React from 'react';
<<<<<<< HEAD
import { TextField, FloatingActionButton } from 'material-ui';
import SendIcon from 'material-ui/svg-icons/content/send';
import NearMeIcon from '@material-ui/icons/NearMe';
=======
import PropTypes from "prop-types";
import { TextField, FloatingActionButton } from 'material-ui';
import SendIcon from 'material-ui/svg-icons/content/send';
import NearMeIcon from '@material-ui/icons/NearMe';
import Header from './Header';
>>>>>>> master
import Message from './Message.jsx';
import '../styles/styles.css';

export default class MessageField extends React.Component {
   static propTypes = {
       chatId: PropTypes.number.isRequired,
   };

   state = {
<<<<<<< HEAD
       messages: [{ text: "Привет!", sender: 'bot' }, { text: "Как дела?", sender: 'bot' }],
       imput: '',  
=======
       chats: {
           1: {title: 'Чат 1', messageList: [1]},
           2: {title: 'Чат 2', messageList: [2]},
           3: {title: 'Чат 3', messageList: []},
       },
       messages: {
           1: { text: "Привет!", sender: 'bot' },
           2: { text: "Здравствуйте!", sender: 'bot' },
       },
       input: '',
>>>>>>> master
   };

   componentDidUpdate(prevProps, prevState) {
       const { messages } = this.state;
       if (Object.keys(prevState.messages).length < Object.keys(messages).length &&
           Object.values(messages)[Object.values(messages).length - 1].sender === 'me') {
           setTimeout(() =>
<<<<<<< HEAD
                   this.setState({
                       messages: [ ...this.state.messages, {text: 'Не приставай ко мне, я робот !', sender: 'bot'} ] }), 1000);
       }
   }

   handleClick = () => {
	   const { input } = this.state;
       this.setState({ 
	         messages: [ ...this.state.messages, {text: input, sender: 'me'}],
             input: '', 
	    });
	   
   };
   
   handleChange = (event) => {
   this.setState({ [event.target.name]: event.target.value });
=======
               this.handleSendMessage('Не приставай ко мне, я робот!', 'bot'), 1000);
       }
   }

   handleSendMessage = (message, sender) => {
       const { messages, chats, input } = this.state;
       const { chatId } = this.props;

       if (input.length > 0 || sender === 'bot') {
           const messageId = Object.keys(messages).length + 1;
           this.setState({
               messages: {...messages,
                   [messageId]: {text: message, sender: sender}},
               chats: {...chats,
                   [chatId]: { ...chats[chatId],
                       messageList: [...chats[chatId]['messageList'], messageId]
                   }
               },
           })
       }
       if (sender === 'me') {
           this.setState({ input: '' })
       }
   };

   handleChange = (event) => {
       this.setState({ [event.target.name]: event.target.value });
   };

   handleKeyUp = (event) => {
       if (event.keyCode === 13) { // Enter
           this.handleSendMessage(this.state.input, 'me')
       }
>>>>>>> master
   };

   handleKeyUp = (event) => {
   if (event.keyCode === 13) {
       this.handleClick();
   }
   };
   render() {
       const { messages, chats } = this.state;
       const { chatId } = this.props;

       const messageElements = chats[chatId].messageList.map((messageId, index) => (
           <Message
               key={ index }
               text={ messages[messageId].text }
               sender={ messages[messageId].sender }
           />));

       return [
<<<<<<< HEAD
	   <div className="message-field">
		   { messageElements }
       </div>,
	   <div style={ { width: '100%', display: 'flex' } }>
             <TextField
                   name="input"
                   fullWidth={ true }
                   hintText="Введите сообщение"
                   style={ { fontSize: '15px' } }
                   onChange={ this.handleChange }
                   value={ this.state.input }
                   onKeyUp={ (event) => this.handleKeyUp(event, this.state.input) }
              />
             <FloatingActionButton style={ { backgroundColor:'#2e8b57' } } onClick={ () => this.handleClick(this.state.input) }>                   				   
                   <NearMeIcon />
              </FloatingActionButton>
          </div>
      ]
=======
           <div key='messageElements' className="message-field">
               { messageElements }
           </div>,
           <div key='textInput' style={ { width: '100%', display: 'flex' } }>
               <TextField
                   name="input"
                   fullWidth={ true }
                   hintText="Введите сообщение"
                   style={ { fontSize: '22px' } }
                   onChange={ this.handleChange }
                   value={ this.state.input }
                   onKeyUp={ this.handleKeyUp }
               />
               <FloatingActionButton
                   onClick={ () => this.handleSendMessage(this.state.input, 'me') }>
                   <SendIcon />
               </FloatingActionButton>
           </div>
       ]
>>>>>>> master
   }
}
