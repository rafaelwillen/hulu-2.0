import Thumbnail from "./Thumbnail";

function Results({ results }) {
  return (
    <section>
      {results.map((result) => (
        <Thumbnail key={result.id} result={result} />
      ))}
    </section>
  );
}

export default Results;
