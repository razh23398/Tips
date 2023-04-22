

function cliked(){
    let workersNumber = parseFloat(document.querySelector("#workersNumber").value);
    let totalHours = parseFloat(document.querySelector("#totalHours").value);
    let creditTip = parseFloat(document.querySelector("#creditTip").value);
    let cashTip = parseFloat(document.querySelector("#cashTip").value);
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
    console.log(smallTipView)
    if (smallTipView >= 10){
        totalHours = totalHours + 4
        smallTipView = bigTipView / totalHours
        document.querySelector("#smallTipView").innerHTML = smallTipView
    document.querySelector("#work11").innerHTML = smallTipView * parseFloat(document.querySelector("#work1").value)
    document.querySelector("#work22").innerHTML = smallTipView * parseFloat(document.querySelector("#work2").value)
    document.querySelector("#work33").innerHTML = smallTipView * parseFloat(document.querySelector("#work3").value)
    document.querySelector("#work44").innerHTML = smallTipView * parseFloat(document.querySelector("#work4").value)
    document.querySelector("#work55").innerHTML = smallTipView * parseFloat(document.querySelector("#work5").value)
    document.querySelector("#work66").innerHTML = smallTipView * parseFloat(document.querySelector("#work6").value)
    document.querySelector("#work77").innerHTML = smallTipView * parseFloat(document.querySelector("#work7").value)
    document.querySelector("#work88").innerHTML = smallTipView * parseFloat(document.querySelector("#work8").value)
    document.querySelector("#work99").innerHTML = smallTipView * 4
    } else {
        document.querySelector("#smallTipView").innerHTML = smallTipView
    document.querySelector("#work11").innerHTML = smallTipView * parseFloat(document.querySelector("#work1").value)
    document.querySelector("#work22").innerHTML = smallTipView * parseFloat(document.querySelector("#work2").value)
    document.querySelector("#work33").innerHTML = smallTipView * parseFloat(document.querySelector("#work3").value)
    document.querySelector("#work44").innerHTML = smallTipView * parseFloat(document.querySelector("#work4").value)
    document.querySelector("#work55").innerHTML = smallTipView * parseFloat(document.querySelector("#work5").value)
    document.querySelector("#work66").innerHTML = smallTipView * parseFloat(document.querySelector("#work6").value)
    document.querySelector("#work77").innerHTML = smallTipView * parseFloat(document.querySelector("#work7").value)
    document.querySelector("#work88").innerHTML = smallTipView * parseFloat(document.querySelector("#work8").value)
    document.querySelector("#work99").innerHTML = 0
    }
}
