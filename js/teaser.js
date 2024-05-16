

var root = document.querySelector(":root");
function spotlight(e) {
  root.style.setProperty("--x", e.pageX + "px");
  root.style.setProperty("--y", e.pageY + "px");
}
window.addEventListener("pointermove", spotlight);
window.addEventListener("pointerdown", spotlight);

/* 방 전체보기 */
$('.viewAll').on('click', function(){
    $('#spotlight').addClass('all');
})


/* popup */

$('#show').on('click', function(){
    $('.popup').show();
    $('#popVideo').get(0).currentTime = 0;
    
})
$('.btn_close').on('click', function(){
    $('.popup').hide();
    $('#popVideo').get(0).stop();
})