'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { Button } from "@/components/ui/button"

export function ContentGrid({ contents }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <AnimatePresence mode="popLayout">
        {contents.map((content) => (
          <motion.div
            key={content.id}
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="aspect-video bg-slate-800 rounded-xl overflow-hidden group relative"
          >
            <img
              src={content.thumbnail || "/placeholder.svg"}
              alt={content.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-white font-medium mb-2">{content.title}</h3>
                <div className="flex flex-wrap gap-2 mb-3">
                  {content.hashtags.map((tag) => (
                    <span key={tag} className="text-xs text-red-400">#{tag}</span>
                  ))}
                </div>
                <Link href={`/content/${content.id}`} passHref>
                  <Button size="sm" variant="secondary" className="w-full gap-2">
                    View Details
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}

