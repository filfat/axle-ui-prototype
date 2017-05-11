'use strict';
$(() => {
    $('.window').draggable({
        handle: '.title'
    });

    $('.desktop .file').draggable({
        grid: [98, 98]
    });
});