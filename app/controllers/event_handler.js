
function onClick_order_15_08(event,data) {    
    var value1 = data.innerHTML;     
    $.get("/groups",
        {          
          value1: value1
        },
        function(data,status){
            $("body").html(data);            
        });       
}

function onClick_order_pupil_15_08(event,data) {   
    var value1 = data.innerHTML;       
    $.get("/users",
        {          
          value1: value1
        },
        function(data,status){
            $("body").html(data);            
        });       
}

