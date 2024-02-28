blank=document.querySelectorAll(".blank");
for (let i = 0; i < blank.length; i++) {
    blank[i].addEventListener("click", () => {
        blank[i].classList.toggle("true");
    })    
}

number = [5, 2, 3, 6, 7, 1];//配列
// console.log(number.length//個数);

for (let i = 0; i < number.length; i++) {
    console.log(number[i]);
}