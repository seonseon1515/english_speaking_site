// <path-to-your-build>/src/ckeditor.ts or file containing editor configuration if you are integrating an editor from source.

// The editor creator to use.
import  Editor  from 'ckeditor5-custom-build/build/ckeditor';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import '../css/common_css/WriteComponent.scss'

export const TextEditor = ({setData}) => {
    const edrtorConfiguration = {
		toolbar: {
			items: [
				'heading',
				'|',
				'bold',
				'italic',
				'link',
				'bulletedList',
				'numberedList',
				'|',
				'outdent',
				'indent',
				'imageUpload',
				'blockQuote',
				'|',
				'insertTable',
				'mediaEmbed',
				'undo',
				'redo',
				'alignment',
				'codeBlock',
				'code',
				'findAndReplace',
				'fontBackgroundColor',
				'fontColor',
				'fontSize',
				'fontFamily',
				'highlight',
				'horizontalLine',
				'htmlEmbed',
				'imageInsert',
				'pageBreak',
				'selectAll',
				'removeFormat',
				'sourceEditing',
				'specialCharacters',
				'strikethrough',
				'restrictedEditingException',
				'subscript',
				'style',
				'superscript',
				'textPartLanguage',
				'todoList',
				'underline'
			]
		},
		language: 'ko',
		image: {
			toolbar: [
				'imageTextAlternative',
				'toggleImageCaption',
				'imageStyle:inline',
				'imageStyle:block',
				'imageStyle:side',
				'linkImage'
			]
		},
		table: {
			contentToolbar: [
				'tableColumn',
				'tableRow',
				'mergeTableCells',
				'tableCellProperties',
				'tableProperties'
			]
		}, 
    };

    return (
        <CKEditor 
        editor={TextEditor}
        config={edrtorConfiguration}
				data
        onChange={(event, editor) => {
					const data = editor.getData();
            setData(data); // 에디터 작성 내용 저장 
        }}
        />
    )
}

export default TextEditor;