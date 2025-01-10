import React from 'react';
    import StudentForm from './components/StudentForm';

    function StudentManagement() {
      return (
        <div>
          <h1>Student Management</h1>
          <StudentForm /> {/* Include the StudentForm component */}
        </div>
      );
    }

    export default StudentManagement;
