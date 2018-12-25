<?php
/**
 * The template for displaying all pages
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package bd_install
 */

get_header();
?>

	<div class="content-page">
		<div class="breadcrumbs">
			<div class="block--paragraph">
				<?php
					if ( function_exists('yoast_breadcrumb') ) {
					  yoast_breadcrumb( '<p id="breadcrumbs">','</p>' );
					}
				?>
			</div>
			<div class="block--name">

				<?php 

					$postType = get_queried_object();
					echo esc_html($postType->labels->name);
				 ?>

			</div>
		</div>
		<div class="katalog">
			
			<?php

			$taxonomy = 'baner';
			$terms = get_terms( 'baner', array( 'parent' => 0 ) ); // Get all terms of a taxonomy

			if ( $terms && !is_wp_error( $terms ) ) :
			?>
			<?php foreach ( $terms as $term ) { 
				$image = get_field('category_image', $term);
			?>
				<a class="katalog--child grid-cell" href="<?php echo get_term_link($term->slug, $taxonomy); ?>">
					<div class="katalog--child-image"><img src="<?php echo $image['url']; ?>" /></div>
					<div class="block--h3"><?php echo $term->name; ?></div>
				</a>		
			<?php } ?>	
			<?php endif;?>

		</div>
	</div><!-- #main -->

<?php
get_footer();