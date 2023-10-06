const questions = document.querySelectorAll(".faq-question");
const answer = document.querySelectorAll(".faq-answer");

questions.forEach((question, index) => {
    question.addEventListener("click", () =>{
        const svg=question.lastElementChild;
        
        question.nextElementSibling.classList.toggle("scale-100");
        question.nextElementSibling.classList.toggle("h-[auto]");
        question.nextElementSibling.classList.toggle("py-[2rem]");
        svg.classList.toggle("rotate-45")

        //removes the expansion of the answer of other elements
        questions.forEach((element, i)=>{
            if(i!=index){
                element.nextElementSibling.classList.remove("scale-100","h-[auto]","py-[2rem]")
                element.lastElementChild.classList.remove("rotate-45")
            }
        })
    })
})