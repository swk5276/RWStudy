var arrLeft = [];
var arrRight = [];

function Move(){
  const toNodes = document.getElementsByName('hanoi');

  if(toNodes[0].checked)
    arrRight.push(arrLeft.pop());
  if(toNodes[1].checked)
    arrLeft.push(arrRight.pop());

  Draw()
}

function Init(){
  arrLeft = [];
  arrRight = [];
  arrLeft.push("🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥");
  arrLeft.push("🟨🟨🟨🟨🟨🟨🟨🟨🟨");
  arrLeft.push("🟩🟩🟩🟩🟩🟩🟩");
  arrLeft.push("🟦🟦🟦🟦🟦");
  arrLeft.push("🟪🟪🟪");
  arrLeft.push("⬛");

  Draw();
}

function Draw()
{

  var ui_side_left = document.getElementsByClassName("first")
  while ( ui_side_left[0].hasChildNodes() ) { ui_side_left[0].removeChild( ui_side_left[0].firstChild ); }
  
  for(var i=0;i<arrLeft.length;i++){
    let ptag = document.createElement('p');

    ptag.appendChild(document.createTextNode(arrLeft[i]));
    ui_side_left[0].appendChild(ptag);
  }

  for(var i=0;i<arrRight.length;i++){
    let ptag = document.createElement('p');

    ptag.appendChild(document.createTextNode(arrRight[i]));
    ui_side_right[0].appendChild(ptag);
  }
}
