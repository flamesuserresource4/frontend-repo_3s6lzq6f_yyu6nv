import React, { useEffect, useRef, useState } from 'react';
import { Heart } from 'lucide-react';

const MusicToggle = () => {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const audio = new Audio('https://cdn.pixabay.com/download/audio/2022/03/15/audio_bf13c54b95.mp3?filename=gentle-piano-112191.mp3');
    audio.loop = true;
    audio.volume = 0.4;
    audioRef.current = audio;
    return () => {
      audio.pause();
      audio.src = '';
    };
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.play();
      setPlaying(true);
    }
  };

  return (
    <button
      onClick={toggle}
      className={`fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full px-4 py-2 shadow-lg backdrop-blur-md border transition ${
        playing ? 'bg-rose-500/90 text-white border-rose-400' : 'bg-white/70 text-rose-700 border-rose-100'
      }`}
      aria-label="Toggle background music"
    >
      <Heart className={`w-5 h-5 ${playing ? 'animate-pulse' : ''}`} />
      <span className="text-sm font-medium">{playing ? 'Music On' : 'Music'}</span>
    </button>
  );
};

export default MusicToggle;
