import { useEffect, useState } from "react";
import { AuthorsList } from "./components/AuthorsList";
import { AddAuthor } from "./components/AddAuthor";
import './style.css';

const API_URL = "http://127.0.0.1:8000";

function App() {
  const [authors, setAuthors] = useState([]);

  const onDeleteAuthorClickHandler = (authorId) => {
    fetch(`${API_URL}/authors/${authorId}`, {
      method: "DELETE",
    }).then((res) => {
      if (res.status === 200) {
        setAuthors((prevAuthors) =>
          prevAuthors.filter((author) => author.id !== authorId)
        );
      }
    });
  };

  const onAddAuthorSubmitHandler = (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    const surname = event.target.surname.value;
   

    fetch(`${API_URL}/authors`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        surname,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.id) {
          setAuthors((prevAuthors) => [...prevAuthors, data]);
        }
      });
  };

  useEffect(() => {
    fetch(`${API_URL}/authors`)
      .then((res) => res.json())
      .then((data) => setAuthors(data));
  }, []);

  return (
    <>
      <h1>Authors</h1>
      <AddAuthor onAdd={onAddAuthorSubmitHandler} />
      <AuthorsList authors={authors} onDelete={onDeleteAuthorClickHandler} />
    </>
  );
}

export default App;