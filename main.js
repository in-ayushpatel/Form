
const container_1 = document.getElementById("container-1");
const container_2 = document.getElementById("container-2");
const container_3 = document.getElementById("container-3");


const page1_next = document.getElementById("page1-next");
const page2_next = document.getElementById("page2-next");
const page2_prev = document.getElementById("page2-prev");
const page3_next = document.getElementById("page3-next");
const page3_prev = document.getElementById("page3-prev");


// page1_next.onclick =function(){
//     container_1.style.display = "none";
//     container_2.style.display = "block";
// }

page2_prev.onclick =function(){
    container_1.style.display = "block";
    container_2.style.display = "none";
}

page2_next.onclick =function(){
    container_2.style.display = "none";
    container_3.style.display = "block";
}

page3_prev.onclick =function(){
    container_2.style.display = "block";
    container_3.style.display = "none";
}


page1_next.onclick =function(){
    var inp1 = document.getElementsByClassName("c1");
    var flag = 1;
    for (let i = 0; i < 5 ; i++) {
        if(inp1[i].value==''){
            alert('fill all blanks')
            flag=0;
            break;
        }
    }
    if(flag==1){
        container_1.style.display = "none";
        container_2.style.display = "block";
    }
}



var myimage =document.getElementById("myimage");

myimage.onchange = function(event){
    var image = document.getElementById("img-preview");
    image.style.display="block"
    image.src = URL.createObjectURL(event.target.files[0]);
} 





page3_next.onclick =function(){
    var pass = document.getElementById("password");
    var password = pass.value;
    var re_pass = document.getElementById("re-password");
    var re_password = re_pass.value;
    if(password!=re_password){
        alert('password does not match');
    }else{
        alert('Confirm')
        container_3.style.display = "none";
    }
}

