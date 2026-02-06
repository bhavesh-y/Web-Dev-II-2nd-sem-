

function handleclick(){

         const head = document.getElementById("head")
         head.style.color = "blue"

         const but = document.getElementById("btn")
         but.textContent = "clicked"


         const new_para = document.createElement("h2")
         new_para.textContent = "this is dianamically created paragraph";
          document.getElementById("content").append(new_para);


          const image = document.createElement("img")
          image.setAttribute("src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgfPcQeEXYllicBQiBKfq4oChYzMM08ZgIEA&s")
          image.setAttribute("atl","YOYO")
          document.getElementById("content").append(image);


}


 