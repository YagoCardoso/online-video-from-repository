


function loadVideos(){
    $("#body_videos").append('<article class="style1"><span'+
    'class="image"><img src="images/pic01.jpg" alt="" /></span><a href="generic.html"><h2>Magna</h2><video></video></a></article>');
}


function getVideos(){
    var pdfFilesDirectory = '/videos/';

// get auto-generated page 
$.ajax({url: pdfFilesDirectory}).then(function(html) {
    // create temporary DOM element
    var document = $(html);

    // find all links ending with .pdf 
    document.find('a[href$=.mp4]').each(function() {
        var pdfName = $(this).text();
        var pdfUrl = $(this).attr('href');

        $("#body_videos").append('<article class="style1"><span'+
        'class="image"><img src="images/pic01.jpg" alt="" /></span><a href="generic.html"><h2>'+pdfName+'</h2><video href='+pdfUrl+'></video></a></article>');

        // do what you want here 
    })
});
}



// A $( document ).ready() block.
$( document ).ready(function() {
    getVideos();
});