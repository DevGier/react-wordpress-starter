<?php

if (!defined('ABSPATH')) {
    exit;
}

/**
 * Remove all default template redirects
 */
remove_action('template_redirect', 'redirect_canonical');

/**
 * Remove redirects and redirect all requests to index.php
 */
function remove_redirects()
{
    add_rewrite_rule('^/(.+)/?', 'index.php', 'top');
}
add_action('init', 'remove_redirects');

/**
 * Add module support to react-wordpress-theme-starter-js
 */
function add_type_attribute($tag, $handle, $src)
{
    if ('react-wordpress-theme-starter-js' !== $handle) {
        return $tag;
    }
    $tag = '<script type="module" src="' . esc_url($src) . '"></script>';
    return $tag;
}
add_filter('script_loader_tag', 'add_type_attribute', 10, 3);

/**
 * Load React scripts
 */
function load_react_scripts()
{
    if (file_exists(get_stylesheet_directory() . '/dist/main.js')) {
        wp_enqueue_script(
            'react-wordpress-theme-starter-js',
            get_stylesheet_directory_uri() . '/dist/main.js',
            array('jquery'),
            filemtime(get_stylesheet_directory() . '/dist/main.js'),
            true
        );
    }
}
add_action('wp_enqueue_scripts', 'load_react_scripts', 100);
