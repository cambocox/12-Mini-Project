import { useState } from 'react';

function BucketForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');
  const [eagerness, setEagerness] = useState(props.edit ? props.edit.eagerness : '');

  // Eagerness levels array
  const eagernessLevel = ['Must do', 'Want to do', 'Take it or leave it'];

  const handleSubmit = (e) => {
    e.preventDefault();

    // Default to 'low' if no eagerness is selected
    const selectedEagerness = eagerness || 'low';

    props.onSubmit({
      id: Math.floor(Math.random() * 1000),
      value: input,
      eagerness: selectedEagerness.toLowerCase(),
    });

    setInput('');
    setEagerness('');
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return !props.edit ? (
    <div>
      <form className="bucket-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add to your bucket list"
          value={input}
          name="text"
          className="bucket-input"
          onChange={handleChange}
        ></input>
        <div className="dropdown">
          <button className={`dropbtn ${eagerness}`}>
            {eagerness || 'Priority'}
          </button>
          <div className="dropdown-content">
            {/* Set the eagerness level on click */}
            <p onClick={() => setEagerness('high')}>{eagernessLevel[0]}</p>
            <p onClick={() => setEagerness('medium')}>{eagernessLevel[1]}</p>
            <p onClick={() => setEagerness('low')}>{eagernessLevel[2]}</p>
          </div>
        </div>
        <button className="bucket-button">Add bucket list item</button>
      </form>
    </div>
  ) : (
    <div>
      <h3>Update entry: {props.edit.value}</h3>
      <form className="bucket-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Update your item"
          value={input}
          name="text"
          className="bucket-input"
          onChange={handleChange}
        ></input>
        <div className="dropdown">
          <button className={`dropbtn ${eagerness}`}>
            {eagerness || 'Priority'}
          </button>
          <div className="dropdown-content">
            {/* Set the eagerness level on click */}
            <p onClick={() => setEagerness('high')}>{eagernessLevel[0]}</p>
            <p onClick={() => setEagerness('medium')}>{eagernessLevel[1]}</p>
            <p onClick={() => setEagerness('low')}>{eagernessLevel[2]}</p>
          </div>
        </div>
        <button className="bucket-button">Update</button>
      </form>
    </div>
  );
}

export default BucketForm;
