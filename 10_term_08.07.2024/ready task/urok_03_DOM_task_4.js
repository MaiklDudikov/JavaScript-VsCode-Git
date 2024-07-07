document.addEventListener('DOMContentLoaded', function() {
    let dragged;

    document.querySelectorAll('#table tr').forEach(row => {
        row.addEventListener('dragstart', function(event) {
            dragged = event.target;
            event.target.style.opacity = 0.5;
            event.dataTransfer.effectAllowed = 'move';
            event.dataTransfer.setData('text/html', event.target.outerHTML);
        });

        row.addEventListener('dragend', function(event) {
            event.target.style.opacity = '';
            document.querySelectorAll('.drag-over').forEach(el => {
                el.classList.remove('drag-over');
            });
        });

        row.addEventListener('dragover', function(event) {
            event.preventDefault();
            event.dataTransfer.dropEffect = 'move';
            return false;
        });

        row.addEventListener('dragenter', function(event) {
            if (event.target.tagName === 'TD' || event.target.tagName === 'TR') {
                event.target.closest('tr').classList.add('drag-over');
            }
        });

        row.addEventListener('dragleave', function(event) {
            if (event.target.tagName === 'TD' || event.target.tagName === 'TR') {
                event.target.closest('tr').classList.remove('drag-over');
            }
        });

        row.addEventListener('drop', function(event) {
            event.stopPropagation();
            event.preventDefault();
            if (dragged !== event.target.closest('tr')) {
                event.target.closest('tr').insertAdjacentHTML('beforebegin', dragged.outerHTML);
                dragged.remove();
                document.querySelectorAll('#table tr').forEach(newRow => {
                    newRow.draggable = true;
                });
            }
            return false;
        });
    });

    document.addEventListener('copy', function(event) {
        const selection = document.getSelection().toString();
        const date = new Date().toLocaleString();
        const copyrightMessage = `\n\nCopied from ordered table on ${date}`;
        event.clipboardData.setData('text/plain', selection + copyrightMessage);
        event.preventDefault();
    });
});

