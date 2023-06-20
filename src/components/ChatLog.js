import React from 'react';
import './ChatLog.css';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
    const logComponents = props.entries.map((entry) => {
        return (
            <div key={entry.id}>
                <ChatEntry 
                    id={entry.id} 
                    sender={entry.sender} 
                    body={entry.body} 
                    timeStamp={entry.timeStamp}
                />
            </div>
        );
    });
    return (
        <div className="chat-log">{logComponents}</div>
    );
};

ChatLog.propTypes = {
    entries:PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        sender: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
        timeStamp: PropTypes.string.isRequired,
    }))
}

export default ChatLog;