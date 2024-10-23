import { useState } from 'react';
import BucketForm from './BucketForm';

function Bucket(props) {
  const [edit, setEdit] = useState({
    id: null,
    value: '',
    eagerness: '',
  });

  console.log(props.bucket);

  const submitUpdate = (value) => {
    // Call the editBucketItem prop with the updated values
    props.editBucketItem(edit.id, value);
    // Reset the edit state to clear the form
    setEdit({
      id: null,
      value: '',
      eagerness: '',
    });
  };

  // If the user is attempting to edit an item, render the bucket form with the edit variable passed as a prop
  if (edit.id) {
    return <BucketForm edit={edit} onSubmit={submitUpdate} />;
  }

  return props.bucket.map((item, index) => (
    // Add a className based on the item's completion status and eagerness level
    <div
      className={`bucket-row ${item.isComplete ? 'complete' : ''} ${item.eagerness}`}
      key={index}
    >
      {/* Click handler to mark the item as complete */}
      <div key={item.id} onClick={() => props.completeBucketItem(item.id)}>
        {item.value}
      </div>
      <div className="icons">
        {/* Click handler to edit the item */}
        <p
          onClick={() =>
            setEdit({ id: item.id, value: item.value, eagerness: item.eagerness })
          }
        >
          ✏️
        </p>
        {/* Click handler to delete the item */}
        <p onClick={() => props.removeBucketItem(item.id)}> 🗑️</p>
      </div>
    </div>
  ));
}

export default Bucket;
