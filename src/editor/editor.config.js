const Quote = require('@editorjs/quote');
const Warning = require('@editorjs/warning');
const Delimiter = require('@editorjs/delimiter');
const Paragraph = require('editorjs-paragraph-with-alignment');
const Header = require('editorjs-header-with-anchor');
const List = require('@editorjs/list');
const Checklist = require('@editorjs/checklist');
const SimpleImage = require('simple-image-editorjs');
const Embed = require('@editorjs/embed');
const LinkTool = require('@editorjs/link');
const Table = require('editorjs-table');
const Undo = require('editorjs-undo');
const Marker = require('@editorjs/marker');
const InlineCode = require('@editorjs/inline-code');
const Underline = require('@editorjs/underline');

config = {
    onReady: () => {
        new Undo({ editor });
    },
    holder: 'editor',
    placeholder: 'Let`s write an awesome story!',
    tools: {
        header: {
            class: Header,
            shortcut: 'CMD+SHIFT+H',
            inlineToolbar: true,
            config: {
                placeholder: 'Enter a header',
                levels: [1, 2, 3, 4, 5, 6],
                defaultLevel: 3,
                allowAnchor: true,
                anchorLength: 100,
            }
        },
        paragraph: {
            class: Paragraph,
            inlineToolbar: true,
        },
        quote: {
            class: Quote,
            inlineToolbar: true,
            shortcut: 'CMD+SHIFT+O',
            config: {
                quotePlaceholder: 'Enter a quote',
                captionPlaceholder: 'Quote\'s author',
            },
        },
        warning: {
            class: Warning,
            inlineToolbar: true,
            shortcut: 'CMD+SHIFT+W',
            config: {
                titlePlaceholder: 'Title',
                messagePlaceholder: 'Message',
            },
        },
        delimiter: Delimiter,
        list: {
            class: List,
            inlineToolbar: true,
        },
        checklist: {
            class: Checklist,
            inlineToolbar: true,
        },
        embed: Embed,
        image: SimpleImage,
        table: {
            class: Table,
        },
        Marker: {
            class: Marker,
            shortcut: 'CMD+SHIFT+M',
        },
        inlineCode: {
            class: InlineCode,
            shortcut: 'CMD+SHIFT+M',
        },
        underline: {
            class: Underline,
            shortcut: 'CMD+SHIFT+U'
        }
    }
}

exports.EditorConfig = config;