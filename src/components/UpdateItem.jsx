import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const UpdateItem = ({ apiUri }) => {
  const [item, setItem] = useState(null);
  const [updatedItem, setUpdatedItem] = useState('');
  const [response, setResponse] = useState(null);

  useEffect(() => {
    // Fetch existing item when component mounts
    fetch(apiUri)
      .then(response => response.json())
      .then(data => setItem(data))
      .catch(error => console.error('Error fetching item:', error));
  }, [apiUri]);

  const handleInputChange = (event) => {
    setUpdatedItem(event.target.value);
  };

  const handleUpdate = () => {
    // Make PUT or PATCH request to update the item
    fetch(apiUri, {
      method: 'PUT', // or 'PATCH'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...item, updatedField: updatedItem }), // Adjust according to your API
    })
      .then(response => response.json())
      .then(data => setResponse(data))
      .catch(error => console.error('Error updating item:', error));
  };

  return (
    <div>
      {item && (
        <div>
          <h2>Existing Item</h2>
          <pre>{JSON.stringify(item, null, 2)}</pre>
        </div>
      )}
      <div>
        <h2>Update Item</h2>
        <input type="text" value={updatedItem} onChange={handleInputChange} />
        <button onClick={handleUpdate}>Update</button>
      </div>
      {response && (
        <div>
          <h2>Response</h2>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

UpdateItem.propTypes = {
  apiUri: PropTypes.string.isRequired,
};

export default UpdateItem;
