

	$(document).ready(function(){

        $("#profile").hide();
        $("#my-feed").hide();
        
        var data = function(){

    

        
            var token = $("#token").val(); 
         
            if(token.length==0){
                alert("Please!! Enter a Token..");
            }
            else
            {
                $("#profile").show();
                $("#login").attr("href","#profile");
                //console.log("dshghj");
                $.ajax('https://graph.facebook.com/me?fields=id,name,picture,gender,birthday,email,hometown,relationship_status,feed&access_token='+token ,
                {
                        
                        success : function(response){
                                
                            //  $("profile-pic").append("<img src="response.picture">");
                        //  $("profile-pic").html(" <img src="response.picture"> ");

                        //function to get feeds
                            var getFeeds=function()
                            {

                                $("#my-feed").show();
                                $("#feed").attr("href","#my-feed");

                                $(response.feed.data).each(function(i)
                                {
                                    $("#feedData").append("<li> "+ response.feed.data[i].story+"</li><hr>");
                                });
                            }//end of getfeeds

                            $("#Id").text(response.id);
                            $("#Name").text(response.name);

                            if(response.gender == undefined)
                            {
                                $("#Gender").text("undefined");
                            }
                            else
                            {
                                $("#Gender").text(response.gender);
                            }

                            if(response.birthday == undefined)
                            {
                                $("#bday").text("undefined");
                            }
                            else
                            {
                                $("#bday").text(response.birthday);
                            }

                            if(response.email == undefined)
                            {
                                $("#email").text("undefined");
                            }
                            else
                            {
                                $("#email").text(response.email);
                            }

                            if(response.hometown == undefined)
                            {
                                $("#town").text("undefined");
                            }
                            else
                            {
                                $("#town").text(response.hometown.name);
                            }
                            if(response.relationship_status == undefined)
                            {
                                $("#rel").text("undefined");
                            }
                            else
                            {
                                $("#rel").text(response.relationship_status);
                            }
                            
                            $("#feed").on("click",getFeeds);
                            
                        },

                        error : function(request){
                                 alert("Error Type:"+ request.status + request.responseText);
                        }
                });
            
            }

        }

        $("#login").on("click",data); 
    });
