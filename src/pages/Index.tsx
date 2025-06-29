
import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import BlogSection from '@/components/BlogSection';
import PurchasesSection from '@/components/PurchasesSection';
import PlaylistsSection from '@/components/PlaylistsSection';
import PeopleSection from '@/components/PeopleSection';
import ProjectsSection from '@/components/ProjectsSection';
import PodcastsSection from '@/components/PodcastsSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen"
      >
        <Navigation />
        <main id="main-content">
          <Hero />
          <BlogSection />
          <PurchasesSection />
          <PlaylistsSection />
          <PeopleSection />
          <ProjectsSection />
          <PodcastsSection />
          <Footer />
        </main>
      </motion.div>
    </AnimatePresence>
  );
};

export default Index;
