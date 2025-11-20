import useGenre from "../hooks/useGenres";

const GenreList = () => {
  const { data } = useGenre();
  return (
    <ul>
      {data.map((genre) => {
        return <li key={genre.id}>{genre.name}</li>;
      })}
    </ul>
  );
};

export default GenreList;
