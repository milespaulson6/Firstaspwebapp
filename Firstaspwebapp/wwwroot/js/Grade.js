$("#submitButton").click(function calcGPA() {


    let total = 0;
    let output = 0;
    //This is getting each part of the grade and getting them to be worth their value, 50% for assignments.
    let assignmentGrade = $("#Assignment").val();
    assignmentGrade *= .001;
    assignmentGrade *= 5;
    //projects are 10% 
    let projectGrade = $("#Projects").val();
    projectGrade *= .001;
    projectGrade *= 1;
    //quizzes are 10%
    let quizGrade = $("#Quiz").val();
    quizGrade *= .001;
    quizGrade *= 1;
    //ecams are 20%
    let examGrade = $("#Exam").val();
    examGrade *= .001;
    examGrade *= 2;
    //intex is worth 10%
    let intexGrade = $("#Intex").val();
    intexGrade *= .001;
    intexGrade *= 1;
    //Exception handling making sure that each one is filled out
    if ((assignmentGrade == "") || (projectGrade == "") || (quizGrade == "") || (examGrade == "") || (intexGrade == "")) {
        alert("You must enter a percentage up to 100 for each grade!");

    }
    else if ((assignmentGrade < 0 || assignmentGrade > .50) || (projectGrade < 0 || projectGrade > .10) || (quizGrade < 0 || quizGrade > .10) || (examGrade < 0 || examGrade > .20) || (intexGrade < 0 || intexGrade > .10)) {
        alert("You must enter a percentage from 0 up to 100 for each grade!");
    } else {
        //this is getting the total from all the different sections.
        total = total + parseFloat(assignmentGrade) + parseFloat(projectGrade) + parseFloat(quizGrade) + parseFloat(examGrade) + parseFloat(intexGrade)
        //rounding to 2 places.
        total = total.toFixed(2);
        //makes it out of 100
        total *= 100
        //if statement to determine which letter grade to output
        if (total >= 94) {
            $("#outputLet").html("A");
        } else if ((total >= 90) && (total < 94)) {
            $("#outputLet").html("A-");
        } else if ((total >= 87) && (total < 90)) {
            $("#outputLet").html("B+");
        } else if ((total >= 84) && (total < 87)) {
            $("#outputLet").html("B");
        } else if ((total >= 80) && (total < 84)) {
            $("#outputLet").html("B-");
        } else if ((total >= 77) && (total < 80)) {
            $("#outputLet").html("C+");
        } else if ((total >= 74) && (total < 77)) {
            $("#outputLet").html("C");
        } else if ((total >= 70) && (total < 74)) {
            $("#outputLet").html("C-");
        } else if ((total >= 67) && (total < 70)) {
            $("#outputLet").html("D+");
        } else if ((total >= 64) && (total < 67)) {
            $("#outputLet").html("D");
        } else if ((total >= 60) && (total < 64)) {
            $("#outputLet").html("D-");
        } else {
            $("#outputLet").html("E");
        }

        //outputs the total grade percentage
        output = total + "%";



        $("#outputNum").html(output);
        //if total >= .94

    }
});


