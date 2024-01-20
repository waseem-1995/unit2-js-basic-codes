let form = document.querySelector("form");
let LSData = JSON.parse(localStorage.getItem("products-list"));
if(LSData===null){
    LSData=[];
}
form.addEventListener("submit",function(el){
  el.preventDefault();
  let obj = {
    name: form.name.value,
    price: +form.price.value,
    category: form.category.value,
    listed: form.listed.value,
    brand: form.brand.value,
    reviews: +form.reviews.value,
    id:Math.random(),
  } 
  LSData.push(obj);
  localStorage.setItem("products-list",JSON.stringify(LSData));
})