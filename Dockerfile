FROM node AS build
WORKDIR /opt/raycaster
COPY gulpfile.js gulpfile.js
COPY tsconfig.json tsconfig.json
COPY package.json package.json
COPY src src
RUN npm install
RUN npx gulp

FROM nginx AS serve
COPY --from=build /opt/raycaster/dist /usr/share/nginx/html