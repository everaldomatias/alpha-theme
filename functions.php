<?php

/**
 * Load site scripts.
 *
 * @since 0.0.1
 */
function alpha_enqueue_scripts() {
	$template_url = get_template_directory_uri();

	// Loads Alpha main stylesheet.
	wp_enqueue_style( 'alpha-style', get_stylesheet_uri(), array(), null, 'all' );

	// jQuery.
	wp_enqueue_script( 'jquery' );

	// General scripts.
	if ( defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG ) {
		// Main jQuery.
		wp_enqueue_script( 'odin-main', $template_url . '/assets/js/main.js', array(), null, true );
	} else {
		// Grunt main file with Bootstrap, FitVids and others libs.
		wp_enqueue_script( 'odin-main-min', $template_url . '/assets/js/main.min.js', array(), null, true );
	}

}

add_action( 'wp_enqueue_scripts', 'alpha_enqueue_scripts', 1 );

/**
 * Alpha custom stylesheet URI.
 *
 * @since  0.0.1
 *
 * @param  string $uri Default URI.
 * @param  string $dir Stylesheet directory URI.
 *
 * @return string      New URI.
 */
function alpha_stylesheet_uri( $uri, $dir ) {
	return $dir . '/assets/css/style.css';
}

add_filter( 'stylesheet_uri', 'alpha_stylesheet_uri', 10, 2 );
