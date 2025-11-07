// Path to resource
const basePath = 'https://jsonplaceholder.typicode.com/todos';

// GET todos/1 => Gets a particular ToDO
fetch(`${basePath}/1`)
  .then((res) => {
    if (!res.ok) throw new Error('Something went wrong');
    return res.json();
  })
  .then((data) => {
    console.info('GET');
    console.log(data);
  })
  .catch(console.error);

// POST todos => Creates a ToDo
fetch(basePath, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    userId: 2,
    title: 'Walk the dog',
    completed: false,
  }),
})
  .then((res) => {
    if (!res.ok) throw new Error('Something went wrong');
    return res.json();
  })
  .then((data) => {
    console.info('POST');
    console.log(data);
  })
  .catch(console.error);

// PUT todos/1 => Updates a particular ToDo
fetch(`${basePath}/1`, {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    userId: 2,
    title: 'New data',
    completed: false,
  }),
})
  .then((res) => {
    if (!res.ok) throw new Error('Something went wrong');
    return res.json();
  })
  .then((data) => {
    console.info('PUT');
    console.log(data);
  })
  .catch(console.error);

// DELETE todos/1 => Deletes a particular ToDo
fetch(`${basePath}/1`, {
  method: 'DELETE',
})
  .then((res) => {
    if (!res.ok) throw new Error('Something went wrong');
    return res.json();
  })
  .then((data) => {
    console.info('DELETE');
    console.log(data);
  })
  .catch(console.error);
