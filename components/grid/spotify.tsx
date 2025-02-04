'use client';

import { useState, useRef } from 'react';
import Card from '../ui/card';

interface Music {
    isPlaying: boolean;
    title: string;
    artist: string;
    albumImageUrl: string;
    songUrl: string;
}

const mockData: Music = {
    isPlaying: false, // 初始状态为未播放
    title: '亲爱的旅人啊',
    artist: '周深',
    albumImageUrl: 'https://studylzl.oss-cn-beijing.aliyuncs.com/music/musicIcon.png', // 专辑封面
    songUrl: 'https://studylzl.oss-cn-beijing.aliyuncs.com/music/zs-qadlr.flac', // 音乐文件
};

const NowPlayingLoading = () => (
    <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
            <div className="h-4 animate-pulse rounded-md bg-gray-300">
                <span className="invisible">正在播放</span>
            </div>
        </div>
        <div className="h-6 animate-pulse rounded-md bg-gray-300">
            <span className="invisible">歌曲名称</span>
        </div>
        <div className="h-4 animate-pulse rounded-md bg-gray-300">
            <span className="invisible">作者</span>
        </div>
    </div>
);

function NowPlaying() {
    const [isPlaying, setIsPlaying] = useState(mockData.isPlaying);
    const audioRef = useRef<HTMLAudioElement | null>(null); // 使用 useRef 管理 Audio 实例

    const togglePlayPause = () => {
        if (!audioRef.current) {
            // 如果 Audio 实例不存在，则创建
            audioRef.current = new Audio(mockData.songUrl);
            audioRef.current.loop = false; // 禁止循环播放
        }

        if (isPlaying) {
            audioRef.current.pause(); // 暂停音乐
        } else {
            audioRef.current.play(); // 播放音乐
        }
        setIsPlaying(!isPlaying); // 切换播放状态
    };

    return (
        <div className="flex flex-col justify-between h-full">


            <div className="mt-4 cursor-pointer" onClick={togglePlayPause}>
                <img
                    src={mockData.albumImageUrl}
                    alt="Album Cover"
                    className="size-14 rounded-full hover:opacity-80"
                />
            </div>
            <div className="flex flex-col justify-end">
                <div className="flex items-center gap-3">
                    {isPlaying && (
                        <div className="inline-flex items-center justify-center gap-1">
                            <div className="w-1 animate-[playing_0.85s_ease_infinite] rounded-full bg-[#6ED2B7]" />
                            <div className="w-1 animate-[playing_1.26s_ease_infinite] rounded-full bg-[#6ED2B7]" />
                            <div className="w-1 animate-[playing_0.62s_ease_infinite] rounded-full bg-[#6ED2B7]" />
                        </div>
                    )}
                    <p className="text-sm " style={{
                        background: ' var(--color-spring-green-63, #6ED2B7)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        fontWeight: 'regular',
                    }}>{isPlaying ? '正在播放' : '继续播放'}</p>
                </div>
                <h2
                    className="line-clamp-3 font-calistoga text-2xl md:line-clamp-1 lg:line-clamp-3"
                    title={mockData.title}>
                    {mockData.title}
                </h2>
                <p className="truncate font-medium" title={mockData.artist}>
                    {mockData.artist}
                </p>
            </div>
        </div>
    );
}

export default function Spotify() {
    return (
        <Card className="flex h-full flex-col justify-between gap-3 p-8">
            <NowPlaying />
        </Card>
    );
}