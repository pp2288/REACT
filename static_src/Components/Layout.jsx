import React from 'react';
<<<<<<< HEAD
=======
import PropTypes from "prop-types";
>>>>>>> master
import MessageField from './MessageField';
import ChatList from './ChatList';
import Header from './Header';
import '../styles/styles.css';

export default class Layout extends React.Component {
<<<<<<< HEAD
=======
	static propTypes = {
       chatId: PropTypes.number,
   };

   static defaultProps = {
       chatId: 1,
   };
>>>>>>> master

    render() {
        return (
            <div className="layout">
                <Header />
                <div className="layout-area">
                    <div className="leftarea">
                        <ChatList />
                    </div>
                    <div className="rightarea">
<<<<<<< HEAD
                        <MessageField />
=======
                        <MessageField chatId={ this.props.chatId } />
>>>>>>> master
                    </div>
                 </div>
			</div>
        )
    }
}