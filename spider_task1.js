// document.getElementById("first").style.backgroundPosition = "-240px 0";
// document.getElementById("second").style.backgroundPosition = "0 -120px";
// document.getElementById("third").style.backgroundPosition = "0 0";
// document.getElementById("fourth").style.backgroundPosition = "-120px -120px";
// document.getElementById("fifth").style.backgroundPosition = "-120px 0";
// document.getElementById("sixth").style.backgroundPosition = "-120px -240px";
// document.getElementById("seventh").style.backgroundPosition = "-240px -120px";
// document.getElementById("eighth").style.backgroundPosition = "-240px -240px";
// document.getElementById("ninth").style.backgroundPosition = "0 -240px";

arr = ["-240px 0", "-120px 0", "0 0", "-120px -120px", "0 -120px", "-120px -240px", "-240px -120px", "-240px -240px", "0 -240px"];
brr = ["second", "seventh", "third", "fourth", "fifth", "sixth", "first", "eighth", "ninth"];
for (let i = 8; i >= 0; i--) {

  document.getElementById(`${brr[i]}`).style.backgroundPosition = `${arr[i]}`;
  arr.pop();
  brr.pop();

}

// div.AddEventListener("dragstart",dragStart);//click a div to drag
// div.AddEventListener("dragover",dragOver);//moving div around while clicked
// div.AddEventListener("dragenter",dragEnter);//dragging div onto another one
// div.AddEventListener("dragleave",dragLeave);//dragged div leaving another div
// div.AddEventListener("drop",dragDrop);//drag the div over another one, drop the div
// div.AddEventListener("dragend",dragEnd);//after drag drop, swap the 2 divs

// const draggables = document.querySelectorAll('.draggable');
// const containers = document.querySelectorAll('.container');

// draggables.forEach(draggable => {
//     draggable.addEventListener('dragstart', () => {
//         draggable.classList.add('dragging');
//     })

//     draggable.addEventListener('dragend', () => {
//         draggable.classList.remove('dragging');
//     })
// })

// containers.forEach(container => {
//     container.addEventListener('dragover',e => {
//         e.preventDefault();
//         const afterElement = getDragAfterElement(container , e.clientY);
//         const draggable = document.querySelector('.dragging');
//         if(afterElement == null) {
//             container.appendChild(draggable);
//         } else {
//             container.insertBefore(draggable, afterElement)
//         }

//     })
// })

// function getDragAfterElement(container,y) {
//     const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')]
//     return draggableElements.reduce((closest , child) => {
//          const box = child.getBoundingClientRect();
//          const offset = y - box.top - box.height / 2;
//          if(offset < 0 && offset > closest.offset) {
//             return {offset: offset, element: child}
//          } else {
//             return closest;
//          }
//     } , {offset: Number.NEGATIVE_INFINITY}).element
// }

//final
// const draggs = document.querySelectorAll('.draggable');
// draggs.forEach(e => {
//     e.addEventListener('dragstart', () => {
//         console.log("dragstart has been triggered");
//     });
//     e.addEventListener('dragend', () => {
//         console.log("dragend has been triggered");
//     });

// });

// const containers = document.querySelector('.container');
// const draggables = document.querySelectorAll('.draggable');

// draggables.forEach((box) => {
//     box.addEventListener("dragover",(e) => {
//         e.preventDefault();
//     })
//     box.addEventListener("drop",() => {
//         box.appendChild()
//     })
//     box.addEventListener("drop", () => {

//     })
// })

// const draggables = document.querySelectorAll(".draggable");
// let currTile;
// let otherTile;

// draggables.forEach((box) => {
//     box.addEventListener("dragstart",() => {
//         console.log("DragStart triggered");
//         currTile = this; 
//     })
//     box.addEventListener("dragover",(e) => {
//         e.preventDefault();
//         //console.log("Dragover triggered")
//     })
//     box.addEventListener("drop",() => {
//         console.log("Drop triggered")
//         otherTile = this;
//     })
//     box.addEventListener("dragend",() => {
//         //console.log("Dragend triggered")
//         {
//             let currImg = currTile.src;
//             let otherImg = otherTile.src;

//             currTile.src = otherImg;
//             otherTile.src = currImg;


//         }
//     })
// })

const img = document.querySelector('img');
const input = document.querySelector('input');
const firstDiv = document.getElementById('first');
const secDiv = document.getElementById('second');
const thirdDiv = document.getElementById('third');
const fourthDiv = document.getElementById('fourth');
const fifthDiv = document.getElementById('fifth');
const sixthDiv = document.getElementById('sixth');
const seventhDiv = document.getElementById('seventh');
const eighthDiv = document.getElementById('eighth');
const ninthDiv = document.getElementById('ninth');

let draggs = document.getElementsByClassName('draggable');

input.addEventListener("change", () => {
  img.src = URL.createObjectURL(input.files[0]);
  firstDiv.style.backgroundImage = `url(${img.src})`;
  secDiv.style.backgroundImage = `url(${img.src})`;
  thirdDiv.style.backgroundImage = `url(${img.src})`;
  fourthDiv.style.backgroundImage = `url(${img.src})`;
  fifthDiv.style.backgroundImage = `url(${img.src})`;
  sixthDiv.style.backgroundImage = `url(${img.src})`;
  seventhDiv.style.backgroundImage = `url(${img.src})`;
  eighthDiv.style.backgroundImage = `url(${img.src})`;
  ninthDiv.style.backgroundImage = `url(${img.src})`;

});

const draggables = document.querySelectorAll(".draggable");
let currTile;
let otherTile;
let dragCount = 0;

draggables.forEach((box) => {
  box.addEventListener("dragstart", function () {
    currTile = this;
    this.classList.add("dragging");
  });

  box.addEventListener("dragover", function (e) {
    e.preventDefault();
  });

  box.addEventListener("dragenter", function (e) {
    e.preventDefault();
    this.classList.add("dragover");
  });

  box.addEventListener("dragleave", function () {
    this.classList.remove("dragover");
  });

  box.addEventListener("drop", function () {
    otherTile = this;
    this.classList.remove("dragover");
  });

  box.addEventListener("dragend", function () {
    this.classList.remove("dragging");
    dragCount = dragCount + 1;

    if (currTile && otherTile && currTile !== otherTile) {
      const currIndex = Array.from(draggables).indexOf(currTile);
      const otherIndex = Array.from(draggables).indexOf(otherTile);

      if (currIndex !== -1 && otherIndex !== -1) {
        // Swap the background positions
        const currBackgroundPosition = currTile.style.backgroundPosition;
        const otherBackgroundPosition = otherTile.style.backgroundPosition;
        currTile.style.backgroundPosition = otherBackgroundPosition;
        otherTile.style.backgroundPosition = currBackgroundPosition;

        // Swap the text contents (if needed)
        // const currText = currTile.innerText;
        // const otherText = otherTile.innerText;
        // currTile.innerText = otherText;
        // otherTile.innerText = currText;
      }
    }

    // currTile = null;
    // otherTile = null;
  });
});

function submit() {
  crr = ["0px 0px", "-120px 0px", "-240px 0px", "0px -120px", "-120px -120px", "-240px -120px", "0px -240px", "-120px -240px", "-240px -240px"];
  drr = ["first", "second", "third", "fourth", "fifth", "sixth", "seventh", "eighth", "ninth"];
  let cnt = 0;
  for (let j = 0; j < 9; j++) {
    // console.log(`${crr[j]}`)
    // console.log(document.getElementById(`${drr[j]}`).style.backgroundPosition)
    if (document.getElementById(`${drr[j]}`).style.backgroundPosition == `${crr[j]}`) {
      cnt = cnt + 1;
    }
  }
  if (cnt == 9) {
    alert("You have completed the puzzle successfully :)");
    // console.log("Akilesh");
  } else {
    console.log();
    alert("The puzzle is not completed successfully :(");
  }

}
function start() {
  let name = prompt("Enter your name");
  localStorage.setItem("name", "dragCount");
  console.log(localStorage.getItem("name", "dragCount"));
}
