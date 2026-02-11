// Contacto.tsx
'use client'; // 标记为客户端组件

import { FaArrowRight } from 'react-icons/fa6';
import Card from '../ui/card';
import Notify from './Notify';
import { useState } from 'react'; // 引入通知组件

export default function Contacto() {
    const [isNotifyVisible, setIsNotifyVisible] = useState(false);

    // 处理复制邮箱的逻辑
    const handleCopyEmail = async () => {
        const email = '1063235414@qq.com';
        try {
            await navigator.clipboard.writeText(email); // 复制邮箱到剪贴板
            setIsNotifyVisible(true); // 显示通知
        } catch (err) {
            console.error('复制失败: ', err);
            alert('复制失败，请手动复制邮箱'); // 如果复制失败，使用 alert
        }
    };

    return (
        <Card className='flex h-full min-h-0 flex-col justify-between gap-3 overflow-y-auto p-3 sm:gap-4 sm:p-6 md:p-8'>
            <Notify message='已复制邮箱: 1063235414@qq.com' visible={isNotifyVisible} onClose={() => setIsNotifyVisible(false)} />
            <h2 className='font-calistoga text-xl leading-tight sm:text-2xl'>
                期待与你成为朋友
            </h2>
            <p className='text-sm leading-relaxed sm:text-sm md:text-base'>
                很高兴认识你！这是我的邮箱，我期待着与你分享有趣的想法，探讨无穷的可能，共同创造生活独特的色彩！
            </p>
            <p
                onClick={handleCopyEmail}
                className='cursor-pointer break-all text-sm leading-relaxed underline hover:opacity-70 md:text-base'>
                1063235414@qq.com
            </p>
            <div className='flex flex-col items-start justify-between gap-3 sm:gap-4 lg:flex-row'>
                <a
                    className='cancel-drag group inline-flex w-full items-center justify-center gap-3 overflow-hidden whitespace-nowrap rounded-full bg-white p-3 px-4 py-2 outline-none ring-2 ring-gray-200/45 transition-all duration-300 focus-within:outline-none focus-within:ring-4 hover:ring-4 sm:w-auto dark:text-black dark:ring-gray-200/30'
                    href='mailto:1063235414@qq.com'>
                    <FaArrowRight className='-rotate-45 transition-transform duration-300 group-hover:rotate-0' />
                    点击发送邮件
                </a>
                <small className='text-xs text-gray-600 dark:text-gray-400 sm:text-sm'>
                    祝你每天好心情☀️
                </small>
            </div>
        </Card>

    );
}
