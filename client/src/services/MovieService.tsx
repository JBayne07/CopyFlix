export const getMovies = async () => {
  const url = "http://localhost:8000/movies";
  const data = await fetch(url, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  return data.json();
};
