const editor = grapesjs.init({
    // Indicate where to init the editor. You can also pass an HTMLElement
    container: '#gjs',
    // Get the content for the canvas directly from the element
    // As an alternative we could use: `components: '<h1>Hello World Component!</h1>'`,
    fromElement: true,
    // Size of the editor
    height: '100%',
    width: '100%',
    // Disable the storage manager for the moment
    // Avoid any default panel
    layerManager: {
        appendTo: '.layers-container'
    },
    deviceManager: {
        devices: [{
            name: 'Desktop',
            width: '',
        }, {
            name: 'Mobile',
            width: '480px',
            widthMedia: '480px'
        }]
    },
    panels: {
        defaults: [{
            id: 'layers',
            el: '.panel__right',
            resizable: {
                maxDim: 350,
                minDim: 200,
                tc: 0,
                cl: 1,
                cr: 0,
                bc: 0,
                keyWidth: 'flex-basis'
            }
        }, {
            id: 'panel-switcher',
            el: '.panel__switcher',
            buttons: [{
                id: 'show-layers',
                activate: true,
                label: '<span class="fa fa-bars"></span>',
                command: 'show-layers',
                togglable: false,

            }, {
                id: 'show-style',
                activate: true,
                label: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17.5 12c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5m-3-4c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8m-5 0C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8m-3 4c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12M12 3a9 9 0 0 0 0 18c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1-.23-.27-.38-.62-.38-1 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8z"></path></svg>',
                command: 'show-styles',
                togglable: false,
            }, {
                id: 'show-traits',
                activate: true,
                label: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5m7.43-2.53c.04-.32.07-.64.07-.97 0-.33-.03-.66-.07-1l2.11-1.63c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.31-.61-.22l-2.49 1c-.52-.39-1.06-.73-1.69-.98l-.37-2.65A.506.506 0 0 0 14 2h-4c-.25 0-.46.18-.5.42l-.37 2.65c-.63.25-1.17.59-1.69.98l-2.49-1c-.22-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64L4.57 11c-.04.34-.07.67-.07 1 0 .33.03.65.07.97l-2.11 1.66c-.19.15-.25.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1.01c.52.4 1.06.74 1.69.99l.37 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.37-2.65c.63-.26 1.17-.59 1.69-.99l2.49 1.01c.22.08.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.66z"></path></svg>',
                command: 'show-traits',
                togglable: false,
            }, {
                id: 'show-blocks',
                activate: true,
                label: '<span class="fa fa-th-large"></span>',
                command: 'show-blocks',
                togglable: false,
            }],
        }, {
            id: 'panel-devices',
            el: '.panel__devices',
            buttons: [{
                id: 'device-desktop',
                label: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21 14H3V4h18m0-2H3c-1.11 0-2 .89-2 2v12c0 1.1.9 2 2 2h7l-2 3v1h8v-1l-2-3h7c1.1 0 2-.9 2-2V4a2 2 0 0 0-2-2z"></path></svg>',
                command: 'set-device-desktop',
                activate: true,
                togglable: false,
            }, {
                id: 'device-mobile',
                label: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16 18H7V4h9m-4.5 18c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5m4-21h-8A2.5 2.5 0 0 0 5 3.5v17A2.5 2.5 0 0 0 7.5 23h8a2.5 2.5 0 0 0 2.5-2.5v-17A2.5 2.5 0 0 0 15.5 1z"></path></svg>',
                command: 'set-device-mobile',
                togglable: false
            }]
        }]
    },
    selectorManager: {
        appendTo: '.styles-container'
    },
    styleManager: {
        appendTo: '.styles-container',
        sectors: [{
            name: 'Dimension',
            open: false,
            buildProps: ['width', 'min-height', 'padding'],
            propertises: [{
                type: 'integer',
                name: 'The width',
                property: 'width',
                defaults: 'auto',
                min: 0
            }]
        }, {
            name: 'Extra',
            open: false,
            buildProps: ['background-color', 'box-shadow', 'custom-prop', 'font-size'],
            propertises: [{
                id: 'custom-prop',
                name: 'Custom Label',
                property: 'font-size',
                type: 'integer',
                defaults: '32px',
            }]
        }]
    },
    traitManager: {
        appendTo: '.traits-container'
    },
    blockManager: {
        appendTo: '.blocks-container'
    },
    storageManager: {
        id: 'gjs-',
        type: 'local',
        autosave: true,
        autoload: true,
        stepsBeforeSave: 1,
        storeComponents: true,
        storeStyles: true,
        storeHtml: true,
        storeCss: true
    }
});
editor.Panels.addPanel({
    id: 'panel-top',
    el: '.panel__top',
});
editor.Panels.addPanel({
    id: 'basic-actions',
    el: '.panel__basic-actions',
    buttons: [{
        id: 'visibility',
        active: true,
        className: 'btn-toggle-borders',
        label: '<u>B</u>',
        command: 'sw-visibility'
    }, {
        id: 'export',
        className: 'btn-open-export',
        label: 'Exp',
        command: 'export-template'
    }, {
        id: 'show-json',
        className: 'btn-show-js',
        label: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8 3c-1.1 0-2 .9-2 2v4c0 1.1-.9 2-2 2H3v2h1c1.1 0 2 .9 2 2v4c0 1.1.9 2 2 2h2v-2H8v-5c0-1.1-.9-2-2-2 1.1 0 2-.9 2-2V5h2V3m6 0c1.1 0 2 .9 2 2v4c0 1.1.9 2 2 2h1v2h-1c-1.1 0-2 .9-2 2v4c0 1.1-.9 2-2 2h-2v-2h2v-5c0-1.1.9-2 2-2-1.1 0-2-.9-2-2V5h-2V3h2z"></path></svg>',
        context: 'show-json',
        command(editor) {
            editor.Modal.setTitle('Components JSON').setContent(`<textarea style="width:100%; height :250px;">
               ${JSON.stringify(editor.getComponents())}
               </textarea>`)
                .open()
        }
    }]
});
editor.Commands.add('show-layers', {
    getRowEl(editor) {
        return editor.getContainer().closest('.editor-row');
    },
    getLayersEl(row) {
        return row.querySelector('.layers-container')
    },

    run(editor, sender) {
        const lmEl = this.getLayersEl(this.getRowEl(editor));
        lmEl.style.display = ''
    },

    stop(editor, sender) {
        const lmEl = this.getLayersEl(this.getRowEl(editor));
        lmEl.style.display = 'none';
    }
})
editor.Commands.add('show-styles', {
    getRowEl(editor) {
        return editor.getContainer().closest('.editor-row');
    },
    getStyleEl(row) {
        return row.querySelector('.styles-container')
    },
    run(editor, sender) {
        const lmEl = this.getStyleEl(this.getRowEl(editor));
        lmEl.style.display = ''
    },
    stop(editor, sender) {
        const lmEl = this.getStyleEl(this.getRowEl(editor));
        lmEl.style.display = 'none';
    }
})

editor.Commands.add('show-traits', {
    getTraitsEl(editor) {
        const row = editor.getContainer().closest('.editor-row');
        return row.querySelector('.traits-container');
    },

    run(editor, sender) {
        this.getTraitsEl(editor).style.display = '';
    },
    stop(editor, sender) {
        this.getTraitsEl(editor).style.display = 'none'
    }
});
editor.Commands.add('show-blocks', {
    getBlocksEl(editor) {
        const row = editor.getContainer().closest('.editor-row');
        return row.querySelector('.blocks-container');
    },
    run(editor, sender) {
        this.getBlocksEl(editor).style.display = '';
    },
    stop(editor, sender) {
        this.getBlocksEl(editor).style.display = 'none'
    }
});
editor.Commands.add('set-device-desktop', {
    run: editor => editor.setDevice('Desktop')
})
editor.Commands.add('set-device-mobile', {
    run: editor => editor.setDevice('Mobile')
})
let blockManager = editor.BlockManager;
blockManager.add('email-builder-container', {
    label: '<span class="gjs-fonts gjs-f-b1  gjs-one-bg gjs-four-color-h"></span> email builder container',
    attributes: { class: 'gjs-block-section col-8' },
    content: `<section style="width:90%;max-width:550px;height:100% ;margin:0 auto ; margin-top:0">
          <h1>This is a simple title</h1>
          <div>This is just a Lorem text: Lorem ipsum dolor sit amet</div>
        </section>`
});
blockManager.add('block1', {
    label: '<span class="gjs-fonts gjs-f-b1  gjs-one-bg gjs-four-color-h"></span> 1 Colonne',
    content: `<div style="position:relative ;height:150px">
    <h1>Block 1</h1>
    </div>`
});
blockManager.add('block-trois-colonnes', {
    label: '<span class="gjs-fonts gjs-f-b3  gjs-one-bg gjs-four-color-h"></span> 3 Colonnes',
    content: `<div class="row" data-gjs-droppable=".row-cell" data-gjs-cutom-name="Row">
                <div class="row-cell" data-gjs-droppable=".row>
                </div>
                <div class="row-cell" data-gjs-droppable=".row>
                </div>
    </div>`

})
blockManager.add('button', {
    label: '<span class="gjs-fonts gjs-f-button  gjs-one-bg gjs-four-color-h"></span> Bouton',
    content: `<button>Mon bouton</button>`
})
blockManager.add('text', {
    label: '<span class="gjs-fonts gjs-f-text  gjs-one-bg gjs-four-color-h"></span> Text',
    content: `<div style="width:100% ">Text</div>`
})
blockManager.add('image', {
    label: '<span class="gjs-fonts gjs-f-image gjs-one-bg gjs-four-color-h"></span> Image',
    content: {
        type: 'image',
        style: {
            height: '100%',
            width: '100%'
        },
    },
    activate: true,
    select: true,
})
blockManager.add('un-sur-quatre', {
    label: '<span class="gjs-fonts gjs-f-b37  gjs-one-bg gjs-four-color-h"></span> 1/4',
    content: `<div style="display:flex; flex-direction:row; height:100% ; width:100%">
            <div style="height:100%; width:30%;background:skyblue">
             <h1>text</h1>
            </div>
            <div style="height:100%; width:70%;background:teal">
             <h1>text</h1>
            </div>
    </div>`
})
blockManager.add('quatres-sur-quatres', {
    label: '<span>4/4</span>',
    content: `<div style="display:flex; flex-direction:row; height:100% ; width:100%">
            <div style="height:100%; width:25%;background:skyblue">
            </div>
            <div style="height:100%; width:25%; background:skyblue">
            </div>
            <div style="height:100%; width:25%;background:skyblue">
            </div>
            <div style="height:100%; width:25%;background:skyblue">
            </div>
    </div>`
})
blockManager.add('deux-sur-deux', {
    label: '<span class="gjs-fonts gjs-f-b2  gjs-one-bg gjs-four-color-h"></span> 2/2',
    content: `<div style="display:flex; flex-direction:row; height:100% ; width:100%">
            <div style="height:100%; width:50%;background:skyblue">
            <h1>text</h1>
            </div>
            <div style="height:100%; width:50%; background:skyblue">
            <h1>text</h1>
            </div>
    </div>`
})
blockManager.add('section-banner', {
    label: 'Section banniere',
    content: `<div>
    </div>`
})
blockManager.add('section', {
    label: 'section',
    content: `<div style='height:10%'>
            <h1>test</h1>
    </div>`
})
blockManager.add('demie-section', {
    label: '1/2 section',
    content: `<div style='height:70px; width:70px'>
            <h1>test</h1>
    </div>`
})
blockManager.add('logo-banner', {
    label: 'logo title',
    content: `<div style='height:8%; width:100%;display:flex;justify-content:center;align-items:center; flex-direction:row;'>
                    <div style="width:20%;height:100%;display:flex;justify-content:center;align-items:center">
                    <h1>logo</h1>
                    </div>
                    <div style="width:80%;height:100%;display:flex;align-items:center">
                    <h3 style="font-weight:normal">title</h3>
                    </div>
             </div>`
})