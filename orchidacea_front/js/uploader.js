function fileUploader_orderFrom_getTemplateSettings()
{
    return {
        changeInput: '<div class="fileuploader-input">' +
        '<div class="fileuploader-input-inner">' +
        '<img src="/assets/account/upload.png" width="26px" height="18px">' +
        '<span class="fileuploader-input-button">Attach Materials</span>' +
        '<span class="fileuploader-input-caption"></span>' +
        '</div>' +
        '</div>',

        theme: 'dragdrop',
        thumbnails: {
            box: '<div class="fileuploader-items">' +
            '<ul class="fileuploader-items-list"></ul>' +
            '</div>',
            item: '<li class="fileuploader-item">' +
            '<div class="column-actions">' +
            '<a class="fileuploader-action fileuploader-action-remove" title="Remove"></a>' +
            '<div class="progress-icon bar_icon"><span></span></div>' +
            '</div>' +
            '<div class="columns">' +
            '<div class="column-title">' +
            '<div title="${name}">${name}</div>' +
            '</div>' +
            '</div>' +
            '</li>',
            item2: '<li class="fileuploader-item">' +
            '<div class="column-actions">' +
            '<a class="fileuploader-action fileuploader-action-remove" title="Remove"></a>' +
            '<div class="progress-icon bar_icon"><span></span></div>' +
            '</div>' +
            '<div class="columns">' +
            '<div class="column-title">' +
            '<div title="${name}">${name}</div>' +
            '</div>' +
            '</div>' +
            '</li>'
        },
        captions: {
            feedback: 'or drop files here',
            feedback2: 'or drop files here',
            drop: 'or drop files here'
        }
    };
}
function fileUploader_freeQuote_getTemplateSettings()
{
    return {
        // changeInput: '<div class="fileuploader-input drop_files_place">' +
        // '<div class="fileuploader-input-inner drop_files_place-inner">' +
        // '<span class="error">You tried to upload not supported format. <br>Available formats: pdf, rtf, txt, doc, docx, odt, zip, gz, png, jpg, jpeg, gif, xls, xlsx, csv, rar,' +
        // ' ppt, pptx.</span><span class="fileuploader-input-caption drop_files_place-caption">Drag files here or <span>browse</span></span>' +
        // '<span class="of_blue_bordered_button_v2">Add Files</span></div>' +
        // '</div>',
        changeInput: '<a href="javascript:void(0);" class="upload-link">Attach Materials</a>',
        theme: 'dragdrop',
        thumbnails:{
            box: '<div class="fileuploader-items files-items">' +
            '<ul class="fileuploader-items-list files-items-list"></ul>' +
            '</div>',
            item: '<li class="fileuploader-item files-item">' +
            '<div class="column-actions files-actions">' +
            '<a class="fileuploader-action fileuploader-action-remove files-actions-remove" title="Remove"></a>' +
            '<div class="progress-icon bar_icon files-actions-icon"><span></span></div>' +
            '</div>' +
            '<div class="columns files-columns">' +
            '<div class="column-title files-title">' +
            '<div title="${name}">${name}</div>' +
            '<span>${size2}<b>/</b>${size2}</span>' +
            '</div>' +
            '<div class="progress-bar2 files-progress-bar2">${progressBar}</div>' +
            '</div>' +
            '</li>',
            item2: '<li class="fileuploader-item files-item">' +
            '<div class="column-actions files-actions">' +
            '<a class="fileuploader-action fileuploader-action-remove files-actions-remove" title="Remove"></a>' +
            '<div class="progress-icon bar_icon files-actions-icon"><span></span></div>' +
            '</div>' +
            '<div class="columns files-columns">' +
            '<div class="column-title files-title">' +
            '<div title="${name}">${name}</div>' +
            '<span>${size2}<b>/</b>${size2}</span>' +
            '</div>' +
            '<div class="progress-bar2 files-progress-bar2">${progressBar}</div>' +
            '</div>' +
            '</li>'
        },
        captions: {
            feedback: 'or drop files here',
            feedback2: 'or drop files here',
            drop: 'or drop files here'
        }
    };
}

function fileUploader_orderFrom_getCallbacks()
{
    return {
        upload: {
            onSuccess: null,
            onError: function (item) {
                var progressBar = item.html.find('.progress-bar2');

                if (progressBar.length > 0) {
                    progressBar.find('span').html(0 + "%");
                    progressBar.find('.fileuploader-progressbar .bar').width(0 + "%");
                    //item.html.find('.progress-bar2').fadeOut(400);
                }

                item.upload.status !== 'cancelled' && item.html.find('.fileuploader-action-retry').length === 0 ? item.html.find('.column-actions').prepend(
                    '<a class="fileuploader-action fileuploader-action-retry" title="Retry"><i></i></a>'
                ) : null;
            },
            onProgress: null,
            onRemove: null
        },

        dialogs: {

            alert: function (text) {
                $('.fileuploader-items').prepend('<p class="error">' + text + '</p>');
            },

            confirm: null
        }
    };
}