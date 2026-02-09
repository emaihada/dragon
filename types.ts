import React from 'react';

export interface StorySectionData {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ComponentType<any>;
  content: {
    heading: string;
    description: string[];
  }[];
  themeColor: string; // Tailwind class prefix or hex
}

export enum SectionType {
  IMUGI = 'imugi',
  TRAGEDY = 'tragedy',
  KKANGCHEOL = 'kkangcheol',
  REDEMPTION = 'redemption'
}