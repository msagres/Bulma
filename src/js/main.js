$(document).ready(function () {
    // ouvre le modal
    $('#open_modal').click(function () {
        $('#modal_to_open').css({
            'display': 'block'
        })
    });

    //ferme le modal
    $('#close_modal').click(function () {
        $('#modal_to_open').css({
            'display': 'none'
        })
    });
});