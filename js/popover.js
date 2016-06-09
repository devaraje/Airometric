
//Click handler for the sign up today button
$("#signuptoday").click(function (){
    $("#signupModal").modal ();
});


$('#submitdetails').off( );

//click handler for the submit details button
//sends a POST request to the server
$('#submitdetails').on( 'click', function( evt ) {
  
    alert("In submitdetails click handler!");
  
    var baseUrl = ' https://shielded-sea-3725.herokuapp.com/data-api/';
    var collection = 'edeveraj'; 
    var pname = $('#pname').val();
    var emailid = $('#emailid').val();
    var phonenum = $('#phonenum').val();

    alert(pname);
    evt.preventDefault( );

    $.ajax( baseUrl + collection,
    {
        method: 'POST',
        data: {
                  pname: pname,
                  emailid: emailid,
                  phonenum: phonenum
              },
        success: logCreateResult,
        error: logAjaxError
    } );
} );

function logCreateResult( data ) {
    console.log( 'Data received:', data );
}

function logAjaxError( jqXHR, textStatus, errorThrown ) {
    console.log( 'AJAX error. Status:', textStatus, 'error:', errorThrown );
}