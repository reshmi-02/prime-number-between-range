
var a=parseInt(prompt("Enter the starting value"));
var n=parseInt(prompt("Enter the ending value"));
document.write("prime numbers are ");
var count=0;
while(a<=n){
    if(a==2){
        prime=true;
    }
    
for(let i=2; i<a; i++){

    var prime=true;
    if(a%i==0){
       prime=false;
       break;
    }
}
if(prime==true){
    document.write(a+" ");
    count++;
}
a++;
}

document.write("<br><br>There are "+count+" prime numbers");

