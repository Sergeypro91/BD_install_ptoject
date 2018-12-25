<?php
/**
 * The template for displaying all single posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package bd_install
 */

get_header();
?>


	<?php
	while ( have_posts() ) :
		the_post();?>

		<div class="product-page">
			<div class="breadcrumbs">
				<?php
					if ( function_exists('yoast_breadcrumb') ) {
					  yoast_breadcrumb( '<p id="breadcrumbs">','</p>' );
					}
				?>
			</div>
			<div class="page-name"><?php echo the_title(); ?></div>
			<div class="product-page__product">
				<div class="product-page__main-img">
					<img src="<?php echo get_the_post_thumbnail_url(); ?>" alt="" id="current">
				</div>
				<div class="product-page__imgs">
					<img src="<?php echo get_the_post_thumbnail_url(); ?>" alt="">
					<img src="<?php echo get_field('add_image_1'); ?>" alt="">
					<img src="<?php echo get_field('add_image_2'); ?>" alt="">
					<img src="<?php echo get_field('add_image_3'); ?>" alt="">
				</div>

				<div class="product-page__descr">
					<div class="product-page__general">
						<?php echo the_content(); ?>
					</div>
					<div class="product-page__texnical">
						<?php echo get_field('technical_description'); ?>
					</div>
					<div class="product-page__price">
						<?php echo get_field('product_price'); ?>
					</div>
				</div>
			</div>
		</div>

		<?php

	endwhile; // End of the loop.
	?>

<?php
get_footer();
