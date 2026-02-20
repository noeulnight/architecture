# Architecture

Homelab architecture visualization built with React + Vite + React Flow.

## Local Development

```bash
pnpm install
pnpm dev
```

## Build

```bash
pnpm build
pnpm preview
```

## Docker

### Build image

```bash
docker build -t architecture:latest .
```

### Run with nginx

```bash
docker run --rm -p 8080:80 architecture:latest
```

Then open http://localhost:8080.

## GitHub Actions Docker Publish

Workflow file:
- `.github/workflows/docker.yml`

Behavior:
- Triggers on push to `main` (and manual dispatch)
- Builds Docker image from `Dockerfile`
- Pushes image to GHCR:
  - `ghcr.io/<owner>/<repo>:latest`
  - `ghcr.io/<owner>/<repo>:sha-<commit>`

Requirements:
- GitHub Packages permission enabled for the repository
- Uses built-in `GITHUB_TOKEN` for GHCR login
