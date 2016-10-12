//count code
var button=document.getElementById('counter');

button.onclick= function(){
    //make a request to the counter end point
    var request =new XMLHttpRequest()    
    //capture the response and store it in a variable
    request.onreadystatechange=function(){
        if(request.readyState ===(XMLHttpRequest.DONE))
        {
            //do some action
            if(request.status === 200){
                var counter=request.responseText;
                var span=document.getElementById('count');
                span.innerHTML=counter.toString();
            }
        }
        // not done yet
    };
    
    //render the variable in the correct span

};