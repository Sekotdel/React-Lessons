import React, { useState, useEffect, useRef } from 'react';
import { Box, Button, List } from '@material-ui/core';
import './App.css';
import TextField from '@material-ui/core/TextField';
// import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MuiLayout from './component/MuiLayout.jsx';



function App() {

  const [messageList, setMessageList] = useState([])
  const [messageBody, setMessageBody] = useState({
    text: '',
    name: '',
    id: Date.now()
  })

  const ROBOT_MESSAGE = 'Message has been received'
  console.log(messageBody)

  useEffect(() => {
    if (messageList.length > 0 && messageList.slice(-1)[0].author !== 'robot') {
      setTimeout(() => {
        setMessageList(pervstate => [...pervstate, { text: ROBOT_MESSAGE, author: 'robot' }])
      }, 1000)
    }
  },
    [messageList])

  return (
    <div className='App'>
      <MuiLayout/>
      <Form data={messageBody} setData={setMessageBody} setMessage={setMessageList}></Form>
      <div className='messageList'>
        {
          messageList.map((e, i) => <Message text={e.text} author={e.author} key={i} />)
        }
      </div>
    </div>

  );
}


export default App;
const styleField = { marginTop: 20, marginBottom: 20, display: 'block' }
const Form = ({ data, setData, setMessage }) => {
  const { text, author } = data

  const inputRef = React.useRef(null)
  React.useEffect(() => {
    inputRef.current?.focus()
  }, [setMessage])

  const submitForm = (e) => {
    e.preventDefault()
    if (text.length > 0) {
      setMessage(pervstate => [...pervstate, { text, author }])
    }
    setData(
      {
        text: '',
        author: ''
      }
    )
  }




  return (
    <form noValidate autoComplete="off" onSubmit={submitForm}>
      <TextField
        inputRef={inputRef} autoFocus={true}
        onChange={(e) => setData(pervstate => ({ ...pervstate, text: e.target.value }))}
        style={styleField}
        id="standart-basic"
        label="Имя"
        fullWidth

      />

      <TextField
        onChange={(e) => setData(pervstate => ({ ...pervstate, author: e.target.value }))}
        style={styleField}
        id="standart-basic"
        label='Текст'
        fullWidth
        value={author}
        autoFocus
      />

      <Button
        variant="contained"
        color="primary"
        type='submit'
      >send
      </Button>
    </form>

  );
};

const Message = ({ author, text }) => {

  return (
    <div>
      <hr />
      <h1>{author}</h1>
      <p>{text}</p>
      <hr />
    </div>
  )
}


