
//Click handler for the "Sign Up Today" button
//Displays a modal dialog
$("#signuptoday").click(function (){
  
    $("#signupModal").modal ();
  
});


$('#submitdetails').off( );

//Click handler for the "Submit Details button
//Stores the name of the user in local storage
//Sends a POST request to the server with all the details entered by the user in the form
$('#submitdetails').on( 'click', function( evt ) {
  
    //alert("In submitdetails click handler!");
  
    var baseUrl = ' https://shielded-sea-3725.herokuapp.com/data-api/';
    var collection = 'edeveraj'; 
    var pname = $('#pname').val();
    var emailid = $('#emailid').val();
    var phonenum = $('#phonenum').val();

    evt.preventDefault( );
  
    //write "pname" to local storage
    writeToLS(pname);
  
    //update header with customized message containing user's name
    updateHeader();

  //Getting an error when I make the POST request below: 
  //XMLHttpRequest cannot load https://shielded-sea-3725.herokuapp.com/data-api/edeveraj. Response to preflight request doesn't pass access   //control check: No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'http://127.0.0.1:53809' is           //therefore not allowed access. 
  
  /*  $.ajax( baseUrl + collection,
    {
        method: 'POST',
        data: {
                  pname: pname,
                  emailid: emailid,
                  phonenum: phonenum
              },
        success: logCreateResult,
        error: logAjaxError
    } );*/
  
} );

//update header when modal dismissed
$('#signUpModal').on('hidden', function(){
  
  updateHeader();
  
});

//update header on window load
$(window).load(function(){
  
  updateHeader();
  
});

//Write to local storage
function writeToLS(username) {
  
  //alert("in writeToLS");
  localStorage[ "username" ] = JSON.stringify( username );
}

//Read from local storage
function readFromLS() {
  
  //alert("in readFromLS");
  return JSON.parse( localStorage[ "username" ] );
  
}

//Read user name from local storage and update header  
function updateHeader() {
  
  //alert("in updateHeader");
  var username = readFromLS();
  
  if (username !== null){
    var sp = "<span>Welcome " + username + "!</span>"
    $( '#welcome' ).empty();
    $( sp ).appendTo( "#welcome" );
  }
}


function logCreateResult( data ) {
    console.log( 'Data received:', data );
}

function logAjaxError( jqXHR, textStatus, errorThrown ) {
    console.log( 'AJAX error. Status:', textStatus, 'error:', errorThrown );
}