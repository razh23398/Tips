

function cliked(){
    let workersNumber = parseInt(document.querySelector("#workersNumber").value);
    let totalHours = parseInt(document.querySelector("#totalHours").value);
    let creditTip = parseInt(document.querySelector("#creditTip").value);
    let cashTip = parseInt(document.querySelector("#cashTip").value);
    let minSalery = 29.12;

    let hafrasha = totalHours * minSalery;
    console.log(workersNumber)
    console.log(totalHours)
    console.log(creditTip)
    console.log(cashTip)
    console.log(hafrasha)

    document.querySelector("#hafrashaView").innerHTML = hafrasha //חישוב של סך השעות כפול שכר מינימום
    let bigTipView = (creditTip + cashTip) - hafrasha // חישוב של סך הטיפים פחות ההפרשה = סך הטיפ לחלוקה
    document.querySelector("#bigTipView").innerHTML = bigTipView 
    let smallTipView = bigTipView / totalHours; // כמות הטיפ שנשאר לחלוקה לחלק למספר השעות שעבדו העובדים
    document.querySelector("#smallTipView").innerHTML = smallTipView

    document.querySelector("#work11").innerHTML = smallTipView * parseInt(document.querySelector("#work1").value)
    document.querySelector("#work22").innerHTML = smallTipView * parseInt(document.querySelector("#work2").value)
    document.querySelector("#work33").innerHTML = smallTipView * parseInt(document.querySelector("#work3").value)
    document.querySelector("#work44").innerHTML = smallTipView * parseInt(document.querySelector("#work4").value)
    document.querySelector("#work55").innerHTML = smallTipView * parseInt(document.querySelector("#work5").value)
    document.querySelector("#work66").innerHTML = smallTipView * parseInt(document.querySelector("#work6").value)
    document.querySelector("#work77").innerHTML = smallTipView * parseInt(document.querySelector("#work7").value)
    document.querySelector("#work88").innerHTML = smallTipView * parseInt(document.querySelector("#work8").value)

}
