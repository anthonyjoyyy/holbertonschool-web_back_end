export default function getStudentIdsSum(listStudents) {
	if (!Array.isArray(listStudents)) {
  return 0;
}
return listStudents.reduce((student, sum) => sum + student.id), 0;
}
