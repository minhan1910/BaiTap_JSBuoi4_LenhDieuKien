//Homework

//Bai 1

//b1: khởi tạo 3 biến x1, x2, x3
//b2: cho người dùng nhập và gán x1, x2, x3
//Tìm max và min xong tính tổng 3 số x1,x2,3 ròi lấy tổng 3 số trừ (max + min) là ra được số còn lại
//b3: sắp xếp tăng dần
//b4: xuất kết quả ra màn hình

document.getElementById("resultNumber").disabled = true;
document.getElementById("btnSort").onclick = function () {
  var x1 = document.getElementById("number1").value;
  var x2 = document.getElementById("number2").value;
  var x3 = document.getElementById("number3").value;

  var n1 = parseInt(x1),
    n2 = parseInt(x2),
    n3 = parseInt(x3);

   var max = n1, min = n1, mid;
	if(n2 > max) max = n2;
	if(n3 > max) max = n3;
	
	if(n2 < min) min = n2;
	if(n3 < min) min = n3;
	
	var sum = n1 + n2 + n3;
	mid = sum - (max + min);

  document.getElementById("resultNumber").value = min + " " + mid + " " + max;
};

// Test bài 1
// var n1 = Number.MAX_SAFE_INTEGER,
//   n2 = Number.MIN_SAFE_INTEGER,
//   n3 = Number.MAX_SAFE_INTEGER;
// var max = n1,
//     mid = Number.MIN_SAFE_INTEGER,
//     min = Number.MAX_SAFE_INTEGER;
//   if (n2 > max) {
//     mid = max;
//     max = n2;
//   } else if (n2 > mid) {
//     mid = n2;
//   }

//   if (n3 > max) {
//     mid = max;
//     max = n3;
//   } else if (n3 > mid) {
//     mid = n3;
//   }
// //   Find Min
//   if (min > n1) {
//     min = n1;
//   }
//   if (min > n2) {
//     min = n2;
//   }
//   if (min > n3) {
//     min = n3;
//   }
//   console.log("Ascending sort: " +  min + " " + mid + " " + max);
var stopComment = 0;



// Bài 2:
document.getElementById("resultRobot").disabled = true;
document.getElementById("btnRobot").onclick = function () {
    var op = document.getElementById("dropdown_menu").value;
    document.getElementById("resultRobot").value = "Xin Chào " + op + "!";
};


//Bài 3
function outputResultTriangle(result) {
  document.getElementById("resultTriangle").value = result;
}

document.getElementById("resultTriangle").disabled = true;
document.getElementById("btnCheckTriangle").onclick = function () {
  var edge1 = parseInt(document.getElementById("edge1").value);
  var edge2 = parseInt(document.getElementById("edge2").value);
  var edge3 = parseInt(document.getElementById("edge3").value);

  var checkPytagoEdge1 = Math.sqrt(Math.pow(edge2, 2) + Math.pow(edge3, 2));
  var checkPytagoEdge2 = Math.sqrt(Math.pow(edge1, 2) + Math.pow(edge3, 2));
  var checkPytagoEdge3 = Math.sqrt(Math.pow(edge1, 2) + Math.pow(edge2, 2));

  if (edge1 == edge2 && edge2 == edge3) {
    outputResultTriangle("Tam Giác Đều");
  } else if (edge1 == edge2 || edge1 == edge3 || edge2 == edge3) {
    outputResultTriangle("Tam Giác Cân");
  } else if (
    edge1 == checkPytagoEdge1 ||
    edge2 == checkPytagoEdge2 ||
    edge3 == checkPytagoEdge3
  ) {
    outputResultTriangle("Tam Giác Vuông");
  } else {
    outputResultTriangle("Tam Giác Thường");
  }
};

//bài 4

//output on browser
function outputAfterDay(days, months, years) {
  document.getElementById("resultAfterDay").value =
    days + "/" + months + "/" + years;
}

function outputPrevDay(days, months, years) {
  document.getElementById("resultPrevDay").value =
    days + "/" + months + "/" + years;
}

function checkLeapYear(years) {
  return years % 400 == 0 || (years % 4 == 0 && years % 100 != 0) ? 1 : 0;
}

// disabled input text
document.getElementById("resultPrevDay").disabled = true;
document.getElementById("resultAfterDay").disabled = true;

//After Day

function AfterDayOfLeapYear(days, months, years) {
  //Months have to 30 days;
  if (months == 4 || months == 6 || months == 9 || months == 11) {
    if (days == 30) {
      days = 1;
      ++months;
    } else {
      ++days;
    }
  } else if (
    months == 1 ||
    months == 3 ||
    months == 5 ||
    months == 7 ||
    months == 8 ||
    months == 10 ||
    months == 12
  ) {
    if (months != 12 && days == 31) {
      days = 1;
      ++months;
    } else if (months == 12 && days == 31) {
      days = 1;
      months = 1;
      ++years;
    } else {
      ++days;
    }
  } else {
    // for 2 months
    if (days == 29) {
      days = 1;
      ++months;
    } else {
      ++days;
    }
  }
  outputAfterDay(days, months, years);
}

function afterDayOfNotLeapYear(days, months, years) {
  if (months == 4 || months == 6 || months == 9 || months == 11) {
    if (days == 30) {
      days = 1;
      ++months;
    } else {
      ++days;
    }
  } else if (
    months == 1 ||
    months == 3 ||
    months == 5 ||
    months == 7 ||
    months == 8 ||
    months == 10 ||
    months == 12
  ) {
    if (months != 12 && days == 31) {
      days = 1;
      ++months;
    } else if (months == 12 && days == 31) {
      days = 1;
      months = 1;
      ++years;
    } else {
      ++days;
    }
  } else {
    if (days == 28) {
      days = 1;
      ++months;
    } else {
      ++days;
    }
  }
  outputAfterDay(days, months, years);
}

function calcAfterDay(days, months, years) {
  var isLeapYear = checkLeapYear(years);

  if (isLeapYear == 1) {
    AfterDayOfLeapYear(days, months, years);
  } else {
    afterDayOfNotLeapYear(days, months, years);
  }
}

document.getElementById("btnAfterDay").onclick = function () {
  var days = parseInt(document.getElementById("days").value);
  var months = parseInt(document.getElementById("months").value);
  var years = parseInt(document.getElementById("years").value);

  calcAfterDay(days, months, years);
};

//Prev Day
function lastDayOfLeapYear(days, months, years) {
  if (
    months == 2 ||
    months == 4 ||
    months == 6 ||
    months == 9 ||
    months == 11
  ) {
    if (days == 1) {
      days = 31;
      --months;
    } else {
      --days;
    }
  } else if (
    months == 1 ||
    months == 5 ||
    months == 7 ||
    months == 8 ||
    months == 10 ||
    months == 12
  ) {
    if (months != 1 && days == 1 && months != 8) {
      days = 30;
      --months;
    } else if (months == 1 && days == 1) {
      days = 31;
      months = 12;
      --years;
    } else if (months == 8 && days == 1) {
      days = 31;
      --months;
    } else {
      --days;
    }
  } else {
    //for 3 months
    if (days == 1) {
      days = 29;
      months = 2;
    } else {
      --days;
    }
  }
  outputPrevDay(days, months, years);
}

function lastDayOfNotLeapYear(days, months, years) {
  if (
    months == 2 ||
    months == 4 ||
    months == 6 ||
    months == 9 ||
    months == 11
  ) {
    if (days == 1) {
      days = 31;
      --months;
    } else {
      --days;
    }
  } else if (
    months == 1 ||
    months == 5 ||
    months == 7 ||
    months == 8 ||
    months == 10 ||
    months == 12
  ) {
    if (months != 1 && days == 1 && months != 8) {
      days = 30;
      --months;
    } else if (months == 1 && days == 1) {
      days = 31;
      months = 12;
      --years;
    } else if (months == 8 && days == 1) {
      days = 31;
      --months;
    } else {
      --days;
    }
  } else {
    //for 3 months
    if (days == 1) {
      days = 28;
      months = 2;
    } else {
      --days;
    }
  }
  outputPrevDay(days, months, years);
}

//main function
function calcPrevDay(days, months, years) {
  var isLeapYear = checkLeapYear(years);

  if (isLeapYear == 1) {
    lastDayOfLeapYear(days, months, years);
  } else {
    lastDayOfNotLeapYear(days, months, years);
  }
}

document.getElementById("btnPrevDay").onclick = function () {
  var days = parseInt(document.getElementById("days").value);
  var months = parseInt(document.getElementById("months").value);
  var years = parseInt(document.getElementById("years").value);

  calcPrevDay(days, months, years);
};

//bài 2 nâng cao

function findDaysOfLeapYear(months, years) {
  var days = 0;
  if (months == 4 || months == 6 || months == 9 || months == 11) {
    days = 30;
  } else if (
    months == 1 ||
    months == 3 ||
    months == 5 ||
    months == 7 ||
    months == 8 ||
    months == 10 ||
    months == 12
  ) {
    days = 31;
  } else {
    days = 29;
  }
  document.getElementById("resultDay").value = days;
}

function findDaysOfNotLeapYear(months, years) {
  var days = 0;
  if (months == 4 || months == 6 || months == 9 || months == 11) {
    days = 30;
  } else if (
    months == 1 ||
    months == 3 ||
    months == 5 ||
    months == 7 ||
    months == 8 ||
    months == 10 ||
    months == 12
  ) {
    days = 31;
  } else {
    days = 28;
  }
  document.getElementById("resultDay").value = days;
}

function findDays(months, years) {
  var isLeapYear = checkLeapYear(years);

  if (isLeapYear == 1) {
    findDaysOfLeapYear(months, years);
  } else {
    findDaysOfNotLeapYear(months, years);
  }
}

document.getElementById("resultDay").disabled = true;
document.getElementById("btnFindDays").onclick = function () {
  var months = parseInt(document.getElementById("monthsOfEx2").value);
  var years = parseInt(document.getElementById("yearsOfEx2").value);

  findDays(months, years);
};

//Bài 3 nâng cao

function convertNumberToString(number) {
  var str = "";
  switch (number) {
    case 1:
      str = "Một";
      break;
    case 2:
      str = "Hai";
      break;
    case 3:
      str = "Ba";
      break;
    case 4:
      str = "Bốn";
      break;
    case 5:
      str = "Năm";
      break;
    case 6:
      str = "Sáu";
      break;
    case 7:
      str = "Bảy";
      break;
    case 8:
      str = "Tám";
      break;
    case 9:
      str = "Chín";
      break;
    default:
      //not number
      break;
  }
  return str;
}

function readMoney(money) {
  var numberOfDigit = parseInt(Math.log10(money) + 1);
  var donVi = convertNumberToString(parseInt(money % 10));
  var tempChuc = parseInt((money % 100) / 10);
  var chuc = convertNumberToString(parseInt((money % 100) / 10));
  var tram = convertNumberToString(parseInt(money / 100));

  if (numberOfDigit == 1) {
    document.getElementById("resultRead").value = donVi + " Ngàn ";
  } else if (numberOfDigit == 2) {
    if (tempChuc == 1) {
      document.getElementById("resultRead").value = " Mười " + donVi + " Ngàn ";
    } else {
      document.getElementById("resultRead").value =
        chuc + " Mươi " + donVi + " Ngàn ";
    }
  } else {
    if (tempChuc == 1) {
      document.getElementById("resultRead").value =
        tram + " Trăm" + " Mười " + donVi + " Ngàn ";
    } else {
      document.getElementById("resultRead").value =
        tram + " Trăm " + chuc + " Mươi " + donVi + " Ngàn ";
    }
  }
}

document.getElementById("resultRead").disabled = true;
document.getElementById("btnRead").onclick = function () {
  var money = document.getElementById("money").value;

  readMoney(money);
};


//bài 3 thêm - đếm số chẵn lẻ:

document.getElementById("resultEx7").disabled = true;
document.getElementById("btnEx7").onclick = function() {
  var n1 = Number(document.getElementById("num_1_of_ex7").value);
  var n2 = Number(document.getElementById("num_2_of_ex7").value);
  var n3 = Number(document.getElementById("num_3_of_ex7").value);

  var cntEven = 0, cntOdd = 0;
  n1 % 2 == 0 ? ++cntEven : ++cntOdd;
  n2 % 2 == 0 ? ++cntEven : ++cntOdd;
  n3 % 2 == 0 ? ++cntEven : ++cntOdd;
  console.log(cntEven + " " + cntOdd);
  document.getElementById("resultEx7").value = "Có " + cntEven + " số chẵn, " + cntOdd + " số lẻ";
} 


//Bài 4 nang cao
document.getElementById("resultEx8").disabled = true;
function distanceOfTwoPoint(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}
//distance from student home to school
function cmp(distance1, distance2, distance3) {
  var max = distance1;  
  if(distance2 > max) max = distance2;
  if(distance3 > max) max = distance3; 
  return max;
}

document.getElementById("btnEx8").onclick = function() {  
  var x1 = Number(document.getElementById("point_x_1").value);
  var y1 = Number(document.getElementById("point_y_1").value);
  var x2 = Number(document.getElementById("point_x_2").value);
  var y2 = Number(document.getElementById("point_y_2").value);
  var x3 = Number(document.getElementById("point_x_3").value);
  var y3 = Number(document.getElementById("point_y_3").value);

  var std1_name = document.getElementById("nameOfStudent1").value;
  var std2_name = document.getElementById("nameOfStudent2").value;
  var std3_name = document.getElementById("nameOfStudent3").value;

  var xSchool = Number(document.getElementById("point_x_school").value);
  var ySchool = Number(document.getElementById("point_y_school").value);

  var distance_from_std1_to_school = distanceOfTwoPoint(x1, y1, xSchool, ySchool);
  var distance_from_std2_to_school = distanceOfTwoPoint(x2, y2, xSchool, ySchool);
  var distance_from_std3_to_school = distanceOfTwoPoint(x3, y3, xSchool, ySchool);

  var max = cmp(distance_from_std1_to_school, distance_from_std2_to_school,  distance_from_std3_to_school);

  if(max == distance_from_std1_to_school) {
      document.getElementById("resultEx8").value = "Sinh viên xa trường nhất là: " + std1_name;
  } else if(max == distance_from_std2_to_school) {
      document.getElementById("resultEx8").value = "Sinh viên xa trường nhất là: " + std2_name;
  } else {
      document.getElementById("resultEx8").value = "Sinh viên Xxa trường nhất là: " + std3_name;
  }
}

