import React from 'react';

function sendDataToPython(data) {
    fetch('http://localhost:5000/api/data', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(result => {
        console.log('Result from Python:', result);
        // Process the result as needed
    })
    .catch(error => {
        console.error('Error sending data to Python:', error);
    });
}


const MessageParser = ({ children, actions }) => {
    // console.log(children.props.state)
    const { checker } = children.props.state;
    const parse = (message) => {
        console.log(message)
        // const dataToSend = { key: message };
        sendDataToPython(message);
        if (checker === "age") {
            actions.afterNameMessage();
            children.props.state.userData.name = message;
        }

        if (checker === "preference" && Number(message)) {
            actions.afterAgeMessage();
            children.props.state.userData.age = message;
            if (message <= 10) {
                children.props.state.userData.category = "kid";
            } else if (message > 10 && message <= 20) {
                children.props.state.userData.category = "teenagers";
            } else {
                children.props.state.userData.category = "adults";
            }
        }
    }
    return (
        <div>
            {React.Children.map(children, (child) => {
                return React.cloneElement(child, {
                    parse: parse,
                    actions,
                });
            })}
        </div>
    );
};

export default MessageParser;
