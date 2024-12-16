const testimonials = [
    {
      name: "Tom H",
      photoUrl:
        "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
      text:"Our clients are our greatest advocates. Hear what they have to say about their journey with us and how we made an impact on their lives."

,
    },
    {
      name: "Henry P",
      photoUrl:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
      text: "Every story is unique, and we are proud to have played a role in transforming lives and businesses. Here are some of the success stories from our amazing clients.",
    },
    {
      name: "Peter V",
      photoUrl:
        "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
      text: "Don’t just take our word for it—see how we’ve made a difference through the voices of those who know us best.",
    },
  ];
const imgEl = document.querySelector("img");
const textEl = document.querySelector(".text");
const usernameEl = document.querySelector(".username");
let idx=0;
updateTestimonial();
function updateTestimonial(){
    const {name,photoUrl,text}=testimonials[idx];
    imgEl.src=photoUrl;
    textEl.innerText=text;
    usernameEl.innerText=name;
    idx++;
    if(idx ===testimonials.length){
        idx=0;
    }
    setTimeout(()=>{
        updateTestimonial();},10000);
    
}
