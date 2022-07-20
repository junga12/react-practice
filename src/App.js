import React, { useState } from 'react';
import './App.css';
import Header from './components/Header'
import Nav from './components/Nav'
import Article  from './components/Article';
import Controller from './components/Controller';
import { ControllerType } from './components/Controller';

function getArticleContent(contents, selectedID, selectedController) {
  let title = "Welcome"
  let body = "Hello, WEB"

  if (selectedController != null) {
    title = selectedController

    switch (selectedController) {
      case ControllerType.CREATE:
        body = "ccc"
        break;
      case ControllerType.UPDATE:
        body = "uuu"
        break;
      default:
        break;
    }
  } else if (selectedID != null) {
    title = contents[selectedID - 1].title
    body = contents[selectedID - 1].body
  } else {
    title = "Welcome"
    body = "Hello, WEB"
  }

  return [title, body]
}

function App() {
  const contents = [
    { "id": 1, "title": "html", body: "html is ..." },
    { "id": 2, "title": "css", body: "css is ..." },
    { "id": 3, "title": "javascript", body: "javascript is ..." }
  ]

  const [selectedID, setSelectedID] = useState(null);
  const [selectedController, setSelectedController] = useState(null);

  let _selectedContent = getArticleContent(contents, selectedID, selectedController)
  let title = _selectedContent[0]
  let body = _selectedContent[1]

  return (
    <div>
      <Header setSelectedID={setSelectedID} setSelectedController={setSelectedController}></Header>
      <Nav contents={contents} setSelectedID={setSelectedID} setSelectedController={setSelectedController}></Nav>
      <Article title={title} body={body}></Article>
      <Controller selectedID={selectedID} setSelectedController={setSelectedController}></Controller>
    </div>
  );
}

export default App;
