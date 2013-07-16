function remove_field(link){
    var field_container = $($(link).parent());
    var hidden_field = $($(link).prev('input[type=hidden]'));
    //console.log(field_container);
    //we can remove the answer form?
    hidden_field.val("1");
    field_container.hide(200);
}

function show_me_an_(link) {

}

$(function(){
    //nothing here yet
})