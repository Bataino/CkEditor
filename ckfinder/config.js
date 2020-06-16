/*
 Copyright (c) 2007-2019, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.html or https://ckeditor.com/sales/license/ckfinder
 */

var config = {};
var editor = CKEDITOR.replace( 'editor1' );
CKFinder.setupCKEditor( editor );
CKFinder.setupCKEditor();
CKEDITOR.replace( 'editor1' );
var editor = CKEDITOR.replace( 'editor1' );
CKFinder.setupCKEditor( editor, {
    skin: 'jquery-mobile',
    swatch: 'b',
    onInit: function( finder ) {
        finder.on( 'files:choose', function( evt ) {
            var file = evt.data.files.first();
            console.log( 'Selected: ' + file.get( 'name' ) );
        } );
    }
} );
var editor = CKEDITOR.replace( 'editor1' );
CKFinder.setupCKEditor( editor, null, { type: 'Files' } );
var editor = CKEDITOR.replace( 'editor1' );
CKFinder.setupCKEditor( editor, null, { type: 'Files', currentFolder: '/archive/' });
CKEDITOR.replace( 'editor1', {
    filebrowserBrowseUrl: '/ckfinder/ckfinder.html',
    filebrowserUploadUrl: '/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Files'
} );


// Set your configuration options below.
config.filebrowserUploadMethod = 'form'; // Added for file browser
// Examples:
// config.language = 'pl';
// config.skin = 'jquery-mobile';

CKFinder.define( config );
