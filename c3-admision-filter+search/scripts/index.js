let form = document.querySelector("form");
let LSDataKey = "admission";
let LSdata = JSON.parse(localStorage.getItem(LSDataKey));

if (LSdata === null) {
  LSdata = [];
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let obj = {
    name: form.name.value,
    email: form.email.value,
    phone: form.phone.value,
    code: form.code.value,
    score: +form.score.value,
    gender: form.gender.value,
    course: form.course.value,
  };
  for (let key in obj) {
    if (obj[key] === "") {
      alert("Fill All Fields");
      return;
    }
  }
  for (let i = 0; i < LSdata.length; i++) {
    if (LSdata[i].code === obj.code) {
      alert("Student Already Exist");
      return;
    }
  }

  LSdata.push(obj);
  localStorage.setItem(LSDataKey, JSON.stringify(LSdata));
});
