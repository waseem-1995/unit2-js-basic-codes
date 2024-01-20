let LSDataKey = "admission";
let LSAdmitKey = "admission-admit";
let LSdata = JSON.parse(localStorage.getItem(LSDataKey));
if (LSdata === null) {
  LSdata = [];
}

let LSAdmit = JSON.parse(localStorage.getItem(LSAdmitKey)) || [];

let tbody = document.querySelector("tbody");
let search = document.getElementById("search");
let filterDOM = document.getElementById("filter");
// ele === obj of index page
function DisplayTable(data) {
  tbody.innerHTML = null;
  data.forEach(function (ele) {
    let tr = document.createElement("tr");
    let name = document.createElement("td");
    name.innerText = ele.name;
    let email = document.createElement("td");
    email.innerText = ele.email;
    let phone = document.createElement("td");
    phone.innerText = ele.phone;
    let gender = document.createElement("td");
    gender.innerText = ele.gender;
    let course = document.createElement("td");
    course.innerText = ele.course;
    let admit = document.createElement("button");
    admit.innerText = "Admit";
    admit.addEventListener("click",function(){
      LSAdmit.push(ele);
      localStorage.setItem(LSAdmitKey,JSON.stringify(LSAdmit));
      LSdata = LSdata.filter(function(element){
        if(element.code === ele.code){
            return false;
        }else{
            return true;
        }
      })
      localStorage.setItem(LSDataKey,JSON.stringify(LSdata));
      DisplayTable(LSdata);
    })
    let reject = document.createElement("button");
    reject.innerText = "Reject";
    tr.append(name, email, course, gender, phone, admit, reject);
    tbody.append(tr);
  });
}
DisplayTable(LSdata);

search.addEventListener("input", function () {
    dualFilter();
});

filterDOM.addEventListener("change", function () {
    dualFilter();
});

function dualFilter(){
    let searched = LSdata.filter(function (el) {
        return el.name.toLowerCase().includes(search.value.toLowerCase());
      });
      if (filterDOM.value === "") {
        DisplayTable(searched);
      } else {
        let filtered = searched.filter(function (el) {
          if (el.course === filterDOM.value) {
            return true;
          } else {
            return false;
          }
        });
        DisplayTable(filtered);
      }
}
