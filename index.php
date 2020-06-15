<!DOCTYPE html>
<html>
   <head>
     <title>Custom file upload in CKEditor with PHP</title>
     <!-- CKEditor JS -->
     <script src="ckeditor/ckeditor.js" type="text/javascript" ></script>
   </head>
   <body>

     <!-- Editor -->
     <textarea id='editor'></textarea>

     <!-- Script -->
     <script type="text/javascript">
     CKEDITOR.replace( 'editor', {
        height: 300,
        filebrowserUploadUrl: "/ckeditor/uploads/ajaxfile.php?type=file",
        filebrowserImageUploadUrl: "/ckeditor/uploads/ajaxfile.php?type=image",

     } );
     </script>
  
   </body>
</html>