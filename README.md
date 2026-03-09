# What

This repo contains the source code and content for my website at [wincent.dev].

Content (stored on [the `content` branch](https://github.com/wincent/masochist/tree/content)) is authored in plain-text-friendly markup formats like [Markdown], written to static HTML output files on [the `public` branch](https://github.com/wincent/masochist/tree/public), and a small Rust application (built from [the `main` branch](https://github.com/wincent/masochist/tree/public)) is used to handle dynamic parts of the site, such as [search](https://wincent.dev/search).

> [!NOTE]
> While Masochist is mostly a static site generator, in it's original form it was a dynamic stack built using [React], [Relay], and [GraphQL]. If you're interested in that, take a look at [the `main` branch](https://github.com/wincent/masochist/commits/main/) as it used to exist at commit [b06dbb8488f88b3d](https://github.com/wincent/masochist/tree/b06dbb8488f88b3dbecda2a448a2c2cfb5883224).

## Stack

- [Caddy]: Web server.
- [Docker]: Containers and orchestration.
- [Git]: Content storage.
- [Lightning CSS]: CSS minification.
- [Rust]: Build and backend language.
- [Rocket]: Backend web framework.
- [SWC]: JavaScript minification.
- [dprint]: Code and configuration formatting.

Supporting tools and technologies:

- [Markdown]: Preferred content markup.
- [Neovim], with help from [Corpus]: Content editing.
- [Marked 2]: Local content previewing.

## Prerequisites for local development

- Rust toolchain (install via [rustup](https://rustup.rs/) or with `brew install rust` or similar).
- [Git] (used during build and deployment; the system installed Git[^macosgit] may be adequate, but I use Homebrew's Git, via `brew install git`).
- [dprint] (`brew install dprint`).

[^macosgit]: At the time of writing, macOS ships with Git v2.50.1, but Homebrew has v2.53.0.

## Local setup

The repo uses three branches, each with its own role:

- `main`: Rust source code (this branch).
- `content`: Source content (Markdown, images, static files).
- `public`: Static build output (to be served by Caddy).

Set up worktrees for the other two branches:

```
git worktree add content content
git worktree add public public
```

There are 3 remotes:

- `origin`: Canonical repo at git.wincent.dev.
- `github`: Main mirror at github.com.
- `masochist`: An Amazon EC2 instance where the actual site runs.

## `bin/` utilities

- `bin/build`: Builds the static artifacts.
- `bin/check-format`: Check formatting.
- `bin/clippy`: Run Clippy linter.
- `bin/deploy`: Deploys to EC2.
- `bin/dev`: Runs Docker Compose locally.
- `bin/ecr`: Builds and uploads container images to Amazon [ECR] (Elastic Container Registry)..
- `bin/format`: Fix formatting.
- `bin/prod`: Runs Docker Compose on remote host.

## Building the static site

```
bin/build
```

## Running with Docker Compose (dev mode)

First build the static site, then start the stack:

```
bin/build
bin/dev
```

This starts Caddy on `https://localhost:2443` (self-signed cert) with the Rocket search server proxied behind it.

## Server setup (EC2)

I set up the instance using [Ansible], but the equivalent manual steps are as follows:

### Docker

```
sudo dnf install docker -y
sudo systemctl enable docker
sudo systemctl start docker

# Add ec2-user so we can easily run Docker commands.
sudo usermod -aG docker ec2-user

# Add masochist user because our `bin/prod script runs as masochist,
# and needs to talk to Docker.
sudo usermod -aG masochist ec2-user
```

### Docker Compose

```
sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
```

### IAM role

The instance needs an IAM role with the `AmazonEC2ContainerRegistryReadOnly` policy attached.

### ECR credential helper

Install the credential helper so Docker can authenticate with ECR automatically:

```
sudo dnf install amazon-ecr-credential-helper -y
```

Then configure Docker to use it:

```
mkdir -p ~/.docker
cat > ~/.docker/config.json << 'EOF'
{
  "credsStore": "ecr-login"
}
EOF
```

### ECR repository

Create the repository (one-time).

## Deploying

```
aws login
aws ecr describe-registry --region us-east-1 --query registryId --output text
export ECR_ACCOUNT_ID=...
```

Push all branches, build and upload the Docker image, then deploy:

```
git push masochist main content public
bin/ecr build
bin/ecr upload
bin/deploy
```

Each step is independent and can be retried on failure.

## Project structure

- `masochist-lib/`: Shared library (content parsing, git interaction, indexing).
- `masochist-build/`: Static site generator (depends on comrak for Markdown).
- `masochist-server/`: Rocket search server (no Markdown rendering at runtime).
- `ops/`: Caddyfile, Dockerfiles, Docker Compose configs.
- `bin/`: Build, dev, and deploy scripts.
- `public/` (worktree): Public branch (build output, served by Caddy).
- `content/` (worktree): Content branch (Markdown, images, static files).

## FAQ

### Why the name "Masochist"?

Please see the introductory blog post, "[Introducing Masochist](https://wincent.dev/blog/masochist)".

[Ansible]: https://docs.ansible.com
[Caddy]: https://caddyserver.com
[Corpus]: https://github.com/wincent/corpus
[Docker]: https://www.docker.com
[ECR]: https://docs.aws.amazon.com/ecr/
[Git]: https://git-scm.com/
[GraphQL]: http://graphql.org/
[Lightning CSS]: https://lightningcss.dev
[Markdown]: https://en.wikipedia.org/wiki/Markdown
[Marked 2]: http://marked2app.com/
[Neovim]: https://github.com/neovim/neovim
[React]: http://facebook.github.io/react/
[Relay]: http://facebook.github.io/relay/
[Rocket]: https://rocket.rs
[Rust]: https://rust-lang.org
[SWC]: https://swc.rs
[dprint]: https://dprint.dev
[wincent.dev]: https://wincent.dev/
