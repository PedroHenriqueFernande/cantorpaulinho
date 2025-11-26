import { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

interface CustomVideoPlayerProps {
    src: string;
    className?: string;
}

const CustomVideoPlayer = ({ src, className = "" }: CustomVideoPlayerProps) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [playbackRate, setPlaybackRate] = useState(1);
    const [isMuted, setIsMuted] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const updateTime = () => setCurrentTime(video.currentTime);
        const updateDuration = () => setDuration(video.duration);

        video.addEventListener("timeupdate", updateTime);
        video.addEventListener("loadedmetadata", updateDuration);

        return () => {
            video.removeEventListener("timeupdate", updateTime);
            video.removeEventListener("loadedmetadata", updateDuration);
        };
    }, []);

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

    const changeSpeed = () => {
        if (videoRef.current) {
            const speeds = [1, 1.5, 2];
            const currentIndex = speeds.indexOf(playbackRate);
            const nextSpeed = speeds[(currentIndex + 1) % speeds.length];
            videoRef.current.playbackRate = nextSpeed;
            setPlaybackRate(nextSpeed);
        }
    };

    const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (videoRef.current) {
            const rect = e.currentTarget.getBoundingClientRect();
            const pos = (e.clientX - rect.left) / rect.width;
            videoRef.current.currentTime = pos * duration;
        }
    };

    const formatTime = (time: number) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds.toString().padStart(2, "0")}`;
    };

    const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

    return (
        <div className="relative group">
            <video
                ref={videoRef}
                className={className}
                preload="metadata"
                onClick={togglePlay}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
            >
                <source src={`${src}#t=0.1`} type="video/mp4" />
            </video>

            {/* Custom Controls - Full Width Bar */}
            <div className="absolute bottom-0 left-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity">
                {/* Progress Bar */}
                <div
                    className="w-full h-1 bg-purple-300/30 cursor-pointer hover:h-2 transition-all"
                    onClick={handleProgressClick}
                >
                    <div
                        className="h-full bg-purple-500 transition-all"
                        style={{ width: `${progress}%` }}
                    />
                </div>

                {/* Controls Bar */}
                <div className="bg-purple-600/60 backdrop-blur-sm px-4 py-2 flex items-center justify-between">
                    {/* Left Side - Play and Volume */}
                    <div className="flex items-center gap-3">
                        {/* Play/Pause Button */}
                        <button
                            onClick={togglePlay}
                            className="text-white hover:text-purple-200 transition-colors"
                            aria-label={isPlaying ? "Pausar" : "Reproduzir"}
                        >
                            {isPlaying ? (
                                <Pause className="w-5 h-5" fill="currentColor" />
                            ) : (
                                <Play className="w-5 h-5" fill="currentColor" />
                            )}
                        </button>

                        {/* Mute/Unmute Button */}
                        <button
                            onClick={toggleMute}
                            className="text-white hover:text-purple-200 transition-colors"
                            aria-label={isMuted ? "Ativar som" : "Desativar som"}
                        >
                            {isMuted ? (
                                <VolumeX className="w-4 h-4" />
                            ) : (
                                <Volume2 className="w-4 h-4" />
                            )}
                        </button>

                        {/* Time Display */}
                        <div className="text-white text-xs">
                            {formatTime(currentTime)} / {formatTime(duration)}
                        </div>
                    </div>

                    {/* Right Side - Speed Control */}
                    <button
                        onClick={changeSpeed}
                        className="text-white hover:text-purple-200 transition-colors font-semibold text-xs px-2 py-1 rounded bg-purple-700/50 hover:bg-purple-700/70"
                        aria-label="Velocidade de reprodução"
                    >
                        {playbackRate}x
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CustomVideoPlayer;
