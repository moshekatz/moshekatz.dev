const fs = require('fs');

(async () => {
  const { globby } = await import('globby');
  const prettier = await import('prettier');

  const prettierConfig =
    await prettier.default.resolveConfig('./.prettierrc.js');
  const pages = await globby([
    'pages/*.js',
    '_content/**/*.mdx',
    '!pages/_*.js',
    '!pages/api',
  ]);

  const sitemap = `
        <?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${pages
              .map((page) => {
                const path = page
                  .replace('pages', '')
                  .replace('_content', '')
                  .replace('.js', '')
                  .replace('.mdx', '');
                const route = path === '/index' ? '' : path;

                return `
                        <url>
                            <loc>${`https://moshekatz.dev${route}`}</loc>
                        </url>
                    `;
              })
              .join('')}
        </urlset>
    `;

  const formatted = await prettier.default.format(sitemap, {
    ...prettierConfig,
    parser: 'html',
  });

  fs.writeFileSync('public/sitemap.xml', formatted);
})();
