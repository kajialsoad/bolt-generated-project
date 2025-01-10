import React, { useState } from 'react';

    function StudentForm() {
      const [name, setName] = useState('');
      const [age, setAge] = useState('');
      const [grade, setGrade] = useState('');

      const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically make a database call to save the student data
        console.log('Student data:', { name, age, grade });
        // Reset the form after submission
        setName('');
        setAge('');
        setGrade('');
      };

      return (
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </label>
          <br />
          <label>
            Age:
            <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
          </label>
          <br />
          <label>
            Grade:
            <input type="text" value={grade} onChange={(e) => setGrade(e.target.value)} />
          </label>
          <br />
          <button type="submit">Add Student</button>
        </form>
      );
    }

    export default StudentForm;
