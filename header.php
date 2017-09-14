<?php
/**
 * Header.
 *
 * @package Alpha
 * @since 0.1
 */
?><!DOCTYPE html>
<html class="no-js" <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<link rel="profile" href="http://gmpg.org/xfn/11" />
	<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>" />
	<?php if ( ! get_option( 'site_icon' ) ) : ?>
		<link href="<?php echo get_template_directory_uri(); ?>/assets/images/favicon.ico" rel="shortcut icon" />
	<?php endif; ?>
	<?php wp_head(); ?>
</head>

<body <?php body_class( 'landing' ); ?>>
	<div id="page-wrapper">

		<header id="header" class="alt">
			<h1><a href="index.html">Alpha</a> by HTML5 UP</h1>
			<nav id="nav">
				<ul>
					<li><a href="index.html">Home</a></li>
					<li>
						<a href="#" class="icon fa-angle-down">Layouts</a>
						<ul>
							<li><a href="generic.html">Generic</a></li>
							<li><a href="contact.html">Contact</a></li>
							<li><a href="elements.html">Elements</a></li>
							<li>
								<a href="#">Submenu</a>
								<ul>
									<li><a href="#">Option One</a></li>
									<li><a href="#">Option Two</a></li>
									<li><a href="#">Option Three</a></li>
									<li><a href="#">Option Four</a></li>
								</ul>
							</li>
						</ul>
					</li>
					<li><a href="#" class="button">Sign Up</a></li>
				</ul>
			</nav>
		</header>

		<section id="banner">
			<h2>Alpha</h2>
			<p>Another fine responsive site template freebie by HTML5 UP.</p>
			<ul class="actions">
				<li><a href="#" class="button special">Sign Up</a></li>
				<li><a href="#" class="button">Learn More</a></li>
			</ul>
		</section>
