import {createDialog} from './configuration-dialog/configuration-dialog.js'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


createDialog().then( config => {
	return ClassicEditor
		.create( document.querySelector( '.editor' ), {
			ckbox: {
				tokenUrl: config.ckboxTokenUrl
			}, dataProcessor: {
				htmlToData(viewFragment) {
						const writer = new this.data.view.DocumentFragmentWriter();
						viewFragment.forEach(child => {
								if (child.is('paragraph')) { // paragraph인 경우에만 처리
										child.children.forEach(subChild => {
												writer.insert(subChild);
										});
								} else {
										writer.insert(child);
								}
						})}}})
		.then( editor => {
			window.editor = editor;
		} )
		.catch( handleSampleError );
} );

function handleSampleError( error ) {
	const issueUrl = 'https://github.com/ckeditor/ckeditor5/issues';

	const message = [
		'Oops, something went wrong!',
		`Please, report the following error on ${ issueUrl } with the build id "b1ot7jcjao54-nohdljl880ze" and the error stack trace:`
	].join( '\n' );

	console.error( message );
	console.error( error );
}
