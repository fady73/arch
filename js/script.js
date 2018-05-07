$(document).ready(function(){
      function ValidateEmail(email) {
            var expr = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
            return expr.test(email);
        };
        $("#Email").focusout(function(){
            if(!ValidateEmail($("#Email").val())){
              	    $(this).css("border-color", "#ac1800");
                    $('#submit').attr('disabled',true);
                    $("#error_name").text("Enter a vaild email address");   
            }

            else
            {
                $(this).css("border-color", "#2eb82e");
                $('#submit').attr('disabled',false);
                $("#error_name").text("");

            }
       });
	   
	   $('#chkterms').focus(function() {
            vb();
		}).blur(function() {
			vb();
		});
	   function vb(){
		   if ($('#chkterms').is(':checked')) {
	                $('#submit').attr('disabled',false);
                        $("#error_agree").text("");

                }
                else {
		        $('#submit').attr('disabled',true);
			$("#error_agree").text("Select agree to the Terms of Use");

                }
             }
	   
        $("#year").focusout(function(){
            if($("#day option:selected" ).val()=="00" || $("#year option:selected" ).val()=="00" ||$("#month option:selected" ).val()=="00"){
                    $(this).css("border-color", "#ac1800");
                    $('#submit').attr('disabled',true);
                    $("#error_birth").text("Select your data of birth");
            }
            else
            {
                $("#year").css({"border-color":"#2eb82e"});
                $("#day").css({"border-color":"#2eb82e"});
                $("#month").css({"border-color":"#2eb82e"});
                $('#submit').attr('disabled',false);
                $("#error_birth").text("");

            }
            });
			
	    $("#day").focusout(function(){
            if($("#day option:selected" ).val()=="00" || $("#year option:selected" ).val()=="00" ||$("#month option:selected" ).val()=="00"){
             	    $(this).css("border-color", "#ac1800");
                    $('#submit').attr('disabled',true);
                    $("#error_birth").text("Select your data of birth");
            }
            else
            {
                $("#year").css({"border-color":"#2eb82e"});
                $("#day").css({"border-color":"#2eb82e"});
                $("#month").css({"border-color":"#2eb82e"});
                $('#submit').attr('disabled',false);
                $("#error_birth").text("");

            }
            });
		$("#month").focusout(function(){
            if($("#day option:selected" ).val()=="00" || $("#year option:selected" ).val()=="00" ||$("#month option:selected" ).val()=="00"){
                    $(this).css("border-color", "#ac1800");
                    $('#submit').attr('disabled',true);
                    $("#error_birth").text("Select your data of birth");
            }
            else
            {
                $("#year").css({"border-color":"#2eb82e"});
                $("#day").css({"border-color":"#2eb82e"});
                $("#month").css({"border-color":"#2eb82e"});
                $('#submit').attr('disabled',false);
                $("#error_birth").text("");

            }
            });

	$('input[type=password]').keyup(function() {
		var pswd = $(this).val();
		
		//validate the length
		if ( pswd.length < 8 ) {
			$('#length').removeClass('valid').addClass('invalid');
			
		} else {
			$('#length').removeClass('invalid').addClass('valid');

		}
		
		//validate letter
		if ( pswd.match(/[a-z]/) && pswd.match(/[A-Z]/)) {
			
			$('#letter').removeClass('invalid').addClass('valid');

		} else {
			$('#letter').removeClass('valid').addClass('invalid');

		}

		//validate number
		if ( pswd.match(/\d/) ||pswd.match(/[!@#=\$%\^&\*?/"']/) ) {
			$('#number').removeClass('invalid').addClass('valid');

			
		} else {
			$('#number').removeClass('valid').addClass('invalid');

		}
		if(!Validatepws($("#password").val())){
			$(this).css("border-color", "#ac1800");
			$('#submit').attr('disabled',true);
		}
		else{
			$(this).css("border-color", "#2eb82e");
         		$('#submit').attr('disabled',false);
		}
		
	}).focus(function() {
		$('#pswd_info').show();
	}).blur(function() {
		$('#pswd_info').hide();
	});

	

	  function Validatepws(pws) {
            var expr = /^(?=.*[a-z])(?=.*[A-Z])((?=.*[0-9])|(?=.*[!@#=\$%\^&\*?/"']))(?=.{8,})/;
			return expr.test(pws);
        };

        $( "#submit" ).click(function() {
            if($("#Email" ).val()=='')
            {
		      $("#Email").css("border-color", "#ac1800");
		      $('#submit').attr('disabled',true);
		      $("#error_name").text("Enter a vaild email address");
            }
             if(!ValidateEmail($("#Email").val())){
		      $(this).css("border-color", "#ac1800");
		      $('#submit').attr('disabled',true);
		      $("#error_name").text("Enter a vaild email address");   
            }
			

            if($("#day option:selected" ).val()=="00" || $("#year option:selected" ).val()=="00" || $("#month option:selected" ).val()=="00") 
            {

                $("#day").css("border-color", "#ac1800");
                $("#year").css("border-color", "#ac1800");
                $("#month").css("border-color", "#ac1800");
                $('#submit').attr('disabled',true);
                $("#error_birth").text("Select your data of birth");
            }
            if($("#password" ).val()=='')
            {
                $("#password").css("border-color", "#ac1800");
                    $('#submit').attr('disabled',true);
		    $('#pswd_info').show();
            }
             if(!Validatepws($("#password").val())){
		   $(this).css("border-color", "#ac1800");
		   $('#submit').attr('disabled',true);
		   $('#pswd_info').show();
            }
	    if (!$('#chkterms').is(':checked')) {
	           $('#submit').attr('disabled',true);
                   $("#error_agree").text("Select agree to the Terms of Use");

                }
                
            });

    });
