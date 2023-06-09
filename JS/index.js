var btnNum = document.getElementById("btnNum");
var mang = [];
btnNum.onclick = function () {
  var inputNum = +document.getElementById("inputNum").value;

  mang.push(inputNum);
  document.getElementById("result").innerHTML = mang;
  console.log(mang);
};

//BT1:
btnEx1.onclick = function () {
  var sum = 0;
  for (var i = 0; i < mang.length; i++) {
    if (mang[i] >= 0) {
      sum += mang[i];
    }
  }
  document.getElementById("result1").innerHTML = sum;
  console.log(sum);
};
// bai tap 2:
btnEx2.onclick = function () {
  var dem = 0;
  for (var i = 0; i < mang.length; i++) {
    if (mang[i] >= 0) {
      dem++;
    }
  }
  document.getElementById("result2").innerHTML = dem;
  console.log(dem);
};
// bai tap 3
btnEx3.onclick = function () {
  var min = mang[0];
  var index = 0;
  for (var i = 0; i < mang.length; i++) {
    if (mang[i] < min) {
      min = mang[i];
      index = i;
    }
  }
  document.getElementById("result3").innerHTML = min;
  console.log(min);
};
// bai tap 4
btnEx4.onclick = function () {
  var min = mang[0];
  var index = 0;
  for (var i = 0; i < mang.length; i++) {
    if (mang[i] < min && mang[i] >= 0) {
      min = mang[i];
      index = i;
    }
  }
  document.getElementById("result4").innerHTML = min;
  console.log(min);
};
// bai tap 5
btnEx5.onclick = function () {
  var lastEven = -1;
  for (var i = 0; i < mang.length; i++) {
    if (mang[i] % 2 === 0) {
      lastEven = mang[i];
    }
  }
  document.getElementById("result5").innerHTML = lastEven;
  console.log(lastEven);
};

// bai tap 6
btnEx6.onclick = function () {
  // var index=0;
  const input1 = +document.getElementById("input1").value;
  const input2 = +document.getElementById("input2").value;
  let cloneArray = [...mang];
  for (let i = 0; i < mang.length; i++) {
    if (i === input1) {
      cloneArray[i] = mang[input2];
    }

    if (i === input2) {
      cloneArray[i] = mang[input1];
    }
  }

  document.getElementById("result6").innerHTML = cloneArray;
  console.log({ cloneArray });
};
// bai tap 7
btnEx7.onclick = function () {
  // let cloneArray = [...mang];
  for (let i = 0; i < mang.length; i++) {
    for (let j = i + 1; j < mang.length; j++) {
      if (mang[j] < mang[i]) {
        const temp = mang[j];
        mang[j] = mang[i];
        mang[i] = temp;
      }
    }
  }
  document.getElementById("result7").innerHTML = mang;
};
// bai tap 8

function kiemTraSNT(n) {
  if (n < 2) {
    return false;
  }
  for (var i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

document.getElementById("btnEx8").onclick = function () {
  let ketQua = 0;
  for (i = 0; i < mang.length; i++) {
    const checkSNT = kiemTraSNT(mang[i]);
    if (checkSNT) {
      ketQua = mang[i];
      break;
    } else {
      ketQua = -1;
    }
  }
  document.getElementById("result8").innerHTML = ketQua;
};

//bai tap 9
btnEx9.onclick = function () {
  let dem = 0;

  for (let i = 0; i < mang.length; i++) {
    if (mang[i] % 1 === 0) {
      dem++;
    }
  }
  document.getElementById("result9").innerHTML = dem;
};
// bai tap 10: so sánh lượng số âm và dương
btnEx10.onclick = function () {
  let positiveList = [];
  let negativeList = [];
  for (let i = 0; i < mang.length; i++) {
    if (mang[i] < 0) {
      negativeList.push(mang[i]);
    }

    if (mang[i] > 0) {
      positiveList.push(mang[i]);
    }
  }

  const amountOfPositiveNmber = positiveList.length;
  const amountOfNegativeNmber = negativeList.length;
  let result = "";

  if (amountOfNegativeNmber > amountOfPositiveNmber) {
    result = "Số âm > Số dương";
  }

  if (amountOfPositiveNmber > amountOfNegativeNmber) {
    result = "Số dương > Số âm";
  }

  document.getElementById("result10").innerHTML = result;
};
