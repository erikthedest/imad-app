console.log('Loaded!');
var button=document.getElementById('counter');
button.onclick=function() {
    var request = new XMLHttpRequest();
    request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.DONE){    
            if(request.status===200){
                var counter=request.responseText;
                var span=document.getElementById('count');
                span.innerHTML=counter.toString();
            }
        }
    };
    request.open('GET',"http://guptaayush3108.imad.hasura-app.io/counter",true);
    request.send(null);
}
var submit=document.getElementById('sub');
var namein=document.getElementById('name');
var namet=namein.value;
submit.onclick=function(){
    var names="";
    names.push(namet.toString());
    list="";
    for(var i=0;i<names.length;i++){
        list=list+"<li>"+names[i]+"</li>";
    }
    var ul=document.getElementById('lst');
    ul.innerHTML=list;
}