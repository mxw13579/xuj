import { twMerge } from 'tailwind-merge';
import { clsx, ClassValue } from 'clsx';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function toKebabCase(string: string): string {
    return string
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-+)|(-+$)/g, '');
}

export function formatDate(date: string): string {
    const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        timeZone: 'Asia/Shanghai', // 设置为中国时区
    };

    // 使用 toLocaleDateString 格式化日期
    const formattedDate = new Date(date).toLocaleDateString('zh-CN', options);

    // 将默认的斜杠分隔符替换为中文格式
    return formattedDate.replace(/\//g, '年')
        .replace(/(\d{4})年(\d{2})年(\d{2})/, '$1年$2月$3日');
}
