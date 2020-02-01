import React from 'react';
import { TextField, FloatingActionButton } from 'material-ui';
import SendIcon from 'material-ui/svg-icons/content/send';
import NearMeIcon from '@material-ui/icons/NearMe';
import Message from './Message.jsx';
import '../styles/styles.css';

export default class MessageField extends React.Component {
   state = {
       messages: [{ text: "Привет!", sender: 'bot' }, { text: "Как дела?", sender: 'bot' }],
       imput: '',  
   };

   componentDidUpdate() {
       if (this.state.messages[this.state.messages.length - 1].sender === 'me') {
           setTimeout(() =>
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
   };

   handleKeyUp = (event) => {
   if (event.keyCode === 13) {
       this.handleClick();
   }
   };
   render() {
       const messageElements = this.state.messages.map((message, index) => (
           <Message key={ index } sender={ message.sender } text={ message.text }/>));

       return [
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
   }
}
