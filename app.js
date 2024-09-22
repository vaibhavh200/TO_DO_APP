// Add a new todo
$('input').keypress(function(e){
    if(e.which==13){
        let key = $(this).val();
        if(key.length>0){
            $('.list').append(`<li> <span>x</span> ${key}</li>`);
            $(this).val("");
        }
        saveData();
    }
})

//delte todo
$('ul').on('click','span',function(e){
    e.stopPropagation();       // to stop event bubbling
    // $(this).parent().fadeOut(600,function(){
    //     $(this).remove();
    // });
    $(this).parent().remove();
    saveData();
})

//mark as completed
$('ul').on('click','li',function(){
    $(this).toggleClass('complete');
    saveData();
})


// toggle input
$('.plus').click(function(){
    $('input').toggleClass('hidden');
})

// for saving data after refreshing
function saveData(){
    let temp = $('ul').html();
    localStorage.setItem("data",temp);
}

function getdata(){
    document.querySelector('ul').innerHTML = localStorage.getItem('data');
}
getdata();