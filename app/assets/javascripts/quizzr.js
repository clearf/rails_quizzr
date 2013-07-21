//this array holds all currently instantiated AnswerKey elements
var answer_keys = []

function when_response_loads(){
       console.log(this)
       alert("Package Received!")
};

function remove_field(link){
    var field_container = $($(link).parent());
    var hidden_field = $($(link).prev('input[type=hidden]'));
    //console.log(field_container);
    //we can remove the answer form?
    hidden_field.val("1");
    field_container.hide(200);
}

function remove_answer_key(quiz_id) {
    $('.answer_key.quiz_'+quiz_id).remove();
}

function AnswerKey(link_that_calls_function,quiz_id){
    var quiz_container_element = $(link_that_calls_function)
                                    .parents('.quiz');
                                    //parents traverses all levels
                                    //prevents chain of parents

    var quiz_answers_elements = quiz_container_element
                                    .find('.correct');
                                    //find traverses all levels
                                    //works better than children
                                    //in this case
                                    
    var answer_key_element = $('<div>');
    answer_key_element.addClass('answer_key quiz_'+quiz_id);
    // answer_key_element.text('answer key')
    
    var answer_key_object = {
        //points to newly created answer key element
        element: answer_key_element,
        //points to useful quiz data
        quiz: {
            id: quiz_id,
            container_element: quiz_container_element,
            answers_elements: quiz_answers_elements,
            array_of_answers : [],
            //
        }
    }

    //answer_key_object.quiz.array_of_answers

    _.each(answer_key_object.quiz.answers_elements,function(element){
        var answer_text = $(element).text();
        answer_key_object.quiz.array_of_answers.push(answer_text);
    })

    answer_key_element.text(answer_key_object.quiz.array_of_answers.toString())

    answer_key_element.insertAfter($(link_that_calls_function))
    answer_keys.push(answer_key_object);
    return answer_key_object
}

$(function(){

})