import React from 'react';
import ReactDOM from 'react-dom';

/*
const element = React.createElement(
   'h1',
   { className: "element" },
   'Кажется, мы подключили React',
);
*/

//const element = <h1 className="element">Кажется, я подключила React</h1>;

//const content = 'Кажется, мы подключили React';

//const Component = (props) => <h1 className="element">{props.content}</h1>;
/*
ReactDOM.render(
   <Component content={ content } />,
   document.getElementById('root'),
);
*/



const messages = ['Привет', 'Как дела?'];

const MessageComponent = (props) => <div>{props.text}</div>;

const MessageField = (props) => {
  return props.messages.map((message, index) => <MessageComponent key={ index } text={ message }/>);
};

const SendMessageButton = (props) => {
  return <button onClick = { () => { pushMessage(props.messages) }}>{props.text}</button>;
};

const pushMessage = (messages) => {
  messages.push('Нормально');
  render();
};

function render() {
  ReactDOM.render(
    <div>
      <MessageField messages={messages} />
      <SendMessageButton messages = {messages} text={'Сказать, что все нормально:)'}/>
    </div>,
    document.getElementById('root'),
  );
}

render();