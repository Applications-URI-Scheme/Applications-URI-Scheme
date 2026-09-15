# Applications URI Scheme website

Built with VuePress 2 and the default theme.

## Development

Use Node.js 22.18.0 or newer (Node.js 24 is used in CI), with npm installed.

```sh
npm ci
npm run docs:dev
```

## Production build

```sh
npm run docs:build
```

The generated site is in `docs/.vuepress/dist`. GitHub Actions builds and
deploys pushes to `master` to the existing `gh-pages` branch.

## VuePress versions

VuePress 2 is still a release candidate. Core and the Vite bundler are pinned
to `2.0.0-rc.31`; the default theme, search, and PWA plugins are pinned to the
compatible `2.0.0-rc.134` release. Update these together and commit the npm
lockfile. The npm `latest` tag still points to VuePress 1; VuePress 2 uses `next`.

The theme provides back-to-top support. PWA update notifications are configured
inside the PWA plugin, replacing the separate legacy popup plugin. The service
worker keeps its existing `service-worker.js` URL so deployed clients can update.
The Vite configuration also works around a load-event race in
`register-service-worker` 1.7.2 when the PWA plugin imports it dynamically.

References: [VuePress changelog](https://github.com/vuepress/core/blob/main/CHANGELOG.md)
and [PWA configuration](https://ecosystem.vuejs.press/plugins/pwa/pwa/config.html).
