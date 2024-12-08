// import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { Link, useParams } from "react-router";
import { useEffect, useState } from "react";
import Modal from "./Modal";

const NoteDetails = () => {
  const [note, setNote] = useState({});
  const { slug } = useParams();

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/notes/${slug}`)
      .then((res) => res.json())
      .then((data) => {
        setNote(data);
      });
  }, [slug]);

  return (
    <div className="flex justify-center">
      <div className="bg-base-100 w-[600px] shadow-xl border p-5 rounded-md">
        <h1 className="text-3xl font-bold">{note.title}</h1>
        <span className="flex justify-evenly">
          <p>{note.created}</p>
          <p>{note.updated}</p>
        </span>
        <div className="card-body">
          <span className="flex justify-center items-center">
            <Link to={`/edit-note/${slug}/`}>
              <button className="btn btn-success min-w-24 mr-1 text-white" type="submit">
                <FaEdit /> Edit
              </button>
            </Link>
            <button type="submit">
              <Modal />
            </button>
          </span>
        </div>
        <div className="text-justify">{note.body}</div>
      </div>
    </div>
  );
};

export default NoteDetails;
