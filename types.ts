import React from 'react';

export enum ViewState {
  DASHBOARD = 'DASHBOARD',
  AI_IN_ACTION = 'AI_IN_ACTION',
  RECOMMENDED_TOOLS = 'RECOMMENDED_TOOLS',
  WHO_I_AM = 'WHO_I_AM',
  ARCHIVES = 'ARCHIVES',
  LEGAL = 'LEGAL'
}

export interface NavItem {
  id: ViewState;
  label: string;
  icon: React.ReactNode;
}

export interface ToolRecommendation {
  name: string;
  description: string;
  category: string;
  useCase: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface DemoVideo {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  duration: string;
}