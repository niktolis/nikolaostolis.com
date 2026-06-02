FROM mcr.microsoft.com/devcontainers/javascript-node:1-22-bookworm

ARG STARSHIP_VERSION=v1.23.0

ENV DEBIAN_FRONTEND=noninteractive

RUN apt-get update \
    && apt-get install -y --no-install-recommends \
        fish \
        jq \
        tree \
        less \
        ripgrep \
        fd-find \
        shellcheck \
        dnsutils \
        iputils-ping \
        procps \
        curl \
        ca-certificates \
    && ln -sf /usr/bin/fdfind /usr/local/bin/fd \
    && grep -qxF /usr/bin/fish /etc/shells || echo /usr/bin/fish >> /etc/shells \
    && chsh -s /usr/bin/fish node \
    && rm -rf /var/lib/apt/lists/*

RUN curl -fsSL https://starship.rs/install.sh | sh -s -- \
        --yes \
        --version "${STARSHIP_VERSION}" \
        --bin-dir /usr/local/bin

RUN npm install -g firebase-tools@15.19.0

WORKDIR /workspaces/nikolaostolis.com
