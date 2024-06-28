<script setup lang="ts">
    import Image from '@tiptap/extension-image';
    import Link from '@tiptap/extension-link';
    import Table from '@tiptap/extension-table';
    import TableCell from '@tiptap/extension-table-cell';
    import TableHeader from '@tiptap/extension-table-header';
    import TableRow from '@tiptap/extension-table-row';
    import Underline from '@tiptap/extension-underline';
    import Youtube from '@tiptap/extension-youtube';
    import StarterKit from '@tiptap/starter-kit';
    import { EditorContent, useEditor } from '@tiptap/vue-3';
    import { onBeforeUnmount, ref, watch } from 'vue';

    // @ts-ignore
    import TipTapButton from './TipTap/TipTapButton.vue';
    import TipTapDivider from './TipTap/TipTapDivider.vue';

    import FileUpload from './TipTap/file-upload';

    const props = defineProps({
        modelValue: {
            type: String,
            default: ''
        },
        editorId: {
            type: String,
            default: ''
        },
        editorClass: {
            type: [String, Boolean],
            default: ''
        },
        fileUploadUrl: {
            type: [String, Boolean],
            default: false
        },
        allowedFileTypes: {
            type: String,
            default: 'image/*'
        }
    });

    const codeMode = ref(false);
    const htmlContent = ref('');

    const syncEditor = () => {
        emit('update:modelValue', htmlContent.value);
    };

    const changeEditorMode = () => {
        codeMode.value = !codeMode.value;

        if (codeMode.value) {
            htmlContent.value = editor.value?.getHTML() || '';
        } else {
            editor.value?.commands.setContent(htmlContent.value);
            emit('update:modelValue', htmlContent.value);
        }
    };

    const uploadFile = () => {
        // @ts-ignore
        editor.value?.chain().focus().uploadFile().run();
    };

    const emit = defineEmits(['update:modelValue']);

    const showTableToolbar = ref(false);

    const onBeforeUpload = (request: any) => {
        request.formData.append('_token', localStorage.getItem('_token'));
    };

    const onUploadCompleted = (event: any, editor: any) => {
        const data = JSON.parse(event.target.response);
        editor
            .chain()
            .setImage({
                src: data.fileUrl,
                alt: data.readableName,
                title: data.readableName
            })
            .run();
    };

    const onError = (errorMessage: any) => {
        console.error(errorMessage);
    };

    const editor = useEditor({
        content: props.modelValue,
        extensions: [
            StarterKit,
            Underline,
            Link.configure({
                openOnClick: false
            }),
            Image.configure({
                inline: false
            }),
            Youtube.configure({
                controls: false
            }),
            Table.configure({
                resizable: true
            }),
            TableRow,
            TableHeader,
            TableCell,
            FileUpload.configure({
                allowedFileTypes: props.allowedFileTypes,
                maximumFileSize: 5,
                onBeforeUpload: onBeforeUpload,
                onUploadCompleted: onUploadCompleted,
                onError: onError,
                fileUploadUrl: props.fileUploadUrl
            })
        ],
        onUpdate: ({ editor }: any) => {
            emit('update:modelValue', editor.getHTML());
        }
    });

    watch(
        () => props.modelValue,
        (newValue) => {
            if (newValue !== editor.value?.getHTML()) {
                editor.value?.commands.setContent(newValue);
            }
        }
    );

    onBeforeUnmount(() => {
        editor.value?.destroy();
    });

    const toggleTableToolbar = () => {
        showTableToolbar.value = !showTableToolbar.value;
    };

    const setLink = () => {
        const previousUrl = editor.value?.getAttributes('link').href;
        const url = window.prompt('URL', previousUrl);
        // cancelled
        if (url === null) {
            return;
        }
        // empty
        if (url === '') {
            editor.value?.chain().focus().extendMarkRange('link').unsetLink().run();
            return;
        }
        // update link
        editor.value?.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
    };

    const addVideo = () => {
        const url = prompt('Enter YouTube URL');

        if (!url) {
            return;
        }

        editor.value?.commands.setYoutubeVideo({
            src: url,
            width: 640,
            height: 480
        });
    };
</script>

<template>
    <div>
        <div class="tiptap-editor-toolbar1" :class="editorClass">
            <TipTapButton
                title="Bold"
                icon="ri-bold"
                @click.prevent="editor?.commands.toggleBold()" />

            <TipTapButton
                title="Italic"
                icon="ri-italic"
                @click.prevent="editor?.commands.toggleItalic()" />

            <TipTapButton
                title="Underline"
                icon="ri-underline"
                @click.prevent="editor?.commands.toggleUnderline()" />

            <TipTapButton
                title="Strikethrough"
                icon="ri-strikethrough"
                @click.prevent="editor?.commands.toggleStrike()" />

            <TipTapDivider />

            <TipTapButton
                title="Heading 1"
                icon="ri-h-1"
                @click.prevent="editor?.commands.toggleHeading({ level: 1 })" />

            <TipTapButton
                title="Heading 2"
                icon="ri-h-2"
                @click.prevent="editor?.commands.toggleHeading({ level: 2 })" />

            <TipTapButton
                title="Heading 3"
                icon="ri-h-3"
                @click.prevent="editor?.commands.toggleHeading({ level: 3 })" />

            <TipTapButton
                title="Heading 4"
                icon="ri-h-4"
                @click.prevent="editor?.commands.toggleHeading({ level: 4 })" />

            <TipTapButton
                title="Paragraph"
                icon="ri-paragraph"
                @click.prevent="editor?.commands.setParagraph()" />

            <TipTapButton
                title="List"
                icon="ri-list-unordered"
                @click.prevent="editor?.commands.toggleBulletList()" />

            <TipTapButton
                title="Ordered Link"
                icon="ri-list-ordered"
                @click.prevent="editor?.commands.toggleOrderedList()" />

            <TipTapButton title="Add Link" icon="ri-link-m" @click.prevent="setLink" />

            <TipTapButton
                title="Remove Link"
                icon="ri-link-unlink-m"
                @click.prevent="editor?.commands.unsetLink()" />

            <TipTapDivider />

            <TipTapButton
                title="Line Break"
                icon="ri-text-wrap"
                @click.prevent="editor?.commands.setHardBreak()" />

            <TipTapButton
                title="Horizontal Rule"
                icon="ri-separator"
                @click.prevent="editor?.commands.setHorizontalRule()" />

            <TipTapButton
                title="Clear Format"
                icon="ri-format-clear"
                @click.prevent="editor?.commands.clearNodes()" />

            <TipTapDivider />

            <TipTapButton
                v-if="fileUploadUrl"
                title="Add Image"
                icon="ri-image-add-line"
                @click.prevent="uploadFile" />

            <TipTapButton title="Add Video" icon="ri-youtube-line" @click.prevent="addVideo" />

            <TipTapDivider />

            <TipTapButton title="Table" icon="ri-table-line" @click.prevent="toggleTableToolbar" />

            <TipTapDivider />

            <TipTapButton
                title="Undo"
                icon="ri-arrow-go-back-line"
                @click.prevent="editor?.commands.undo()" />

            <TipTapButton
                title="Redo"
                icon="ri-arrow-go-forward-line"
                @click.prevent="editor?.commands.redo()" />

            <TipTapDivider />

            <TipTapButton
                title="Code View"
                icon="ri-code-box-line"
                @click.prevent="changeEditorMode" />
        </div>

        <div v-show="showTableToolbar" class="tiptap-editor-toolbar2">
            <TipTapButton
                title="Insert Table"
                icon="ri-table-2"
                @click.prevent="
                    editor?.commands.insertTable({
                        rows: 3,
                        cols: 3,
                        withHeaderRow: true
                    })
                " />

            <TipTapDivider />

            <TipTapButton
                title="Add Column Before"
                icon="ri-layout-3-line"
                @click.prevent="editor?.commands.addColumnBefore()" />

            <TipTapButton
                title="Add Column After"
                icon="ri-layout-6-line"
                @click.prevent="editor?.commands.addColumnAfter()" />

            <TipTapButton
                title="Delete Column"
                icon="ri-delete-column"
                @click.prevent="editor?.commands.deleteColumn()" />

            <TipTapDivider />

            <TipTapButton
                title="Add Row Before"
                icon="ri-insert-row-top"
                @click.prevent="editor?.commands.addRowBefore()" />

            <TipTapButton
                title="Add Row After"
                icon="ri-insert-row-bottom"
                @click.prevent="editor?.commands.addRowAfter()" />

            <TipTapButton
                title="Delete Row"
                icon="ri-delete-row"
                @click.prevent="editor?.commands.deleteRow()" />

            <TipTapDivider />

            <TipTapButton
                title="Merge Cells"
                icon="ri-merge-cells-horizontal"
                @click.prevent="editor?.commands.mergeCells()" />

            <TipTapButton
                title="Split Cell"
                icon="ri-split-cells-horizontal"
                @click.prevent="editor?.commands.splitCell()" />

            <TipTapButton
                title="Alternate Column Header"
                icon="ri-archive-drawer-line"
                @click.prevent="editor?.commands.toggleHeaderColumn()" />

            <TipTapButton
                title="Alternate Row Header"
                icon="ri-archive-drawer-fill"
                @click.prevent="editor?.commands.toggleHeaderRow()" />

            <TipTapButton
                title="Alternate Cell Header"
                icon="ri-split-cells-vertical"
                @click.prevent="editor?.commands.toggleHeaderCell()" />

            <TipTapButton
                title="Merge or Split"
                icon="ri-merge-cells-vertical"
                @click.prevent="editor?.commands.mergeOrSplit()" />

            <TipTapDivider />

            <TipTapButton
                title="Go to Next Cell"
                icon="ri-arrow-right-s-line"
                @click.prevent="editor?.chain().focus().goToNextCell().run()" />

            <TipTapButton
                title="Go to Previous Cell"
                icon="ri-arrow-left-s-line"
                @click.prevent="editor?.chain().focus().goToPreviousCell().run()" />

            <TipTapDivider />

            <TipTapButton
                title="Fix Table"
                icon="ri-settings-line"
                @click.prevent="editor?.commands.fixTables()" />

            <TipTapButton
                title="Delete Table"
                icon="ri-delete-bin-2-line"
                @click.prevent="editor?.commands.deleteTable()" />
        </div>
        <editor-content v-show="!codeMode" :editor="editor" class="tiptap-editor" />

        <textarea
            v-show="codeMode"
            :id="editorId"
            v-model="htmlContent"
            class="tiptap-code-mode"
            @input="syncEditor">
        </textarea>
    </div>
</template>

<style>
    @import url('https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css');
    .tiptap-editor {
        overflow: auto;
        position: relative;
        padding-top: 0.25rem;
        padding-bottom: 0.25rem;
        padding-left: 0.25rem;
        padding-right: 0.25rem;
        margin: 0;
        border-bottom-right-radius: 0.375rem;
        border-bottom-left-radius: 0.375rem;
        border-width: 1px;
        border-style: solid;
        border-color: var(--border-color);
        font-size: 0.75rem;
        line-height: 1rem;
        letter-spacing: 0;
        line-height: 1.25rem;
        overflow-wrap: break-word;
        background-repeat: no-repeat;
        max-height: 240px;
    }
    .tiptap-editor .tiptap:focus-visible {
        outline: 2px solid var(--blue);
        outline-offset: 2px;
    }
    .tiptap-code-mode {
        border-bottom-right-radius: 0.375rem;
        border-bottom-left-radius: 0.375rem;
        border-width: 1px;
        border-style: solid;
        width: 100%;
        font-size: 0.75rem;
        line-height: 1rem;
        letter-spacing: 0;
        line-height: 1.25rem;
    }
    .tiptap-editor-toolbar1 {
        display: flex;
        padding: 0.5rem;
        margin-top: 0.25rem;
        flex-wrap: wrap;
        flex: none;
        align-items: center;
        border-top-left-radius: 0.375rem;
        border-top-right-radius: 0.375rem;
        border-top-width: 1px;
        border-style: solid;
        border-color: var(--border-color);
        font-size: 1.25rem;
        line-height: 1.75rem;
        letter-spacing: 0;
        line-height: 1.25rem;
        overflow-wrap: break-word;
        background-repeat: no-repeat;
    }
    .tiptap-editor-toolbar2 {
        display: flex;
        padding: 0.5rem;
        margin-left: 0;
        margin-right: 0;
        margin-bottom: 0;
        flex-wrap: wrap;
        flex: none;
        align-items: center;
        border-top-width: 1px;
        border-style: solid;
        border-color: var(--border-color);
        font-size: 1.25rem;
        line-height: 1.75rem;
        letter-spacing: 0;
        line-height: 1.25rem;
        overflow-wrap: break-word;
        background-repeat: no-repeat;
    }
    .app-tip-tap-error {
        border: 1px solid #e5484d;
        border-radius: 3px;
    }

    .ProseMirror {
        min-height: 120px;
        padding: 5px 10px;
        background-color: #f5f8fa;
    }

    .ProseMirror p {
        margin: 1em 0;
    }

    .ProseMirror a {
        text-decoration: underline;
        color: #3451b2;
    }

    /* Heading Sizes, See: https://tailwindcss.com/docs/font-size */

    .ProseMirror h1 {
        font-size: 2.25rem; /* 36px */
        line-height: 2.5rem; /* 40px */
    }

    .ProseMirror h2 {
        font-size: 1.875rem; /* 30px */
        line-height: 2.25rem; /* 36px */
    }

    .ProseMirror h3 {
        font-size: 1.5rem; /* 24px */
        line-height: 2rem; /* 32px */
    }

    .ProseMirror h4 {
        font-size: 1.25rem; /* 20px */
        line-height: 1.75rem; /* 28px */
    }

    .ProseMirror ul {
        display: block;
        list-style-type: disc;
        padding-left: 0.8rem;
    }

    .ProseMirror ul li {
        display: list-item;
    }

    .ProseMirror ol {
        display: block;
        list-style: decimal;
        padding-left: 0.8rem;
    }

    .ProseMirror table {
        border-collapse: collapse;
        table-layout: fixed;
        width: 100%;
        margin: 0;
        overflow: hidden;
    }

    .ProseMirror table td,
    .ProseMirror table th {
        min-width: 1em;
        border: 2px solid #363a3f;
        padding: 3px 5px;
        vertical-align: top;
        box-sizing: border-box;
        position: relative;
    }

    .ProseMirror table th > * {
        margin-bottom: 0;
    }

    .ProseMirror th {
        font-weight: bold;
        text-align: left;
        background-color: #18191b;
    }

    .ProseMirror .selectedCell:after {
        z-index: 2;
        position: absolute;
        content: '';
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background: rgba(200, 200, 255, 0.4);
        pointer-events: none;
    }

    .ProseMirror .column-resize-handle {
        position: absolute;
        right: -2px;
        top: 0;
        bottom: -2px;
        width: 4px;
        background-color: #212225;
        pointer-events: none;
    }

    .ProseMirror p {
        margin: 0;
    }

    .tableWrapper {
        padding: 1rem 0;
        overflow-x: auto;
    }

    .resize-cursor {
        cursor: ew-resize;
        cursor: col-resize;
    }
</style>
