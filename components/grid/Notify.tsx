// Notify.tsx
'use client'; // 标记为客户端组件

import { useState, useEffect } from 'react';

interface NotifyProps {
    message: string;
    visible: boolean;
    onClose: () => void;
}

const Notify = ({ message, visible, onClose }: NotifyProps) => {
    useEffect(() => {
        if (visible) {
            const timer = setTimeout(() => {
                onClose();
            }, 2000); // 2秒后自动隐藏通知

            return () => clearTimeout(timer);
        }
    }, [visible, onClose]);

    if (!visible) return null;

    return (
        <div className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg z-50 animate-fade-in'>
            <p className='text-gray-800 dark:text-gray-200'>{message}</p>
        </div>
    );
};

export default Notify;
