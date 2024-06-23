function HelloMsg(msg, name, attendance) {
    // console.log("this==>", this);
    this.message = msg;
    this.name = name;
    this.isStudent = true;
    this.attendance = attendance;
    this.totalClasses = 50;
    this.isPunctual = function () {
      var perc = this.attendance / this.totalClasses;
      if (perc >= 0.9) {
        return true;
      } else {
        return false;
      }
    };
  }
  
  var student1 = new HelloMsg("Welcome", "Bilal", 45);
  var student2 = new HelloMsg("Khush Amdeed", "Ahmed", 40);
  var student3 = new HelloMsg("Marhaba", "Abdullah", 30);
  var student4 = new HelloMsg("Tashreef layye", "Usman", 22);
  var student5 = new HelloMsg("Pakher Ragal", "Nawaz", 50);
  var student6 = new HelloMsg("Ji Aayano", "Imran", 48);

var list = document.getElementById("list");
var allStudents = [student1, student2, student3, student4, student5, student6];

console.log("allStudents==>", allStudents);

function renderData() {
    list.innerHTML = "";
    allStudents.forEach(function (data, index) {
        list.innerHTML += `<div id= ${index} class = 'flex items-center'><h1 class ='text-2xl my-4'> ${data.message} ${data.name}</h1> 
        <button class= 'ms-4 px-3 h-[30px] text-white outline-primary bg-red-500' onclick="deleteObj(this)">Delete</button>
        <button class= 'ms-4 px-3 h-[30px] text-white outline-primary bg-blue-500' onclick="editObj(this)">Edit</button> </div>`;
      });

}
// }
renderData();

function deleteObj(ele) {
  // console.log(ele.parentElement.id);
  // console.log(allStudents[ele.parentElement.id]);
  allStudents.splice(ele.parentElement.id, 1);
  console.log("allStudents===>", allStudents);
  renderData();
}

function editObj(ele) {
  // console.log(ele.parentElement.id);
  console.log(allStudents[ele.parentElement.id]);
  var obj = allStudents[ele.parentElement.id];
  obj.name = prompt('Update your name' ,obj.name );
  renderData()

  // allStudents.splice(ele.parentElement.id, 1);
  // console.log("allStudents===>", allStudents);
}