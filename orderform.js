$('#userForm').validator();

let today = new Date(),
    day = today.getDate(),
    month = today.getMonth()+1,
    year = today.getFullYear();
if(day<10){
    day='0'+day
}
if(month<10){
    month='0'+month
}
today = month+'/'+day+'/'+year;
let max = month+'/'+day+'/'+ year+1;

document.getElementById("MyDatePicker").setAttribute("min", today);
document.getElementById("MyDatePicker").setAttribute("max", max);
document.getElementById("MyDatePicker").setAttribute("value", today);