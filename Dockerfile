# 第一阶段：构建阶段
FROM node:22.12.0-alpine AS build

WORKDIR /app
COPY package*.json ./
RUN npm install && npm cache clean --force
COPY . .
RUN npm run build

# 第二阶段：运行阶段
FROM node:22.12.0-alpine

WORKDIR /app
COPY --from=build /app/.next ./.next
#s复制 public 目录
COPY --from=build /app/public ./public
COPY package*.json ./
RUN npm install --production && npm install next
RUN npm cache clean --force

# 将 node_modules/.bin 添加到 PATH
ENV PATH /app/node_modules/.bin=$PATH

EXPOSE 3000
CMD ["npm", "run", "start"]
