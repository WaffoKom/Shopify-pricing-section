/===========================PricingSections========================/ 

const b1 = document.querySelector("#plan-month")
const b2 = document.querySelector("#plan-year")

const classB1 = b1.classList;
const classB2 = b2.classList;


b2.addEventListener("click", ()=>{
    classB2.add(...classB1)
    classB1.remove(...classB1);
    
   
})

b1.addEventListener("click", ()=>{
   classB1.add(...classB2)
   classB2.remove(...classB2)

});

/================================InfiniteScroll=============================================/ 



