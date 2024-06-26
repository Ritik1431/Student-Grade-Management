let Grades = [95];
const AddGrade = () => {
    let grade = document.getElementById("inputMarks").value;
    
    if (grade !== "") {
        Grades.push(parseInt(grade));
        document.getElementById("inputMarks").value = "";
        console.log(Grades);
        updateGradeList();
        updateAverageGrade();
    }
    else
    {
        alert("Please enter valid marks");
    }
}
const updateGradeList = () => {
    let gradeList = document.getElementById("gradeList");
    gradeList.innerHTML = "";
    Grades.forEach((grade, index) => {
        let li = document.createElement("li");
        li.textContent = `Grade ${index + 1} : ${grade}`;
        gradeList.appendChild(li);
    });
}
const updateAverageGrade = () => {
    let average = Grades.reduce((sum, grade) => sum + grade, 0) / Grades.length;
    document.getElementById("averageGrade").textContent = `Average Grade of Student is : ${average.toFixed(2)}`;
    if (average < 75)
    {
        document.getElementById("averageGrade").style.color = "red";
    }
    else {
        document.getElementById("averageGrade").style.color = "green";
    }
}
updateGradeList();
updateAverageGrade();


