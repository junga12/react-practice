import { useState } from 'react';
import './App.css';

function Header() {
  return <header>
    <h1>
      <a href="/">WEB</a>
    </h1>
  </header>
}

function Nav(props) {
  const getTitles = () => {
    const result = [];

    for (let i = 0; i < props.contents.length; i++) {
      result.push(
      <li>
        <a id = {props.contents[i].id} href={"/read/"+props.contents[i].id} onClick={event=>{
          event.preventDefault();
          props.setSelectedID(props.contents[i].id);
        }}>{props.contents[i].title}</a>
      </li>
      );
    }

    return result;
  }

  return <nav>
    <ol>
      {getTitles()}
    </ol>
  </nav>
}

function Article(props) {
  return <article>
    <h2>{props.title}</h2>
    {props.body}
  </article>
}

function App() {
  const [selectedID, setSelectedID] = useState(null);

  const contents = [
    {"id":1, "title":"html", body:"html is ..."},
    {"id":2, "title":"css", body:"css is ..."},
    {"id":3, "title":"javascript", body:"javascript is ..."}
  ]
  
  return (
    <div>
      <Header></Header>
      <Nav contents={contents} setSelectedID={setSelectedID}></Nav>
      <Article title="title" body="body"></Article>
      <ul>
        <li><a href='/create'>Create</a></li>
        <li><a href='/update'>Update</a></li>
        <li>Delete</li>
      </ul>
    </div>
  );
}

export default App;
