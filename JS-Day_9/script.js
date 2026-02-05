        const para = document.querySelectorAll("p");

        Array.from(para).forEach((p, index) => {
            if (index % 2 === 0) {
                p.style.color = "blue";
            } else {
                p.style.color = "green";
            }
        });




    const demo = document.getElementById("demo")
    console.log(demo.textContent)


// textcontent
// inertext
// innerhtml


console.log(demo.textContent)


// create new element and append


const new_para = document.createElement("p")
new_para.textContent = "this is dianamically created paragraph";
console.log(new_para)

document.getElementById("content").append(new_para);



const image = document.createElement("img")
image.setAttribute("src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROgDj1fKbwyAjxoGGan-5jDPUOkHWMWBh3wg&s")



image.setAttribute("alt","KR mangalam");
document.getElementById("gallery").append(image);
