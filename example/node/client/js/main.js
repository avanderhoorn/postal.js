var socket;

require.config( {
	paths : {
		'text' : 'lib/requirejs-text-1.0.2',
		'backbone' : 'lib/backbone',
		'underscore' : 'lib/underscore',
		'machina' : 'lib/machina',
		'postal' : 'lib/postal',
		'amplify' : 'lib/amplify',
		'bus' : 'infrastructure/bus'
	},
	baseUrl : 'js'
} );

require( [ 'backbone', 'jquery', 'underscore', 'amplify', 'machina', 'postal', 'lib/postal.diagnostics', 'infrastructure/postal.socket-client' ],
	function ( Backbone, $, _, amplify, machina, postal ) {

		// for debugging purposes ONLY for now:
		window.postal = postal;

		postal.configuration.getSessionIdAction = function ( callback ) {
			callback( amplify.store( "postal.session" ) || {} );
		};

		postal.configuration.setSessionIdAction = function ( info, callback ) {
			amplify.store( "postal.session", info );
			callback( amplify.store( "postal.session", info ) );
		};

		require( [ 'infrastructure/app' ], function ( app ) {
			window.app = app;
		} );

	} );
