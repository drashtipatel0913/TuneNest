
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { purchases } from '@/data/purchases';
import StarRating from './StarRating';

const PurchasesSection: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-muted/20">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Recent Purchases</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My thoughts on random stuff I bought because influencers did their job well.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {purchases.map((purchase, index) => (
            <motion.div
              key={purchase.item}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
            >
              <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer">
                <div className="aspect-square relative overflow-hidden">
                  <img
                    src={purchase.image}
                    alt={purchase.item}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">{purchase.item}</h3>
                  <StarRating rating={purchase.rating} />
                  <p className="text-muted-foreground text-sm mt-2">{purchase.why}</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {new Date(purchase.date).toLocaleDateString()}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PurchasesSection;
