fetch("https://jsonplaceholder.typicode.com/posts").then((data)=>{
return data.json();
}).then((objectData)=>{
console.log(objectData[0].title);
let tableData="";
objectData.map((values)=>{
tableData+= `<tr> <td><a href="#" onclick="test(${values.id})">${values.userId}</a></td>
<td>${values.id}</td>
<td>${values.title}</td>
<td>${values.body}</td>
<tr>`
//document.getElementById("table_body").innerHTML=tableData;
});document.getElementById("table_body").innerHTML=tableData;});function test(k){
console.log(k);
fetch("https://jsonplaceholder.typicode.com/posts/"+k+"").then((data)=>{
return data.json();
}).then((objectData)=>{
console.log(objectData);
let tableData="";
tableData+= `<tr> <td>${objectData.userId}</td>
<td>${objectData.id}</td>
<td>${objectData.title}</td>
<td>${objectData.body}</td>
<tr>`
document.getElementById("table_body").innerHTML=tableData;
});
}


