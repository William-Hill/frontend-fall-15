var elems = document.getElementsByTagName( 'button' );

for ( var i = 0; i < elems.length; i++ ) {

    (function( lockedInIndex ){

      elems[ i ].addEventListener( 'click', function(e){
        e.preventDefault();
        alert( 'I am button #' + lockedInIndex );
      }, 'false' );

    })( i );

    } 