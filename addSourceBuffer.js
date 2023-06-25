const slgrVideoTag = document.getElementById('video-slgr-vod');
const slgrVideoMediaSource = new MediaSource();
const slgrUrl = URL.createObjectURL( slgrVideoMediaSource );
const button01 = document.getElementById('button01');
slgrVideoTag.src = slgrUrl;
slgrVideoMediaSource.addEventListener("sourceopen", slgrVideoSourceOpen);
function slgrVideoSourceOpen(){
    const slgrVideoSourceBuffer = slgrVideoMediaSource.addSourceBuffer('video/mp4; codecs="h264"');
    // the same for the video SourceBuffer
    fetch("<?php echo TEMPLATE_URL; ?>/video/slgr-vod/sglr-01-720x406.mp4").then(function(response) {
        // The data has to be a JavaScript ArrayBuffer
        return response.arrayBuffer();
    }).then(function(videoData) {
        slgrVideoSourceBuffer.appendBuffer(videoData);
    });
}
button01.addEventListener( 'click', function( e ){ 
    slgrVideoTag.play();
    console.log( 'okay!' );
});
