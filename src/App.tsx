import React from 'react';
import { Card } from './components/Card';
import { ThemeToggle } from './components/ThemeToggle';
import { TeamSection } from './components/TeamSection';

const cards = [
  {
    title: 'Mountain Expedition',
    description: 'Embark on an adventure through majestic peaks and valleys. Experience the thrill of mountain climbing and witness breathtaking views.',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1200',
    progress: 75
  },
  {
    title: 'Ocean Discovery',
    description: 'Dive into the mysteries of the deep blue sea. Explore coral reefs and encounter fascinating marine life.',
    image: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&q=80&w=1200',
    progress: 45
  },
  {
    title: 'Forest Journey',
    description: 'Wander through ancient forests and discover hidden wonders. Learn about diverse ecosystems and wildlife.',
    image: 'https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&q=80&w=1200',
    progress: 90
  }
];

function App() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-200">
      <ThemeToggle />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Explore Adventures
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
        <TeamSection />
      </div>
    </div>
  );
}

export default App;