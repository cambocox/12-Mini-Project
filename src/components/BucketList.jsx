import { useState } from 'react';
import BucketForm from './BucketForm';
import Bucket from './Bucket';

function BucketList() {
  const [bucket, setBucket] = useState([]);

  // Function to add a bucket list item
  const addBucketItem = (item) => {
    // Add the new item to the current list of bucket items
    const newBucket = [item, ...bucket];
    setBucket(newBucket);
  };

  // Function to mark a bucket list item as complete
  const completeBucketItem = (id) => {
    let updatedBucket = bucket.map((item) => {
      // Toggle the completion status if the ID matches
      if (item.id === id) {
        item.isComplete = !item.isComplete;
      }
      return item;
    });
    setBucket(updatedBucket);
  };

  // Function to remove a bucket list item and update state
  const removeBucketItem = (id) => {
    // Filter out the item that matches the given ID
    const updatedBucket = bucket.filter((item) => item.id !== id);
    setBucket(updatedBucket);
  };

  // Function to edit the bucket list item
  const editBucketItem = (itemId, newValue) => {
    // Make sure that the value isn't empty
    if (!newValue.value) {
      return;
    }

    // Update the item in the list if the ID matches
    setBucket((prev) =>
      prev.map((item) => (item.id === itemId ? newValue : item))
    );
  };

  return (
    <div>
      <h1>What is on your bucket list?</h1>
      <BucketForm onSubmit={addBucketItem} />
      <Bucket
        bucket={bucket}
        completeBucketItem={completeBucketItem}
        removeBucketItem={removeBucketItem}
        editBucketItem={editBucketItem}
      />
    </div>
  );
}

export default BucketList;
