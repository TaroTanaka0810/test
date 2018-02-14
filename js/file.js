LoadFile();
function LoadFile(){
	var file = "text/copy.txt";
	$.ajax({
url: file,
success: function(data){
$("#txt").text(data);
}
});
	
	// $("#txt").load(file);
	// var reader = new FileReader();
	// reader.readAsText(file);
	// conloe.log(reader.result);
}