// Create a function to calculate array of student data
function calculateStudentAverages(students) {
    // Assuming each student is an object with a name and an array of grades
    students.forEach(student => {
      // Calculate the average grade for each student
      const total = student.grades.reduce((sum, grade) => sum + grade, 0);
      const average = total / student.grades.length;
      // Add the average grade to the student object
      student.average = average;
    });
  
    return students;
  }
  
  // Example usage:
  const studentData = [
    { name: 'Alice', grades: [90, 95, 100] },
    { name: 'Bob', grades: [80, 85, 86] },
    { name: 'Charlie', grades: [70, 75, 73] }
  ];
  
  const studentsWithAverages = calculateStudentAverages(studentData);
  console.log(studentsWithAverages);
