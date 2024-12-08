import Loader from "./Loader";
import NotesCard from "./NotesCard";

const NotesCardContainer = ({ notes, loading }) => {
  return (
    <div className="flex flex-wrap">
      {loading && <Loader loading={loading} />}
      {notes.map((note) => (
        <NotesCard key={note.id} note={note} />
      ))}
    </div>
  );
};

export default NotesCardContainer;
