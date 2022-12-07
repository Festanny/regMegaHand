// mask for phone input
window.addEventListener("DOMContentLoaded", function() {
    [].forEach.call( document.querySelectorAll('#phone'), function(input) {
    var keyCode;
    function mask(event) {
        event.keyCode && (keyCode = event.keyCode);
        var pos = this.selectionStart;
        if (pos < 3) event.preventDefault();
        var matrix = "+7 (___) ___ ____",
            i = 0,
            def = matrix.replace(/\D/g, ""),
            val = this.value.replace(/\D/g, ""),
            new_value = matrix.replace(/[_\d]/g, function(a) {
                return i < val.length ? val.charAt(i++) || def.charAt(i) : a
            });
        i = new_value.indexOf("_");
        if (i != -1) {
            i < 5 && (i = 3);
            new_value = new_value.slice(0, i)
        }
        var reg = matrix.substr(0, this.value.length).replace(/_+/g,
            function(a) {
                return "\\d{1," + a.length + "}"
            }).replace(/[+()]/g, "\\$&");
        reg = new RegExp("^" + reg + "$");
        if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
        if (event.type == "blur" && this.value.length < 5)  this.value = ""
    }
    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, true);
    input.addEventListener("keydown", mask, false)
  });
});

$('.inputRel input').on('click input', function() {
    let content = $(this),
        contentForm = $(this).parents('form').find('input'),
        contentFormBlock = $(this).parents('form')

    if (content.val() == '') {
        content.addClass('errBorder')
    } else {
        if (content.attr('type') == 'phone') {
            if (content.val().length < 17) {
                content.addClass('errBorder')
            } else {
                content.removeClass('errBorder')
            }
        } else {
            content.removeClass('errBorder')
        }
    }
    checkForm(contentForm, contentFormBlock)
})

function checkForm(contentForm, contentFormBlock) {
    for (let i=0; i<contentForm.length; i++) {
        if (contentForm.eq(i).val() == '') {
            contentForm.eq(i).addClass('error')
        } else {
            if (contentForm.eq(i).attr('type') == 'phone') {
                if (contentForm.eq(i).val().length < 17) {
                    contentForm.eq(i).addClass('error')
                } else {
                    contentForm.eq(i).removeClass('error')
                }
            } else {
                contentForm.eq(i).removeClass('error')
            }
        }
    }
    if (contentFormBlock.find('input.error').length == 0 && contentFormBlock.find('input.errBorder').length == 0) {
        contentFormBlock.find('.btnBlock button').prop('disabled', false)
        return true
    } else {
        contentFormBlock.find('.btnBlock button').prop('disabled', true)
        return false
    }
}

$('.btnBlock button').on('propertychange change click keyup input paste', function(el) {
    el.preventDefault()
    let contentForm = $(this).parents('form').find('input'),
        contentFormBlock = $(this).parents('form')
    console.log(contentForm, contentFormBlock)
    checkForm(contentForm, contentFormBlock)
    if (checkForm(contentForm, contentFormBlock)) {
        alert('Отправлено')
    } else {
        console.log('error')
    }
})