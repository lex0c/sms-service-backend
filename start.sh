#!/bin/bash
npm ci --no-cache && \
cd /var/www/api && npm run prod
