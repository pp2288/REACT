import React from 'react';
import PropTypes from "prop-types";
import MessageField from './MessageField';
import ChatList from './ChatList';
import Header from './Header';
import '../styles/styles.css';

export default class Layout extends React.Component {
	static propTypes = {
       chatId: PropTypes.number,
   };

   static defaultProps = {
       chatId: 1,
   };

    render() {
        return (
            <div className="layout">
                <Header />
                <div className="layout-area">
                    <div className="leftarea">
                        <ChatList />
                    </div>
                    <div className="rightarea">
                        <MessageField chatId={ this.props.chatId } />
                    </div>
                 </div>
			</div>
        )
    }
}