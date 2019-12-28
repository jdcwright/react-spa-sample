# Stage 0, "build-stage", based on Node.js, to build and compile the frontend
FROM node:13-alpine as build

ADD . /build

ARG ENVIRONMENT

WORKDIR /build

RUN npm ci && \
    npm install -g @babel/core @babel/cli && \
    npm run build

# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
FROM nginx:1.15-alpine
COPY --from=build /build/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /build/dist /usr/share/nginx/html
