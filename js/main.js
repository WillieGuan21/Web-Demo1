function main(){

var content=document.getElementById("content");
//創建內容
var divrow1=document.createElement("div");
divrow1.setAttribute('class','row');

var divrow2=document.createElement("div");
divrow2.setAttribute('class','row');

var divrow3=document.createElement("div");//new
divrow3.setAttribute('class','row');

var divcol12=document.createElement("div");
divcol12.setAttribute('class','col-12');

var divcol142=document.createElement("div");//new
// divcoll142.setAttribute('class','col-12 col-md-4 img');

var divcol4=document.createElement("div");
// divcol4.setAttribute('class','col-12 col-md-4 img');
//把標籤加入HTML
content.appendChild(divrow1);
divrow1.appendChild(divcol12);
content.appendChild(divrow2);
content.appendChild(divrow3);
// divrow3.appendChild(divcol122);

// divrow2.appendChild(divcol4);



var head=document.createElement("p");
head.setAttribute('class','head');
head.innerHTML="This is <b>Phase Shift</b>, eget, velit erat pulvinar mauris, nec rutrum felis justo ultrices tortor. Praesent posuere quam in est volutpat ornare nisl. Vivamus consectetur iaculis dignissim ullam vestibulum<a class='twitter' href='#' style='text-decoration:underline;'>Twitter</a>.";
var fake=document.createElement("div");
fake.setAttribute('class','button');
divcol12.appendChild(fake);

var headbutton=document.createElement("p");
headbutton.setAttribute('class','headbutton');
headbutton.innerHTML="<a href='#'><span class='bt'>READ MORE</apn></a>";

fake.appendChild(head);
fake.appendChild(headbutton);

var img=document.createElement("img");
divcol4.appendChild(img);

var img2=document.createElement("img");//new
divcol142.appendChild(img);



var x=[];
x[0]="./img/pic01.jpg";
x[1]="./img/pic02.jpg";
x[2]="./img/pic03.jpg";
x[3]="./img/pic04.jpg";
img.src=andy();

function andy(){
    for(i=0;i<3;i++){
             
        var d4=document.createElement("div");
        d4.setAttribute('class','col-12 col-md-4 secpic');
        divrow2.appendChild(d4);

        var itemdiv=document.createElement("div");
        itemdiv.setAttribute('class','item');
        d4.appendChild(itemdiv);

        var img=document.createElement("img");
        itemdiv.appendChild(img);

        var text=document.createElement("p");
        text.innerHTML="Vivamus ut velit mollis, suscipit est eget, ornare nisl. Vivamus consectetur iaculis dignissim.";
        itemdiv.appendChild(text);

        var readmore=document.createElement("p");
        readmore.innerHTML="<a href='#'><span class='bt'>READ MORE</apn></a>";
        itemdiv.appendChild(readmore);
       
        img.src=x[i]
       
        }
        
    }

var y=[];
y[0]="./img/pic01.jpg";
y[1]="./img/pic02.jpg";
y[2]="./img/pic03.jpg";
y[3]="./img/pic04.jpg";
img2.src=andy2();

function andy2(){
    for(i=0;i<3;i++){
        
        
        var d5=document.createElement("div");
        d5.setAttribute('class','col-12 col-md-4 secpic');
        divrow3.appendChild(d5);

        var itemdiv=document.createElement("div");
        itemdiv.setAttribute('class','item');
        d5.appendChild(itemdiv);

        var img=document.createElement("img");
        itemdiv.appendChild(img);

        var text=document.createElement("p");
        text.innerHTML="Vivamus ut velit mollis, suscipit est eget, ornare nisl. Vivamus consectetur iaculis dignissim.";
        itemdiv.appendChild(text);

        var readmore=document.createElement("p");
        readmore.innerHTML="<a href='#'><span class='bt'>READ MORE</apn></a>";
        itemdiv.appendChild(readmore);
        
        img.src=x[i]
        
        }
        
    }


}

var left=document.getElementById("left");
left.addEventListener("click",function(){
    $.ajax({ 
        url: 'http://127.0.0.1:8887/Demo1/left-side.html', 
        type: "GET", 
        dataType: "html", 
        cache: false, 
        headers : {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'X-Requested-With, Content-Type, Accept',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        },
        success: function (data) { 
            $('#content').html(data); 
        } 
    }) 
})



var right=document.getElementById("right");
right.addEventListener("click",function(){
    $.ajax({ 
        url: 'https://63236064.ngrok.io/Demo1/right-side.html', 
        type: "GET", 
        dataType: "html", 
        cache: false, 
        headers : {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'X-Requested-With, Content-Type, Accept',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        },
        success: function (data) { 
            $('#content').html(data);   
        } 
    }) 
})


var no=document.getElementById("no");
no.addEventListener("click",function(){
    $.ajax({ 
        url: 'https://63236064.ngrok.io/Demo1/no-side.html', 
        type: "GET", 
        dataType: "html", 
        cache: false, 
        headers : {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'X-Requested-With, Content-Type, Accept',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        },
        success: function (data) { 
            $('#content').html(data); 
        } 
    }) 
})