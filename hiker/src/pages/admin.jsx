import { useState, useEffect } from 'react';

function Admin() {
  const [response, setResponse] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/ecommerce', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        firstName: 'Ganesh',
        lastName: 'Yadav'
      })
    })
    .then(response => response.json())
    .then(data => {
      setResponse(data);
    })
    .catch(error => {
      console.error(error);
    });
  }, []);

  return (
    <div>
      {response ? (
        <div>
          <h2>Response:</h2>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}


export default Admin