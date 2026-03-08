# executor-image/Dockerfile
FROM debian:bookworm-slim

RUN apt-get update && apt-get install -y \
    g++ \
    && rm -rf /var/lib/apt/lists/*

# Non-root user — critical for security
RUN useradd -m -u 1001 -s /bin/sh executor

WORKDIR /sandbox

COPY run.sh /usr/local/bin/run.sh
RUN chmod +x /usr/local/bin/run.sh

USER executor
ENTRYPOINT ["/usr/local/bin/run.sh"]