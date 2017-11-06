function key(data){
    var parent = data.parentNode;
    var grand_parent = parent.parentNode;
    var father = grand_parent.firstChild;
    var key = father.childNodes[1].value;
    return key; 
}

 function onChange(event, data) {    
    var value1 = event.target.name;
    var value2 = event.target.value;    
    key = key(data);      
    if(value1 != 'id'){
        alert('Changed use params ' + value1 + ' of group "id"=' + key); 
        window.location.pathname = '/updata_s/'+value1+'/'+value2+'/'+key;
    }
 }

function onClick_11_08(event, data){    
    var value2 = event.target.value;
    key = key(data);        
        $.post("/admin",
        {
          name: key,
          value: value2,
          id: key
        },
        function(data,status){
            $("body").html(data);            
        });       
}
