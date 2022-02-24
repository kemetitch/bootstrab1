document.querySelectorAll(".feutured-work .links li").forEach((li)=>{
   li.addEventListener("click",(e)=>{
       document.querySelectorAll(".feutured-work .links li").forEach((li)=>{
           li.classList.remove("active")
       })
       e.target.classList.add("active")
       if(e.target.dataset.select===".all"){
       document.querySelectorAll(".pro-img .col-md").forEach((col)=>{
           col.style.opacity="1"
       })
       }
       else{
        document.querySelectorAll(".pro-img .col-md").forEach((col)=>{
            col.style.opacity="0.6";
        })
        document.querySelectorAll(".pro-img .col-md img").forEach((img)=>{
            if(img.className===e.target.dataset.select){
                img.parentElement.style.opacity="1"
            }
        })
       }
   })
})