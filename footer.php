<?php if (preg_match("/(.*.local|.*.loc|localhost:.*)/i", $_SERVER['HTTP_HOST'])) : ?>
    <script>
        const GRAPHQL_API = '<?= get_site_url() ?>/graphql';
    </script>
    <script type="module">
        import RefreshRuntime from 'http://localhost:5173/@react-refresh'
        RefreshRuntime.injectIntoGlobalHook(window)
        window.$RefreshReg$ = () => {}
        window.$RefreshSig$ = () => (type) => type
        window.__vite_plugin_react_preamble_installed__ = true
    </script>
    <script type='module' src='http://localhost:5173/src/main.tsx'></script>
    <script type='module' src='http://localhost:5173/@vite/client'></script>
<?php endif; ?>

<?php wp_footer(); ?>
</body>

</html>