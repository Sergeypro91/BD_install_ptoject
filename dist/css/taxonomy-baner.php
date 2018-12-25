<?php
/**
 * The template for displaying archive pages
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package bd_install
 */

get_header();
?>

<?php
// taxonomy-type.php

// set variables
$term = get_term_by( 'slug', get_query_var( 'term' ), get_query_var( 'taxonomy' ) );
$tax = get_query_var( 'taxonomy' );

?>
<div class="main">
	<div class="breadcrumbs">
		<div class="block--paragraph">
			<?php
				if ( function_exists('yoast_breadcrumb') ) {
				  yoast_breadcrumb( '<p id="breadcrumbs">','</p>' );
				}
			?>
		</div>
		<div class="block--name"><?php echo $term->name; ?></div>
	</div>
	<div class="market">
			<?php

			// if term has children
			if (get_term_children($term->term_id, $tax) != null) {

			// get child terms
			$term_children = get_terms(
			$tax, 
			array(
			'child_of' => $term->term_id,
			)
			);

			// loop through them
			foreach ($term_children as $term_child) {
				$image = get_field('category_image', $term_child);
				// print title
				echo '<div class="market--manufact"><div class="market--manufact-logo"><img src="' . $image['url'] . '" /></div></div>';

			// change query
			query_posts(array(
			'type' => $term_child->slug,
			)
			);

			// loop through posts
			if (have_posts()) : 
				while ( have_posts() ) :
					the_post();

					/*
					 * Include the Post-Type-specific template for the content.
					 * If you want to override this in a child theme, then include a file
					 * called content-___.php (where ___ is the Post Type name) and that will be used instead.
					 */
					get_template_part( 'template-parts/content', get_post_type() );
				

				endwhile;

				the_posts_navigation();

				else :

					get_template_part( 'template-parts/content', 'none' );

				endif;
				}

			// if term has no chilren
			} else {

			// loop through posts
			if (have_posts()) :
		        while ( have_posts() ) :
				the_post();

				/*
				 * Include the Post-Type-specific template for the content.
				 * If you want to override this in a child theme, then include a file
				 * called content-___.php (where ___ is the Post Type name) and that will be used instead.
				 */
				get_template_part( 'template-parts/content', get_post_type() );
				

				endwhile;

				the_posts_navigation();

				else :

					get_template_part( 'template-parts/content', 'none' );

				endif;

			}

			?>

	</div>
</div>

<?php
get_footer();