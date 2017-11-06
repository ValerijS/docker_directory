

function onChangeUser(event, data) {   
    var value3 = event.target.id;
    var value1 = event.target.name;
    var value2 = event.target.value;
    var value4 = document.getElementById(value3).value;
    if (value1 != 'id'){
        alert( 'Changed ' + value1 + ' of user "id"= '+value4 );
        $.post("/updata_p",
        {
          name: value1,
          value: value2,
          id: value4
        },
        function(data,status){
            $("p").html(data);            
        });
    }
}
