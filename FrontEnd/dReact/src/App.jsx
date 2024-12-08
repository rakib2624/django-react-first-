import { createBrowserRouter, Route, RouterProvider } from "react-router";
import "./App.css";
import { createRoutesFromElements } from "react-router";
import HomePage from "./pages/HomePage";
import MainLayout from "./Layouts/MainLayout";
import AddNotePage from "./pages/AddNotePage";
import NoteDetails from "./pages/NoteDetails";
import EditNotePage from "./pages/EditNotePage";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

function App() {
  const [notes, setNotes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("http://127.0.0.1:8000/notes/")
      .then((res) => res.json())
      .then((data) => {
        setNotes(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const addNote = (data) => {
    fetch("http://127.0.0.1:8000/notes/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        setNotes([...notes, data]);
        toast.success("A new note has been added");
        console.log(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const updateNote = (data, slug) => {
    axios
      .put(`http://127.0.0.1:8000/notes/${slug}`, data)
      .then((res) => {
        console.log(res.data);
        toast.success("Note updates successfully");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage notes={notes} loading={isLoading} />} />
        <Route path="/add-note" element={<AddNotePage addNote={addNote} />} />
        <Route path="/note/:slug" element={<NoteDetails />} />
        <Route
          path="/edit-note/:slug"
          element={<EditNotePage updateNote={updateNote} />}
        />
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
