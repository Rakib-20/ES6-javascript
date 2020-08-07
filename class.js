class student{
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.school = "rajipur high school;"
    }
}

const student1 = new student(12, "Rakib");
const student2 = new student(22, "priyo");
const student3 = new student(29, "bappi");
console.log(student1, student2, student3);