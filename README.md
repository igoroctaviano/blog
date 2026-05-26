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

## Deploy

O site usa `base: /blog`. Publique o conteúdo de `dist/` no caminho `/blog` do seu hosting (por exemplo, GitHub Pages com `pathPrefix` ou pasta `blog` no repositório do site principal).

Artigos ficam em `src/content/blog/` como arquivos Markdown com frontmatter `title`, `description` e `date`.
