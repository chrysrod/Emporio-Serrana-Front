FROM node:alpine as react-build
WORKDIR /usr/src/app
COPY . ./
RUN npm run build

FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/configfile.template

COPY --from=react-build /usr/src/app/build /usr/share/nginx/html

ENV PORT 80
ENV HOST 0.0.0.0
EXPOSE 80
CMD sh -c "envsubst '\$PORT' < /etc/nginx/conf.d/configfile.template > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"