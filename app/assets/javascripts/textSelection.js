String.prototype.removeDashWithLineBreak = function() {
  return this.replace(/-\r?\n|/g,"");
}

String.prototype.replaceLineBreakWithSpace = function() {
  return this.replace(/\r?\n/g," ");
}

var textSelection = {

  init: function(){
    $('.add-snippet').on('click', textSelection.toggleNewSnippetForm);
  },

  captureTextSelection: function(e){
    if(window.getSelection().type === "None"){
      return 0;
    } else{
      return window.getSelection().getRangeAt(0).cloneContents().textContent.trim()
    }
  },

  toggleNewSnippetForm: function(e){
    e.preventDefault();
    var snippet = textSelection.captureTextSelection();
    snippet = snippet.removeDashWithLineBreak();
    snippet = snippet.replaceLineBreakWithSpace();

    if(snippet.length > 0){
      $('#new_snippet').fadeToggle();
    } else{
      console.log("Select some text!")
    }
    $('#snippet_content').val(snippet)
  }
}

$(document).ready(function(){
  textSelection.init();
})