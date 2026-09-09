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

ClassicEditor
    .create(document.querySelector('#message'), {

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
    .catch(error => {
        console.error(error);
    });