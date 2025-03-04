import { cn } from '@/lib/utils';

interface AvatarImageProps {
  className?: string;
}

const AvatarImage = ({ className }: AvatarImageProps) => {
  return (
    <div className={cn("relative w-[220px] h-[250px] animate-float", className)}>
      
      {/* Outer glow effect */}
      <div className="absolute inset-0 rounded-full bg-purple-500 opacity-30 blur-[80px]"></div>

      {/* Semi-transparent gradient overlay */}
      <div className="absolute inset-0 rounded-full blur-[100px]  bg-gradient-to-b from-purple-500/50 to-transparent"></div>

      {/* Avatar Image */}
      <div className="absolute bottom-[45px] w-full flex justify-center">
        <img 
          src="/avatarImage.svg" 
          alt="Avatar" 
          className="w-[180px] h-[180px] rounded-full  shadow-[0px_0px_40px_rgba(128,0,128,0.5)] opacity-100"
        />
      </div>

    </div>
  );
};

export default AvatarImage;
