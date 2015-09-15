(function(){
  document.addEventListener('DOMContentLoaded', function(){

			// JS HTML Sortable
			$('.js-sortable').sortable({
				forcePlaceholderSize: true,
				placeholderClass: 'p1 mb1 bg-navy border border-yellow',
				dragImage: $('.ghost')[0]
			});
			$('.row-sortable').sortable({
				forcePlaceholderSize: true,
				items: 'section' ,
  				placeholder: '<section>&nbsp;</section>'
			});

  });
})();