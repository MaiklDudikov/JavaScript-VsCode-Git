$(document).ready(function () {
    let isLeftHidden = false;

    // Toggle left block visibility
    $('#left-toggle-arrow').on('click', function () {
        if (isLeftHidden) {
            $('#left-top-block, #bottom-left-block').css('width', '50%').show();
            $('#right-block').css('width', '50%');
            $('#left-toggle-arrow').html('&lt;');
        } else {
            $('#left-top-block, #bottom-left-block').hide();
            $('#right-block').css('width', '100%');
            $('#left-toggle-arrow').html('&gt;');
        }
        isLeftHidden = !isLeftHidden;
    });

    // Resizing blocks horizontally
    $('#horizontal-resize-bar').on('mousedown', function (e) {
        e.preventDefault();
        $(document).on('mousemove', function (event) {
            const topHeight = event.clientY;
            const bottomHeight = window.innerHeight - topHeight;

            if (topHeight > 100 && bottomHeight > 100) {
                $('#left-top-block, #right-block').css('height', topHeight + 'px');
                $('#bottom-left-block, #bottom-right-block').css('height', bottomHeight + 'px');
            }
        });
    });

    // Resizing blocks vertically
    $('#vertical-resize-bar').on('mousedown', function (e) {
        e.preventDefault();
        $(document).on('mousemove', function (event) {
            const leftWidth = event.clientX;
            const rightWidth = window.innerWidth - leftWidth;

            if (leftWidth > 100 && rightWidth > 100) {
                $('#left-top-block, #bottom-left-block').css('width', leftWidth + 'px');
                $('#right-block, #bottom-right-block').css('width', rightWidth + 'px');
            }
        });
    });

    $(document).on('mouseup', function () {
        $(document).off('mousemove');
    });
});
