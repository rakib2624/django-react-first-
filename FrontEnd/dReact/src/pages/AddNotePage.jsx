import { useState } from "react";
import { useNavigate } from "react-router";

const AddNotePage = ({ addNote }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [category, setCategory] = useState("");

  const navigate = useNavigate();

  const newNote = {
    title: title,
    body: body,
    category: category,
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (title && body && category) {
      addNote(newNote);
      navigate("/");
    }
    return;
  };

  return (
    <div className="flex justify-center">
      <form action="" onSubmit={submitHandler}>
        <h1 className="text-2xl font-bold">Add New Note</h1>
        <div className="bg-base-100 w-[500px] shadow-xl">
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
              <option selected>Pick a category</option>
              <option value="PERSONAL">Personal</option>
              <option value="BUSINESS">Business</option>
              <option value="IMPORTANT">Important</option>
            </select>
            <div>
              <button className="btn btn-primary w-full" type="submit">
                Add Note
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddNotePage;
