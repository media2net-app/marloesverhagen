'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

export type ColorOption = 'green' | 'yellow' | 'purple' | 'blue';

const colorMap: Record<ColorOption, string> = {
  green: '#4ade80',
  yellow: '#FCD34D',
  purple: '#A855F7',
  blue: '#3B82F6',
};

const hoverColorMap: Record<ColorOption, string> = {
  green: '#22c55e',
  yellow: '#FBBF24',
  purple: '#9333EA',
  blue: '#2563EB',
};

// Dark variants for backgrounds and gradients (darker teal-like colors based on accent)
const darkColorMap: Record<ColorOption, string> = {
  green: '#042b2e', // Original dark teal
  yellow: '#3d2914', // Dark brown-yellow
  purple: '#2d1b3d', // Dark purple
  blue: '#1e293b', // Dark blue (slate)
};

const darkerColorMap: Record<ColorOption, string> = {
  green: '#021a1c', // Darker teal
  yellow: '#2a1d0e', // Darker brown-yellow
  purple: '#1f1230', // Darker purple
  blue: '#0f172a', // Darker blue
};

export function getHoverColor(color: ColorOption): string {
  return hoverColorMap[color];
}

interface ColorContextType {
  selectedColor: ColorOption;
  colorValue: string;
  hoverColorValue: string;
  darkColorValue: string; // For backgrounds like #03272A, #042b2e
  darkerColorValue: string; // For darker backgrounds like #021a1c
  setSelectedColor: (color: ColorOption) => void;
}

const ColorContext = createContext<ColorContextType | undefined>(undefined);

export function ColorProvider({ children }: { children: ReactNode }) {
  const [selectedColor, setSelectedColor] = useState<ColorOption>('green');

  return (
    <ColorContext.Provider
      value={{
        selectedColor,
        colorValue: colorMap[selectedColor],
        hoverColorValue: hoverColorMap[selectedColor],
        darkColorValue: darkColorMap[selectedColor],
        darkerColorValue: darkerColorMap[selectedColor],
        setSelectedColor,
      }}
    >
      {children}
    </ColorContext.Provider>
  );
}

export function useColor() {
  const context = useContext(ColorContext);
  if (context === undefined) {
    throw new Error('useColor must be used within a ColorProvider');
  }
  return context;
}

