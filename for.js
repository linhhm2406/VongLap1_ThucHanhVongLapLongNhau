let i;
let j;

let table="<table style='border-collapse: collapse; width:100px; height:100px; border:1px black solid'>";
for (i=1; i<=10; i=i+1){
    table=table+"<tr>";
    for (j=1; j<=10; j=j+1){
        table = table + "<td style='text-align: center; border: black 1px solid'>"+i*j+"</td>";
    }
}table = table +"</table>";
document.write(table);