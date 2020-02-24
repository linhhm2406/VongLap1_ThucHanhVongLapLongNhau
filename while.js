let i=1;
let j=1;

let table="<table style='border-collapse: collapse; width:100px; height:100px; border:1px black solid'>";
while(i<=10){
    table=table+"<tr>";
    while (j<=10){
        table = table + "<td style='text-align: center; border: black 1px solid'>"+i*j+"</td>";
        j=j+1;
    }
    table=table+"<tr>";
    j=1;
    i=i+1;
}
table = table +"</table>";
document.write(table);