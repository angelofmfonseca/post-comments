export const fetchPosts = () => fetch(
  "http://localhost:3001/posts",
  { 
    headers: { 
      'Authorization': '8675309' 
    }
  }
)
export const fetchPost = (id) => fetch(
  `http://localhost:3001/posts/${ id }`,
  { headers: { 
    'Authorization': '8675309' 
    }
  }
)
export const addPost = (data) => {
  return fetch(
    "http://localhost:3001/posts",
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
export const updatePost = (data) => {
  return fetch(
    `http://localhost:3001/posts/${ data.id }`,
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
export const updatePostVote = (id, option) => {
  return fetch(
    `http://localhost:3001/posts/${ id }`,
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
export const deletePost = (data) => {
  return fetch(
    `http://localhost:3001/posts/${ data.id }`,
    {
      headers: { 
        'Authorization': '8675309', 
        'Content-Type': 'application/json' 
      },
      method: "DELETE"
    }
  )
}
