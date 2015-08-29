var elems = document.getElementsByTagName( 'button' );

  for ( var i = 0; i < elems.length; i++ ) {

    elems[ i ].addEventListener( 'click', function(e){
      e.preventDefault();
      alert( 'I am button #' + i );
    }, 'false' );

  }

