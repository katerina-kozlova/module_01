'use strict';

{
    const filter = (allStud, failedStud) => {
        const newArray = allStud.filter(function (stud) {
            return !failedStud.includes(stud);
        })
        return newArray
    }

    const allStudents = ['Иванов', 'Петров', 'Сидоров', 'Кузнецов', 'Смирнов', 'Попов', 'Соколов'];
    const failedStudents = ['Сидоров', 'Смирнов', 'Попов'];

    console.log('Студенты, сдавшие экзамен: ', filter(allStudents, failedStudents));
}