import Filter from "../components/Filter";
import NotesCardContainer from "../components/NotesCardContainer";

const HomePage = ({notes, loading}) => {
  return (
    <>
      <Filter />
      <NotesCardContainer notes={notes} loading={loading}/>
    </>
  );
};

export default HomePage;
