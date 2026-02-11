'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import Card from '../ui/card';

interface Music {
    isPlaying: boolean;
    title: string;
    artist: string;
    albumImageUrl: string;
    songUrl: string;
}

const mockData: Music = {
    isPlaying: false,
    title: '亲爱的旅人啊',
    artist: '周深',
    albumImageUrl: 'https://studylzl.oss-cn-beijing.aliyuncs.com/music/musicIcon.png',
    songUrl: 'https://studylzl.oss-cn-beijing.aliyuncs.com/music/zs-qadlr.flac',
};

function NowPlaying() {
    const [isPlaying, setIsPlaying] = useState(mockData.isPlaying);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(
        () => () => {
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current = null;
            }
        },
        []
    );

    const togglePlayPause = () => {
        if (!audioRef.current) {
            audioRef.current = new Audio(mockData.songUrl);
            audioRef.current.loop = false;
        }

        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(false);
            return;
        }

        void audioRef.current.play().then(() => {
            setIsPlaying(true);
        }).catch(() => {
            setIsPlaying(false);
        });
    };

    return (
        <div className='flex h-full min-h-0 flex-col gap-3'>
            <button
                type='button'
                className='inline-flex size-10 shrink-0 cursor-pointer overflow-hidden rounded-full hover:opacity-80 sm:size-12 md:size-14'
                onClick={togglePlayPause}
                aria-label={isPlaying ? '暂停播放' : '开始播放'}>
                <Image
                    src={mockData.albumImageUrl}
                    width={56}
                    height={56}
                    sizes='56px'
                    alt='Album Cover'
                    className='size-10 rounded-full object-cover sm:size-12 md:size-14'
                />
            </button>

            <div className='min-h-0 space-y-1'>
                <div className='flex items-center gap-2'>
                    {isPlaying && (
                        <div className='inline-flex items-center justify-center gap-1'>
                            <div className='h-3 w-1 animate-[playing_0.85s_ease_infinite] rounded-full bg-[#6ED2B7]' />
                            <div className='h-3 w-1 animate-[playing_1.26s_ease_infinite] rounded-full bg-[#6ED2B7]' />
                            <div className='h-3 w-1 animate-[playing_0.62s_ease_infinite] rounded-full bg-[#6ED2B7]' />
                        </div>
                    )}
                    <p
                        className='text-xs leading-snug sm:text-sm'
                        style={{
                            background: ' var(--color-spring-green-63, #6ED2B7)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            fontWeight: 'normal',
                        }}>
                        {isPlaying ? '正在播放' : '继续播放'}
                    </p>
                </div>

                <h2
                    className='font-calistoga text-sm leading-snug break-words sm:text-base md:text-lg'
                    title={mockData.title}>
                    {mockData.title}
                </h2>

                <p
                    className='font-medium text-xs leading-snug break-words sm:text-sm md:text-base'
                    title={mockData.artist}>
                    {mockData.artist}
                </p>
            </div>
        </div>
    );
}

export default function Spotify() {
    return (
        <Card className='flex h-full min-h-0 flex-col justify-between gap-2 overflow-y-auto p-3 sm:p-5 md:p-8'>
            <NowPlaying />
        </Card>
    );
}
