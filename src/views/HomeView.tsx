import React from 'react';
import { HomeHero } from '../components/HomeHero';
import { HomeFeatureTrio } from '../components/HomeFeatureTrio';
import { ExpectAtCafe } from '../components/ExpectAtCafe';
import { MenuSpotlight } from '../components/MenuSpotlight';
import { GalleryFlavourSplit } from '../components/GalleryFlavourSplit';
import { ReviewsTripAdvisor } from '../components/ReviewsTripAdvisor';
import { ActivePage } from '../components/Header';

interface HomeViewProps {
  onNavigate: (page: ActivePage) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate }) => {
  return (
    <div className="w-full flex flex-col">
      <HomeHero onNavigate={onNavigate} />
      <HomeFeatureTrio onNavigate={onNavigate} />
      <ExpectAtCafe onNavigate={onNavigate} />
      <MenuSpotlight onNavigate={onNavigate} />
      <GalleryFlavourSplit onNavigate={onNavigate} />
      <ReviewsTripAdvisor />
    </div>
  );
};
