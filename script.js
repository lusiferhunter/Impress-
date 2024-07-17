// Assuming the elements exist in your HTML
const yesBtn = document.getElementById("Yes-btn");
const question = document.querySelector("p");
const noBtn = document.querySelector("#No-btn");
const wrapper = document.querySelector(".wrapper");
const please = document.querySelector(".image-1");
const yes = document.querySelector(".image-2");
const woo = document.querySelector(".image-3");
const please1 = document.querySelector(".image-4");
const please2 = document.querySelector(".image-5");
const please3 = document.querySelector(".image-6");
const please4 = document.querySelector(".image-7");
const never = document.querySelector(".image-8");
const why = document.querySelector(".image-9");
const youloveme = document.querySelector(".image-10");
const nobodylovesme = document.querySelector(".image-11");
const really = document.querySelector(".image-12");
const bunny = document.querySelector(".image-13");
const cute = document.querySelector(".image-14");
const wrapperSize = wrapper.getBoundingClientRect();
const noBtnSize = noBtn.getBoundingClientRect();
const reload = document.querySelector("#reload");
const hellno = document.querySelector("#rickroll");

yes.classList.add("hide");
woo.classList.add("hide");
please1.classList.add("hide");
please2.classList.add("hide");
please3.classList.add("hide");
please4.classList.add("hide");
never.classList.add("hide");
why.classList.add("hide");
youloveme.classList.add("hide");
nobodylovesme.classList.add("hide");
really.classList.add("hide");
bunny.classList.add("hide");
cute.classList.add("hide");
hellno.classList.add("hide");

let clickCount = 0;
yesBtn.onclick = () => {
   question.innerHTML = "<p style='font-size:5vmin; text-shadow:1vmin 1.5vmin 3vmin grey;'>I knew it!<br>I love you too :)</p>";
   please.classList.add("hide");
   yes.classList.remove("hide");
   woo.classList.remove("hide");
   please1.classList.add("hide");
   please2.classList.add("hide");
   please3.classList.add("hide");
   please4.classList.add("hide");
   never.classList.add("hide");
   why.classList.add("hide");
   youloveme.classList.add("hide");
   nobodylovesme.classList.add("hide");
   really.classList.add("hide");
   bunny.classList.add("hide");
   cute.classList.add("hide");
   hellno.classList.add("hide");
   reload.classList.remove("hide");
   yesBtn.classList.add("hide");
   noBtn.classList.add("hide"); 
   wrapper.classList.add("disco");
};


noBtn.onclick = () => {
  clickCount++;
  switch (clickCount) {
    case 1:
      function1();
      break;
    case 2:
      function2();
      break;
    case 3:
      function3();
      break;
    case 4:
      function4();
      break;
    case 5:
      function5();
      break;
      case 6:
      function6();
      break;
      case 7:
      function7();
      break;
      case 8:
      function8();
      break;
      case 9:
      function9();
      break;
      case 10:
      function10();
      break;
      case 11:
      function11();
      break;
  }
};

noBtn.onmouseover = () => {
  clickCount++;
  switch (clickCount) {
    case 1:
      function1();
      break;
    case 2:
      function2();
      break;
    case 3:
      function3();
      break;
    case 4:
      function4();
      break;
    case 5:
      function5();
      break;
      case 6:
      function6();
      break;
      case 7:
      function7();
      break;
      case 8:
      function8();
      break;
      case 9:
      function9();
      break;
      case 10:
      function10();
      break;
      case 11:
      function11();
      break;
  }
};

function function1() {
  please.classList.add("hide");
  please1.classList.remove("hide");
  question.innerHTML = "<p>Do you love me?? </p>";
}

function function2() {
  please.classList.add("hide");
  please1.classList.add("hide");
  please2.classList.remove("hide");
   question.innerHTML = "<p>Do you love me?? :|</p>";
}

function function3() {
  please.classList.add("hide");
  please2.classList.add("hide");
  please3.classList.remove("hide");
   question.innerHTML = "<p>Do you love me??:/</p>";
  
  
}

function function4() {
  please.classList.add("hide");
  please3.classList.add('hide');
  please4.classList.remove("hide");
  question.innerHTML = "<p>Do you love me?? :(</p>";
}
function function5() {
  please.classList.add("hide");
  please3.classList.add('hide');
  please4.classList.add("hide");
  youloveme.classList.remove("hide");
  question.innerHTML = "<p>Do you love me?? :[</p>";
}
function function6() {
  please.classList.add("hide");
  please3.classList.add('hide');
  please4.classList.add("hide");
  youloveme.classList.add("hide");
  cute.classList.remove("hide");
  question.innerHTML = "<p>Don't you love me?? :{</p>";
}
function function7() {
  please.classList.add("hide");
  please3.classList.add('hide');
  please4.classList.add("hide");
  cute.classList.add("hide");
  bunny.classList.remove("hide");
  question.innerHTML = "<p>Do you love me?? :(</p>";
}
function function8() {
  please.classList.add("hide");
  please3.classList.add('hide');
  please4.classList.add("hide");
  bunny.classList.add("hide");
  why.classList.remove("hide");
   question.innerHTML = "<p>Do you love me??:-(</p>";
}
function function9() {
  please.classList.add("hide");
  please3.classList.add('hide');
  please4.classList.add("hide");
  why.classList.add("hide");
  really.classList.remove("hide");
  hellno.classList.remove("hide");
  question.innerHTML = "<p>Don't you love me?? -_-</p>";
}
function function10() {
  please.classList.add("hide");
  please3.classList.add('hide');
  please4.classList.add("hide");
  really.classList.add("hide");
  hellno.classList.add("hide");
  bunny.classList.add("hide");
  nobodylovesme.classList.remove("hide");
   question.innerHTML = "<p>Don't you love me??:•[</p>";
}

function function11() {
  please.classList.add("hide");
  please4.classList.add("hide");
  really.classList.add("hide");
  nobodylovesme.classList.add("hide");
  never.classList.remove("hide");
   question.innerHTML = "<p> Now! Do you love me?? :)</p>";
  noBtn.addEventListener("mouseover", () => {
    const i = Math.floor(Math.random() * (wrapperSize.width - noBtnSize.width)) + 1;
    const j = Math.floor(Math.random() * (wrapperSize.height - noBtnSize.height)) + 1;
    noBtn.style.left = i + "px";
    noBtn.style.top = j + "px";
  });
    
  noBtn.addEventListener("click", () => {
    const i = Math.floor(Math.random() * (wrapperSize.width - noBtnSize.width)) + 1;
    const j = Math.floor(Math.random() * (wrapperSize.height - noBtnSize.height)) + 1;
    noBtn.style.right = i + "px";
    noBtn.style.bottom = j + "px";
  });
}

reload.classList.add("hide");
reload.addEventListener('click', function() {
  location.reload();
});
