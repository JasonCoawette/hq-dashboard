"use client";

import React from 'react';
import { LucideProps } from 'lucide-react';
import { motion } from 'motion/react';
import { LogIn, LogOut, ArrowLeft, Settings2, Earth, Users, Filter, Activity, Database, Smartphone, SquareStack } from 'lucide-react';

const iconMap = {
  'log-in': LogIn,
  'log-out': LogOut,
  'arrow-left': ArrowLeft,
  'settings-2': Settings2,
  'earth': Earth,
  'users': Users,
  'filter': Filter,
  'activity': Activity,
  'database': Database,
  'smartphone': Smartphone,
  'square-stack': SquareStack,
};

interface IconButtonProps extends Omit<LucideProps, 'ref'> {
  name: keyof typeof iconMap;
  onClick?: () => void;
  className?: string;
  iconColor?: string;
  title?: string;
}

const IconButton: React.FC<IconButtonProps> = ({ name, onClick, className, iconColor = "#7F7F7F", title, ...props }) => {
  const LucideIcon = iconMap[name];

  return (
    <motion.button
        onClick={onClick}
        className={`
            flex 
            items-center justify-center 
            p-[4px] rounded-[4px] 
            ${className}
        `}
        whileHover={{
            scale: 1.04,
            color: '#FFFFFF'
        }}
        whileTap={{ 
            scale: 0.96,
            color: '#FFFFFF'
        }}
        transition={{ 
            duration: 0.2, 
            ease: "easeOut" 
        }}
        style={{ color: iconColor }}
        title={title}
    >
        <LucideIcon size={28} {...props} />
    </motion.button>
  );
};

export default IconButton;