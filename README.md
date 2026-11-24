# Caseking Brand Space

A static team landing page and strategy library built from the supplied CK Brand Space materials. No installation, build step, account, or API key is required.

## Publish with GitHub Pages

1. Create a GitHub repository, for example `ck-brand-space`.
2. Upload **the contents of this folder** to the repository's top level. `index.html`, the seven strategy pages, both stylesheets, `brand-space.js`, `images/`, and `resources/` must sit together. Do not upload only the ZIP file or put everything inside an extra folder. Include `.nojekyll` if your upload method supports dotfiles.
3. Open **Settings > Pages**. Under **Build and deployment**, choose **Deploy from a branch**, select your publishing branch (usually **main**) and **/(root)**, then save.
4. GitHub shows the published address in the Pages settings. Open that link, check the guides and downloads, then share it with the CK team. Updates to the publishing branch update the site.

GitHub's instructions: [Configure a publishing source](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

## Team access

This package contains strategy and working concepts for CK review. A normal GitHub Pages site is publicly accessible, even when its source repository is private. A CK-only Pages site requires the organization's supported private publishing setup; GitHub documents this for GitHub Enterprise Cloud. Confirm the intended site visibility in your organization's Pages settings before sharing internal material publicly.

Every HTML page requests `noindex, nofollow`. This asks search engines not to index the page; it does not restrict access or protect the downloadable files. No login or password gate is implemented.

See [Creating a GitHub Pages site](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site) and [Changing site visibility](https://docs.github.com/en/enterprise-cloud@latest/pages/getting-started-with-github-pages/changing-the-visibility-of-your-github-pages-site).

## Preview and edit

Open `index.html` in a browser for a quick local preview. The website also works at a project URL such as `https://YOUR-ORGANIZATION.github.io/ck-brand-space/`; all website links and assets use relative paths.

- `index.html`: team landing page, library, and download links.
- `brand-space.css`: landing page design, shared navigation, responsive layouts, and print styles.
- `brand-space.js`: mobile navigation, document section menus, back-to-top behavior, and reading progress.
- `caseking-brand-platform-landing.css`: styling of the supplied strategy pages.
- `caseking-*.html`: the seven strategy pages. Source copy is retained, with shared navigation and heading improvements.
- `images/`: supplied brand images, including the official October 2026 horizontal white and black logos. The white logo is used on the site's dark backgrounds. Its transparent margins are framed with CSS; the original artwork is preserved. The full architecture reference remains in the platform guide.
- `resources/`: original PDF, Word, and Markdown downloads, copied without content changes.

The site uses local assets and system fonts, with no tracking, cookies, external scripts, or runtime dependencies. JavaScript enhances navigation; all guides and downloads remain accessible without it. Review figures, proposed budget ranges, concepts, and claims in the supplied strategy pages with the relevant CK owners before treating them as current approved policy.

The original source files were not modified. Check the repository's **Settings > Pages** screen for its current deployment status and published address.
