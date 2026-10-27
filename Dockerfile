FROM node:lts as project_build

WORKDIR /app

COPY package.json package-lock.json .
RUN npm ci

COPY . .

RUN npm run build

FROM nginx:alpine as project_deploy

COPY --from=project_build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
