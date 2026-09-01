export default class HolbertonCourse {
	constructor(name, length, students) {
		if(typeof name !== 'string') {
			throw new TypeError('Name must be string');
		}

		if (typeof length !== 'number') {
			throw new TypeError('Length must be a number');
		}

		if (!Array.isArray(students) || !students.every((student) => typeof student === 'string')) {
			throw new TypeError('Students must be an array of strings');
		}

		this._name = name;
		this._length = length;
		this._string = string;
	}
  
	get length() {
    return this._length;
  }

  set length(val) {
    if (typeof val !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = val;
  }
