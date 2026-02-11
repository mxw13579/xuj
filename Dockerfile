# 依赖阶段：利用 lockfile 做可复现安装
FROM node:22.12.0-alpine AS deps

WORKDIR /app
COPY package*.json ./
RUN npm ci && npm cache clean --force

# 生产依赖阶段：剔除 devDependencies，供 runner 使用
FROM deps AS prod-deps

WORKDIR /app
RUN npm prune --omit=dev

# 构建阶段：消费 build args 并产出构建产物
FROM node:22.12.0-alpine AS builder

WORKDIR /app

ARG NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN
ENV NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN=${NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}

COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# 运行阶段：仅复制运行所需文件，不再二次安装依赖
FROM node:22.12.0-alpine AS runner

WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

RUN addgroup -S nodejs && adduser -S nextjs -G nodejs

COPY --from=builder /app/public ./public
COPY --from=builder /app/content ./content
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/package*.json ./
COPY --from=prod-deps /app/node_modules ./node_modules

USER nextjs

EXPOSE 3000
CMD ["npm", "run", "start"]
