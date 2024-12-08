import { FaNoteSticky } from "react-icons/fa6";
import { MdMarkunread } from "react-icons/md";
import { Link } from "react-router";

// eslint-disable-next-line react/prop-types
const NotesCard = ({ note }) => {
  const body = `${note.body.split(" ").slice(0, 20).join(" ")}...`;
  const color =
    note.category == "PERSONAL"
      ? "green"
      : note.category == "IMPORTANT"
      ? "red"
      : "purple";
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-xl m-1 card-bordered">
        <div className="card-body">
          <div className="flex flex-row justify-between items-center">
            <Link to={`/note/${note.slug}`}>
              <h2 className="card-title">{note.title}</h2>
            </Link>
            <div>
              <FaNoteSticky style={{ color: color }} />
            </div>
          </div>
          <span>
            <p className="text-justify">{note.updated}</p>
          </span>
          <p className="text-justify">{body}</p>
          <div className="card-actions justify-start items-center">
            <MdMarkunread style={{ color: color }} /> <h3>{note.category}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotesCard;
