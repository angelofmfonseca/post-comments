export const fetchCat = () => fetch(
  "http://localhost:3001/categories",
  { headers: { 'Authorization': '8675309' } }
)
