import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

const EditNotePage = ({ updateNote }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [category, setCategory] = useState("");

  const { slug } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/notes/${slug}`)
      .then((res) => {
        console.log(res.data);
        setTitle(res.data.title);
        setBody(res.data.body);
        setCategory(res.data.category);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [slug]);

  const updateNoteObject = {
    title: title,
    body: body,
    category: category,
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(updateNote);
    console.log(updateNoteObject);
    if (!title && !body && !category) return;
    updateNote(updateNoteObject, slug);
    navigate(`/note/${slug}`);
  };

  return (
    <div className="flex justify-center">
      <form action="" onSubmit={submitHandler}>
        <h1 className="text-2xl font-bold">Edit Note</h1>
        <div className="bg-base-100 w-[600px] shadow-xl">
          <div className="card-body flex justify-start">
            <label htmlFor="" className="flex justify-start">
              Title
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <label htmlFor="" className="flex justify-start">
              Content
            </label>
            <textarea
              className="textarea textarea-bordered"
              placeholder="Description"
              value={body}
              onChange={(e) => setBody(e.target.value)}
            ></textarea>
            <label htmlFor="" className="flex justify-start">
              Notes Category
            </label>
            <select
              className="select select-bordered w-full"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option>Pick a category</option>
              <option value="PERSONAL">Personal</option>
              <option value="BUSINESS">Business</option>
              <option value="IMPORTANT">Important</option>
            </select>
            <div>
              <button className="btn btn-primary w-full" type="submit">
                Update Note
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditNotePage;
