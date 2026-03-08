FROM rust:alpine AS builder

RUN apk add --no-cache musl-dev gcc

WORKDIR /build

# Copy workspace manifests first for dependency caching.
COPY Cargo.toml Cargo.lock ./
COPY masochist-lib/Cargo.toml masochist-lib/Cargo.toml
COPY masochist-build/Cargo.toml masochist-build/Cargo.toml
COPY masochist-server/Cargo.toml masochist-server/Cargo.toml

# Create stub source files so cargo can resolve dependencies.
RUN mkdir -p masochist-lib/src masochist-build/src masochist-server/src && \
    echo 'pub mod assets; pub mod content; pub mod git; pub mod index; pub mod templates;' > masochist-lib/src/lib.rs && \
    echo 'pub const CSS_SOURCE: &str = ""; pub const JS_SOURCE: &str = "";' > masochist-lib/src/assets.rs && \
    touch masochist-lib/src/content.rs masochist-lib/src/git.rs masochist-lib/src/index.rs masochist-lib/src/templates.rs && \
    echo "fn main() {}" > masochist-build/src/main.rs && \
    echo "fn main() {}" > masochist-server/src/main.rs

# Build dependencies only (cached layer).
RUN --mount=type=cache,target=/build/target \
    --mount=type=cache,target=/usr/local/cargo/registry \
    cargo build --release --package masochist-server 2>&1 || true

# Copy real source files.
COPY masochist-lib/src masochist-lib/src
COPY masochist-server/src masochist-server/src
COPY masochist-build/src masochist-build/src

# Force rebuild of our crates.
RUN touch masochist-lib/src/lib.rs masochist-server/src/main.rs

RUN --mount=type=cache,target=/build/target \
    --mount=type=cache,target=/usr/local/cargo/registry \
    cargo build --release --package masochist-server && \
    cp target/release/masochist-server /masochist-server

# Runtime stage.
FROM alpine:latest

RUN apk add --no-cache ca-certificates git

COPY --from=builder /masochist-server /usr/local/bin/masochist-server

# The content repo will be mounted at /srv/content.
ENV MASOCHIST_REPO=/srv/content
ENV MASOCHIST_PUBLIC=/var/www/public
ENV ROCKET_ADDRESS=0.0.0.0
ENV ROCKET_PORT=8000

EXPOSE 8000

CMD ["masochist-server"]
