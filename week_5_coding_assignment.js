class Student {
    constructor (fullName, className) {
        this.name = fullName;
        this.className = className;
    }
    describe(){
        return `${this.name} plays ${this.className}`;
    }
}

class Class {
    constructor(subject) {
        this.name = subject;
        this.students = [];
    }
    addStudent(student){
        if (student instanceof Student) {
            this.students.push(student);
        }else{
            throw new Error ('Error: not a valid student name');
        }
    } 
    describe(){
        return `${this.name} has ${this.students.length} students`;
    }

}

class Menu {
    constructor() {
        this.classes = [];
        this.selectedClass = null;
    }
    start() {
        let selection = this.showMainMenuOptions();
        while (selection != 0) {
            switch (selection) {
                case '1':
                    this.createClass();
                    break;
                case '2':
                    this.viewClass();
                    break;
                case '3':
                    this.deleteStudent();
                    break;
                case '4':
                    this.displayClasses();
                    break;
                default:
                    selection = 0;
                
            }
            selection = this.showMainMenuOptions();

        }
        alert('Goodbye!');
    }
    showMainMenuOptions(){
        return prompt(`
        0) exit
        1) create class
        2) view class
        3) delete class
        4) display classes
        `)
    }
    showClassMenuOptions(classInfo){
        return prompt(`
        0) back
        1) Add student
        
        ${classInfo}
        `)
    }
    displayClasses(){
        let teamString = '';
        for (let i = 0; i < this.classes.length; i++) {
            teamString += i+ ') ' + this.classes[i].name + '\n';

        }
        alert(teamString);
    }
    createClass(){
        let name = prompt('Enter class name');
        this.classes.push(new Class(name));
    }
    viewClass(){
        let index = prompt('Enter index of class');
        if (index > -1 && index < this.classes.length) {
            this.selectedClass = this.classes[index];
            let description = 'Class: ' + this.selectedClass.name + '\n';
            for (let i = 0; i < this.selectedClass.players.length; i++){
                description += i + ') ' + this.selectedClass.players[i].name + ' - ' + this.selectedClass.players[i].position + '\n';
            }

            let selection = this.showClassMenuOptions(description);
            switch(selection){
                case '1':
                    this.createStudent();
                    break;
                case '2':
                    this.deletePlayer();
            }
        }
    }
    createStudent() {
        let name = prompt(`Enter student's full name `);
        let position = prompt('Enter class name for new student');
        this.selectedClass.players.push(new Student(name, position));
    }
    deletePlayer(){
        let index = prompt('Enter index of the student you wish to delete');
        if(index > -1 &&  index <  this.selectedClass.players.length){
            this.selectedClass.players.spice(index, 1);
        }
    }
    deleteStudent() {
        let index = prompt ('Enter the index of the class you wish to  delete');
        if (index > -1 && index < this.classes.length){
            this.classes.splice(index, 1);
        }
    }
}



let menu = new Menu();
menu.start();