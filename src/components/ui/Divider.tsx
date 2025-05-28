interface DividerProps {
  width: string; // Tailwind width class (e.g., 'flex-1', 'w-16')
  className?: string;
}

export default function Divider({ width, className = '' }: DividerProps) {
  return <div className={`bg-rose-gold ${width} ${className}`} style={{ height: '4px' }} />;
}
