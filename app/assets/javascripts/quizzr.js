answer_keys = []

function remove_field(link){
    var field_container = $($(link).parent());
    var hidden_field = $($(link).prev('input[type=hidden]'));
    //console.log(field_container);
    //we can remove the answer form?
    hidden_field.val("1");
    field_container.hide(200);
}

function AnswerKey(element){
    var answer_key = $('<div>');
    answer_key.addClass('answer_key');
    answer_key.text('answer key')
    // var all_quizzes = $('.quiz');
    console.log(element)
    answer_key.insertAfter($(element))
    // return answer_key
}

$(function(){

})