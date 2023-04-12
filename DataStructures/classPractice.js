class Student {
    constructor(firstName, lastName, year) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.year = year;
        this.tardies = 0;
        this.scores = [];
    }

    addScore(score) {
        this.score.push(score);
        return this.scores;
    }

    markLate() {
        this.tardies += 1;
        if (this.tardies > 3) console.log('EXPELLED!')
    }

    static EnrollStudents(student) {
        console.log(student);
    }
}


const kolt = new Student("Kolt", "Man", 4)

kolt.markLate()
kolt.markLate()
kolt.markLate()
kolt.markLate()
Student.EnrollStudents()
