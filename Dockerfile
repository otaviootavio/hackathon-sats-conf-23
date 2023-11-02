FROM node:14
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install
COPY . .
EXPOSE 5173
EXPOSE 3000
CMD ["yarn", "run", "dev"]