# MaisonChic Vercel Static Build

This project is a static Vercel-ready mirror of `https://maisonchic.shop/`.

## Deploy

1. Upload this folder to GitHub.
2. Import the GitHub repository in Vercel.
3. Vercel will run `npm run build`.
4. The static site is served from `dist/`.

## Local Preview

```bash
npm start
```

Then open `http://127.0.0.1:4189/`.

## Notes

- Same-origin pages, product images, and product videos were mirrored into `public/`.
- Product buy buttons preserve the original checkout redirect URLs embedded on the live product pages.
- The live `coupe-du-monde` page references three image URLs that return 404 on the original website too; the working product image was mirrored.
