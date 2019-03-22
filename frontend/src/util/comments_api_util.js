export const fetchComments = (id) => fetch(
  `http://localhost:3001/posts/${ id }/comments`,
  { 
    headers: { 
      'Authorization': '8675309' 
    } 
  }
)
export const addComment = (data) => {
  return fetch(
    "http://localhost:3001/comments",
    {
      headers: { 
        'Authorization': '8675309', 
        'Content-Type': 'application/json' 
      }, 
      method: "POST",
      body: JSON.stringify(data)
    }
  )
  .then(res => res.json())
  .then(data => data)
}
export const updateCommentVote = (id, option) => {
  return fetch(
    `http://localhost:3001/comments/${ id }`,
    {
      headers: { 
        'Authorization': '8675309', 
        'Content-Type': 'application/json' 
      }, 
      method: "POST",
      body: JSON.stringify(option)
    }
  )
  .then(res => res.json())
  .then(data => data)
}
export const updateComment = (data) => {
  return fetch(
    `http://localhost:3001/comments/${ data.id }`,
    {
      headers: { 
        'Authorization': '8675309', 
        'Content-Type': 'application/json' 
      }, 
      method: "PUT",
      body: JSON.stringify(data)
    }
  )
}
export const deleteComment = (data) => {
  return fetch(
    `http://localhost:3001/comments/${ data.id }`,
    {
      headers: { 
        'Authorization': '8675309', 
        'Content-Type': 'application/json' 
      },
      method: "DELETE"
    }
  )
}
