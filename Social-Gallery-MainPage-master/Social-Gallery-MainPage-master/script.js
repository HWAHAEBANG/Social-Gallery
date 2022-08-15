const body=document.querySelector('body')
const sidebar=document.getElementById('nav')
const toggle=body.querySelector('.toggle')
const searchBtn=body.querySelector('.search-box')


toggle.addEventListener('click',()=>{
    sidebar.classList.toggle('close')
})
searchBtn.addEventListener('click',()=>{
    sidebar.classList.remove('close')
})


//팝업 띄우기
function openPop() {
    document.getElementById("popup_layer").style.display = "block";
}

//팝업 닫기
function closePop() {
    document.getElementById("popup_layer").style.display = "none";
}

// 사진을 업로드하면 파일경로와 파일명이 뜬대용 ㅎㅎ
// 아직 업로드를 못해서 잘 작동하는지는 확인 못함
$("#file").on('change',function(){
    var fileName = $("#file").val();
    $(".upload-name").val(fileName);
  });