       //variables
       var saveBtn = document.getElementById("saveBtn");
       var eventEl = document.getElementById("textarea");


       //date variable
       var now = document.getElementById("currentDay");

       //get current date
       $(document).ready(function(){
           var now = moment ();

           $("#currentDay").text(now.format);
           $("#currentDay").append('<br>' + now.fromNow());
           $("#currentDay").append('<br>' + JSON.stringify(now.toObject()));
       });

       //function for displaying event data
       function saveEvent(){
           //delete previous event before adding new one
           $("#newEvent").empty();
           //add the event to the newEvent list
           $("newEvent").append(a);
       }

       //function when save event btn is clicked
       $("#add-event").on("click", function(event){
           event.preventDefault();
           //grab input from textarea
           var eventEl = $("event-input").val().trim();
           
       });

       //click event listener for save event btns
       $(document).on("click", "#add-event")

       //save to local storage

           //value for input box
         


             //get event form localstorage
               
             //create new event
             

             //save event to local storage
             
         


