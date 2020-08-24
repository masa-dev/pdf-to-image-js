function displayLoadingAnimation(type, comments = '') {
    if (type == 'normal') {
        $('#load-image').html('<img id="loading" src="images/gif/loadingGif/loading-orange.gif"><span id="comments">' + comments + '</span>');
    } else if (type == 'parrot') {
        $('#load-image').html('<img id="loading" src="images/gif/party parrot/parrot.gif"><span id="comments">' + comments + '</span>');
    } else if (type == 'fastparrot') {
        $('#load-image').html('<img id="loading" src="images/gif/party parrot/fastparrot.gif"><span id="comments">' + comments + '</span>');
    }
}

function deleteLoadingAnimation() {
    $('#load-image').html('');
}