# Blog — Igor Octaviano

Blog estático em [Astro](https://astro.build), publicado em [igoroctaviano.com/blog](https://igoroctaviano.com/blog).

## Desenvolvimento

```bash
npm install
npm run dev
```

Abre em `http://localhost:4321/blog/`.

## Build

```bash
npm run build
```

A saída fica em `dist/`. Para pré-visualizar:

```bash
npm run preview
```

## Deploy (GitHub Pages)

Este repositório usa **Astro**, não Jekyll. No GitHub:

1. **Settings → Pages → Build and deployment**
2. Set **Source** to **GitHub Actions** (not “Deploy from a branch” — that runs Jekyll and will fail on `.astro` files).

Pushes to `master`/`main` run `.github/workflows/deploy.yml`, which runs `npm run build` and publishes `dist/`.

O site usa `base: /blog`. Para outro hosting, publique o conteúdo de `dist/` no caminho `/blog`.

Artigos ficam em `src/content/blog/` como arquivos Markdown com frontmatter `title`, `description` e `date`.
