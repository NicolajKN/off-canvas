(function( $ ) {
	'use strict';

	$(function() {

		var menu = {

			isOpen: false,

			toggle: function() {

				if ( this.isOpen ) {
					this.close();
				} else {
					this.open();
				}

			},

			open: function() {

				$( 'body' ).addClass( 'has-off-canvas' );

				$( '.js-off-canvas-toggle' ).addClass( 'is-on' );

				this.isOpen = true;

			},

			close: function() {

				$( 'body' ).removeClass( 'has-off-canvas' );

				$( '.js-off-canvas-toggle' ).removeClass( 'is-on' );

				this.isOpen = false;

			}

		};

		$( document ).on( 'click', '.has-off-canvas .off-canvas__inner', function( e ) {

			// Do not trigger on clicks on the menu
			if ( !$( e.target ).closest( '.off-canvas__menu' ).length ) {

				menu.close();

  		}

		});

		$( '.js-off-canvas-toggle' ).on( 'click', function( e ) {
			e.stopPropagation(); // Sorry world, I shouldn't be doing that.

			var data = $( this ).data();

			// Reveal the correct menu
			if ( !menu.isOpen && 'offCanvasTarget' in data ) {
				$( '.off-canvas__menu' ).hide();
				$( data.offCanvasTarget ).show();
			}

			menu.toggle();

		});

	});

})( jQuery );
