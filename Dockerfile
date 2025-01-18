# 使用 Alpine 基础镜像
FROM node:22.12.0-alpine AS build

# 设置工作目录
WORKDIR /app

# 复制 package.json 和 package-lock.json
COPY package*.json ./

# 安装依赖
RUN npm install

# 复制项目文件
COPY . .

# 构建项目
RUN npm run build


# 运行阶段
FROM node:22.12.0-alpine

# 设置工作目录
WORKDIR /app

# 复制构建结果
COPY --from=build /app/next ./next

# 复制生产依赖
COPY package*.json ./
RUN npm install --production

# 暴露端口
EXPOSE 3000

# 启动应用
CMD ["node", "next/app.js"]