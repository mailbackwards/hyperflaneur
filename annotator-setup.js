var optionsRichText = {
  tinymce: {
          selector: "li.annotator-item textarea",
          plugins: "media image insertdatetime link code",
          menubar: false,
          toolbar_items_size: 'small',
          extended_valid_elements : "iframe[src|frameborder|style|scrolling|class|width|height|name|align|id]",
          toolbar: "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image media | code ",
      }
};
var annotator = $('#main-content').annotator().annotator('setupPlugins', {}, {
      Filter: false,
      AnnotateItPermissions: {
      	showViewPermissionsCheckbox: false,
      	showEditPermissionsCheckbox: false,
      }
});
annotator.annotator('addPlugin', 'RichText', optionsRichText);