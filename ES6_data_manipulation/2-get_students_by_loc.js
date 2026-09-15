export default function getStudentsByLocation() {
	if (!Array.isArray(listStudents)) {
    return [];
  }

  return listStudents.filter((student) => student.location === city);
}
