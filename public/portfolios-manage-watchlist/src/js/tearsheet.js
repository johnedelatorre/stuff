(function(){
  document.addEventListener('DOMContentLoaded', function(){

			/* JS HTML Sortable */
			$('.row-sortable').sortable({
				forcePlaceholderSize: true,
				items: 'section' ,
				cursor: 'pointer',
  				placeholder: '<section>&nbsp;</section>'
			});

			/* Manage Watchlist Delete */
			$(".delbutton").click(function(){

			//Save the link in a variable called element
			var element = $(this);

			//Find the id of the link that was clicked
			var del_id = element.attr("id");

			//Built a url to send
			var info = 'id=' + del_id;
			 if(confirm("Sure you want to delete this update? There are no undos in life!"))
					  {


			         $(this).parents(".record").animate({ backgroundColor: "#fbc7c7" }, "fast")
					.animate({ opacity: "hide" }, "slow");

			 }

			return false;

			});


  });
})();