"use client";

import React from 'react';
import Link from 'next/link';
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
  href?: string; // Add href prop for routing
  className?: string;
  iconColor?: string;
  title?: string;
}

const IconButton: React.FC<IconButtonProps> = ({ name, href, className, iconColor = "#7F7F7F", title, ...props }) => {
  const LucideIcon = iconMap[name];

  const buttonContent = (
    <motion.button
      className={`
        flex 
        items-center justify-center 
        p-[4px] rounded-[4px] 
        ${className}
      `}
      whileHover={{
        color: '#FFFFFF'
      }}
      whileTap={{ 
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

  return href ? (
    <Link href={href}>
      {buttonContent}
    </Link>
  ) : (
    buttonContent
  );
};

export default IconButton;