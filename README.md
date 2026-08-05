# Cloudberry Pine website

Static website for Polyzonia, PolyPine, and Cloudberry Pine.

- `/` is the Cloudberry Pine homepage.
- `/polyzonia/` is the Polyzonia game page.
- `/polypine.html` is the PolyPine game page.
- `/press.html` links to the Google Drive press kits.

## Content sources

- Polyzonia copy and local media: the [public Polyzonia Presskit Google Drive folder](https://drive.google.com/drive/folders/1MuOmcV0zs2ZBZsEHIVHkL22l8BoEdk6J).
- PolyPine copy, facts, trailer, and quotes were migrated from the legacy press-kit page to the [PolyPine Presskit Google Drive folder](https://drive.google.com/drive/folders/1kh2JWzzhrKiYXECTgkJd9YhEVIePhO_j).

Local website media is intentionally limited to approved files from the Polyzonia and PolyPine press kits. Do not add development captures or generated species art to the site.

## Local check

Serve the directory over HTTP so video and navigation paths behave as they do in production:

```sh
python3 -m http.server 8080
```
