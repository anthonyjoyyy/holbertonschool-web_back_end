export default getListStudentIds() {
	if (!Array.isArray(listStudents)) {
  return [];
}
return students.map((student) => student.id);
}
