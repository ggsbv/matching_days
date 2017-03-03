const firstDate = document.querySelector("#firstDate");
const secondDate = document.querySelector("#secondDate");
const weekTable = document.querySelectorAll(".white");
console.log(weekTable.length);

const white = "rgba(0, 0, 0, 0)";
const blue = "rgba(0, 0, 255, 0)";
const red = "rgba(255, 0, 0, 0)";
const green = "rgba(0, 0, 255, 0)";

// getDayFix function
// Parameters:
// int corresponding to day of the week
//
// since getDay returns a num from 0-6 corresponding to a day of the week
// starting at 0 = Sunday, the following function fixes the number to
// correspond, instead, with our web page day numbering scheme where the week
// starts at Monday = 0.
function getDayFix(getDay){
  if (getDay > 0){
    return getDay - 1;
  }
  else if(getDay === 0){
    return 6;
  };
};
// changeDayColor function
// Parameters:
// string date in 'xx-xx-xxxx' format
// string color
//
// changeDayColor finds which day of the week the 'date' argument falls on
// , loops through the index.html table and colors the background of the cell
// corresponding to the input day. The second arg determines the color.
function changeDayColor(dateString, color){
  var date = new Date(dateString);
  var dayNum = date.getDay();
  var inputDayNum = getDayFix(dayNum);
  //var th = weekTable.getElementsByTagName('th');

  for (var i = 0; i < weekTable.length; i++){
    var currentBlockNum = i;
    var currentBGColor = weekTable[i].getAttribute('class');
    // var currentStyle = getComputedStyle(weekTable[i], "");
    // var currentBGColor = currentStyle.getPropertyValue('background-color');
    //Option 1: currentBlock is the same as inputDayNum
    if (currentBlockNum === inputDayNum){
      //if the currentBlock is already colored, check to see if it is the same
      //color as the input color. if it isn't, then the currentBlock must be
      //colored green
      if (currentBGColor !== 'white' && currentBGColor !== color){
        weekTable[i].setAttribute('class', 'green');
      }
      //if the currentBlock is white, change color to input color. Otherwise
      //we know that the currentBlock is already the same as the input color,
      //and therefore should be left as is
      else if (currentBGColor === 'white'){
        console.log(white);
        console.log('currentBGColor ' + currentBGColor);
        console.log('Input color ' + color);
        weekTable[i].setAttribute('class', color);
      };
    }
    //Option 2: inputDayNum !== currentBlockNum
    else {
      console.log("The current block: " + currentBlockNum + " does not equal the input day number: " + inputDayNum);
      //if the currentBlock's background color is green, we must change the color
      if (currentBGColor === 'green'){
        //if the input color was blue, we must change the color to red
        if (color === 'blue'){
          weekTable[i].setAttribute('class', 'red');
        }
        //if the input color was red, we must change the color to blue
        else if (color === red){
          weekTable[i].setAttribute('class', 'blue');
        }
        //if the currentBG color is the same as the input color, we must color
        //it white
      }
      else if (currentBGColor === color){
        weekTable[i].setAttribute('class', 'white');
      };
    };
    // if current bg color is white or the same as input color, color is same
    // if(i === day && currentBGColor === white || currentBGColor === color){
    //   weekTable[i].style.backgroundColor = color;
    // }
    // if current bg color is not white and is not same as input color
    // then color green
    // else if(i === day && currentBGColor !== color && currentBGColor !== white){
    //   weekTable[i].style.backgroundColor = 'green';
    // }
    // else if (currentBGColor === color && i !== day){
    //   weekTable[i].style.backgroundColor = 'white';
    // }
    // if current bg color is green but day does no longer fall in that block,
    // then the color associated with the day that does no longer belong there
    // should be removed and the other color should remain
  //   else if (currentBGColor === green && i !== day){
  //     if(color === blue){
  //       weekTable[i].style.backgroundColor = 'red';
  //     }
  //     else {
  //       weekTable[i].style.backgroundColor = 'blue';
  //     };
  //   };
  };
};

firstDate.addEventListener('change', (event) => {
  changeDayColor(event.target.value, 'blue');
});

secondDate.addEventListener('change', (event) => {
  changeDayColor(event.target.value, 'red');
});
