$('#login-button').click(function (event) {
    var pwd=document.getElementById("pwd").value;
    if(pwd=="20000115") { 
        event.preventDefault();
        $('form').fadeOut(500);
        $('#name-text').fadeIn(2000);
        $('.wrapper').addClass('form-success');
        setTimeout(function(){location.href="cake.html";},3500);
    }
    else {
        if(pwd!="20000115") {
            alert("密码错误！ \n提示：你的生日（8位数字，例：19491001）");
        }
    }
});
