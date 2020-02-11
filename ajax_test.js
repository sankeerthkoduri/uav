//var pagecounter = 1;
var animalContainer = document.getElementById("animal-info");
var btn = document.getElementById("btn");
btn.addEventListener("click", function () {
var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'https://github.com/sankeerthkoduri/uav/blob/master/cords' + '.json');
ourRequest.onload = function() {
var ourData = JSON.parse(ourRequest.responseText);
    renderHTML(ourData);
};
ourRequest.send();
//pagecounter++;
});
function renderHTML(data){
    var htmlString="Battery %:";
    
        for( i =0; i<data.length; i++){
        htmlString += '<p>' + data[i].lat + "is a" + data[i].long + ".</p>";
            
    }
   animalContainer.innerHTML= htmlString;
}
