export default function updateStudentGradeByCity(listStudents, city, newGrades) {
	if (!Array.isArray(listStudents) || !Array.isArray(newGrades)) {
    return [];
  }
	return listStudents
    .filter((student) => student.location === city)
    .map((student) => {
      // Find matching grade object for this student
      const gradeObj = newGrades.find((item) => item.studentId === student.id);

      return {
        ...student,
        grade: gradeObj ? gradeObj.grade : 'N/A',
      };
    });
}
