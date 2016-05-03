Template.registerHelper('formatDate', function(date) {
  return moment(date).format('DD.MM.YYYY hh:mm:ss a');
});

Template.registerHelper('selectedNote', function() {
		//$("html, body").animate({ scrollTop: $(document).height() }, 1);

  		var noteId = Session.get('selected');
		return Notes.findOne({_id: noteId});
});

Template.registerHelper("SetTitle", function(title) {
        document.title = title;
});

Template.index.rendered = function() {
    if(!this._rendered) {
      this._rendered = true;
      console.log('Sayfa yükleme işlemi bitti. Buraya alandan sayfa yüklendikten sonra son eklenen notlar çağrılabilir.');
    }
}