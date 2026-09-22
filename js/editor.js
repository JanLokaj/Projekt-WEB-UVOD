import {
    ClassicEditor,
    Essentials,
    Paragraph,
    Bold,
    Italic,
    Underline,
    Link,
    List,
    BlockQuote,
    Image,
    ImageToolbar,
    ImageCaption,
    ImageStyle,
    ImageInsert
} from 'ckeditor5';

import 'ckeditor5/ckeditor5.css';

const textarea = document.querySelector('#message');

if (textarea) {
    ClassicEditor
        .create(textarea, {
            licenseKey: 'GPL',

            plugins: [
                Essentials,
                Paragraph,
                Bold,
                Italic,
                Underline,
                Link,
                List,
                BlockQuote,
                Image,
                ImageToolbar,
                ImageCaption,
                ImageStyle,
                ImageInsert
            ],

            toolbar: [
                'undo',
                'redo',
                '|',
                'bold',
                'italic',
                'underline',
                '|',
                'link',
                'bulletedList',
                'numberedList',
                '|',
                'insertImage',
                '|',
                'blockQuote'
            ],

            image: {
                toolbar: [
                    'imageStyle:inline',
                    'imageStyle:block',
                    'imageStyle:side',
                    '|',
                    'toggleImageCaption',
                    'imageTextAlternative'
                ]
            }
        })
        .then(editor => {
            console.log('CKEditor funguje:', editor);
        })
        .catch(error => {
            console.error('CKEditor chyba:', error);
        });
}
