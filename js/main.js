
let date1= new Date(2022, 08, 13);

let day=date1.getDay();
console.log(day);

if(day>=0){
	if(day==6 || day ==0){
		console.log("holiday");
	}
	else{
		console.log("working day");
	}
}

let date2=new Date("08/14/2022");
let date3=new Date("10/21/2022");

let time_diff= date2.getTime()-date3.getTime();

let days_diff= time_diff/(1000*60*60*24);

console.log(days_diff);

let d1=document.getElementById("nowday");
let d2=document.getElementById("bthday");
let Btn=document.getElementById("btn");

Btn.addEventListener("click",function(){
	let first=new Date(d1.value);
	let second=new Date(d2.value);
	console.log(first);
	let time_difference = first.getTime() - second.getTime();
	let days_difference = time_difference/(1000*60*60*24);
	console.log(days_difference);
})

