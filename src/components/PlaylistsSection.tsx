
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { playlists } from '@/data/playlists';

const PlaylistsSection: React.FC = () => {
  return (
    <section id="playlists" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Current Playlists</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            The soundtracks to my creative process and deep work sessions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {playlists.map((playlist, index) => (
            <motion.div
              key={playlist.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle>{playlist.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="aspect-square">
                    <iframe
                      src={playlist.spotifyUrl}
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                      loading="lazy"
                      className="rounded-lg"
                    ></iframe>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlaylistsSection;
