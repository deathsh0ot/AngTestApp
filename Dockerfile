#Building the app
FROM node:latest as node
WORKDIR /app
COPY /dist/Angapp
RUN npm install
RUN npm run build --prod

EXPOSE 4200

CMD /app/node_modules/.bin/ng serve --host 0.0.0.0 --disableHostCheck