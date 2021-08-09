var images=$("#images");

function giveimages(input){
	console.log("apex");
	console.log(input);
	$.ajax({
		url: 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos',
		method: 'get',
		success: dataimage,
		data: {
			api_key: 'DEMO_KEY',
			earth_date: input,
		}
	});
}


$("button").click(function(e){
	e.preventDefault();
	let input=$("#input").val();
	if(input==""){
		window.alert("Please fill the Date");
		return;
	}
	giveimages(input);
});

function dataimage(data){
	console.log(data);
	let imageslist=data.photos;
	if(imageslist.length==0){
		window.alert("Please Enter A valid Date");
		return;
	}
	for(let img in imageslist){
		console.log(img);
		images.append('<div><img src=" ' + imageslist[img].img_src + ' "> </div>' );
	}
}