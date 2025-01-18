# 第一阶段：构建阶段
FROM node:22.12.0-alpine AS build

WORKDIR /app
COPY package*.json ./
RUN npm install && npm cache clean --force
COPY . .
RUN npm run build && ls -la /app

# 第二阶段：运行阶段
FROM node:22.12.0-alpine

WORKDIR /app
COPY --from=build /app/.next ./next
COPY package*.json ./
RUN npm install --production && npm cache clean --force


EXPOSE 3000
CMD ["serve", "-s", "next", "-l", "3000"]