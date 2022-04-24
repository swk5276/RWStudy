var harnoiNum = 3;
var circularDisk = 5;
var nowArea = null;
var nextArea = null;
var timeAuto = null;
var isStart = false;

//기둥
var hanoi =  new Array();
for(var i=0; i < harnoiNum; i++){
  hanoi[i] =  new stack();
}

//첫번째 기둥 원판
for(var i=circularDisk; i > 0  ; i--){
  hanoi[0].push('<li class="num'+i+'">'+i+'</li>');
}

if(window.addEventListener){
  window.addEventListener("load",init,false);
}else if(window.attachEvent){
  window.attachEvent("onload",init);
}
function startGame(){
  if(!isStart){
    time = 1;
    // timeAuto = setTimeout(timeChk,1000);
    isStart = true;
  }
}

function init(){
  viewHarnoi();
  nowArea = null;
  nextArea = null;
  var area = document.getElementsByClassName('hanoi');
  for(var i=0; i < area.length; i++){
    area[i].style.background = "white";//공간 배경
    area[i].onclick = function(){
      if(time == 0){
        alert('시작하기를 누르시고 시작하세요.');
        return false;
      }
      var selArea = this.getAttribute('id').substring(5);
      if(nowArea == null){
        nowArea = parseInt(selArea)-1;
        console.log('선택'+nowArea);
        pickCircle();
      }else{
        nextArea = parseInt(selArea)-1;
        if(nextArea == nowArea){
          alert('같은곳을 이동할수 없습니다.');
          init();
        }else{
          console.log('이동'+nextArea);
          circularDiskMove();
        }

      }
    }
  }
}

function circularDiskMove(){
  var a = hanoi[nowArea].peek();
  var b = hanoi[nextArea].peek();
  //console.log(hanoi[nowArea]);
  if(hanoi[nextArea].size() != 0){
    var srch = a.indexOf('num');
    var num1 = parseInt(a.substring(srch+3));
    var num2 = parseInt(b.substring(srch+3));
    if(a > b){
      alert('이동할수 없습니다.');
      init();
    }else{
      hanoi[nowArea].pop();
      //console.log(hanoi[nowArea].item);
      hanoi[nextArea].push(a);
      init();
    }
  }else{
    //alert(a);
    hanoi[nowArea].pop();
    hanoi[nextArea].push(a);
    init();

  }
}

function pickCircle(){
  var n = hanoi[nowArea].size();
  if(n != 0){
    var id = 'hanoi'+(nowArea+1);
    var sel = document.getElementById(id);
    sel.style.backgroundColor ='orange';
  }else{
    alert('이동할 원반이없습니다. ');
    init();
  }
}

//하노이의 탑 Display
function viewHarnoi(){
  for(var i=0; i < harnoiNum ; i++){
    var n = hanoi[i].size();
    console.log(hanoi[i].item);
    if(n != 0){
      var diskList = '<ol>';
      for(var k = hanoi[i].item.length-1; k >= 0  ; k--){
        diskList += hanoi[i].item[k];
      }
      diskList += '</ol>';
      var area = document.getElementById('hanoi'+(i+1));
      area.innerHTML = diskList;
    }else{
      var area = document.getElementById('hanoi'+(i+1));
      area.innerHTML = '';
    }
    if(i == 1 || i == 2){
      var chkList = hanoi[i].size();
      if(chkList == 5){
        var place = 'hanoi'+(i+1);
        document.getElementById('wrap').setAttribute('class','success');

        if(timeAuto) clearTimeout(timeAuto);
        alert('성공');
        var timeArea = document.getElementById('time');
        timeArea.innerHTML = time;
      }
    }
  }
}
