import React from 'react';
import MessageField from './MessageField';
import ChatList from './ChatList';
import Header from './Header';
import '../styles/styles.css';

export default class Layout extends React.Component {

    render() {
        return (
            <div className="layout">
                <Header />
                <div className="layout-area">
                    <div className="leftarea">
                        <ChatList />
                    </div>
                    <div className="rightarea">
                        <MessageField />
                    </div>
                 </div>
			</div>
        )
    }
}