import { createContext,  useRef, useState } from 'react';
import { ContextProps } from '../interface/props';

interface PlayerContextProps {
  isPlaying: boolean;
  handleClick(): void,
  audioRef: React.RefObject<HTMLAudioElement>;
}

const PlayerContext = createContext<PlayerContextProps>({
  isPlaying: false,
  handleClick() {return},
  audioRef: { current: null },
});

const PlayerProvider = ({ children }: ContextProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  function handleClick() {
    if (isPlaying) {
      setIsPlaying(false);
      audioRef.current?.pause();
    } else {
      setIsPlaying(true);
      audioRef.current?.play();
    }
  }

  return (
    <PlayerContext.Provider value={{ isPlaying, audioRef, handleClick }}>
      {children}
    </PlayerContext.Provider>
  );
};

export default PlayerContext;
export { PlayerProvider };