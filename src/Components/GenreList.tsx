import useGenre from "../hooks/useGenre";

const GenreList = () => {
  const { genres } = useGenre();
  return (
    <ul>
      {genres.map((genre) => {
        return <li key={genre.id}>{genre.name}</li>;
      })}
    </ul>
  );
};

export default GenreList;
