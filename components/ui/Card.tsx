
import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  const cardClasses = `bg-white border border-gray-200 rounded-lg shadow-sm p-4 sm:p-6 ${className}`;
  return <div className={cardClasses}>{children}</div>;
};

export default Card;
