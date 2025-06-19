FROM node:20-alpine AS build

ARG DATABASE_DIRECT_URL
ARG DATABASE_URL

WORKDIR /calcom

RUN set -eux;
RUN ln -s /usr/lib/libssl.so.3 /lib/libssl.so.3

ENV NODE_ENV="production"
ENV NODE_OPTIONS="--max-old-space-size=8192"
ENV DATABASE_DIRECT_URL=${DATABASE_DIRECT_URL}
ENV DATABASE_URL=${DATABASE_URL}
ARG VAPID_PUBLIC_KEY
ARG VAPID_PRIVATE_KEY
ARG VAPID_SUBJECT
ENV VAPID_PUBLIC_KEY=${VAPID_PUBLIC_KEY}
ENV VAPID_PRIVATE_KEY=${VAPID_PRIVATE_KEY}
ENV VAPID_SUBJECT=${VAPID_SUBJECT}

COPY . .

RUN yarn install

# Build prisma schema and make sure that it is linked to v2 node_modules
RUN yarn workspace @calcom/api-v2 run generate-schemas
RUN rm -rf apps/api/v2/node_modules
RUN yarn install

RUN yarn workspace @calcom/api-v2 run build

EXPOSE 80

CMD [ "yarn", "workspace", "@calcom/api-v2", "start:prod"]
