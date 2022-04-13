fetch("https://jsonplaceholder.typicode.com/posts").then((data)=>{
    return data.json();   
    }).then((objectData)=>{
    console.log(objectData[0].title);
    let tableData="";
    objectData.map((values)=>{
        tableData+= `<tr>
        <td>${values.userId}</td>
          <td>${values.id}</td>
          <td>${values.title}</td>
          <td>${values.body}</td>
        </tr>
        <tr>`;
    });
    document.getElementById("table_body").innerHTML=tableData;
    });
 