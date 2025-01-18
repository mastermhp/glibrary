'use client'

import { useState } from 'react'
import { Search, X } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { motion } from 'framer-motion'

export function HashtagFilter({ hashtags, selectedHashtags, onSelectHashtag, onClose }) {
  const [searchQuery, setSearchQuery] = useState('')
  
  const filteredHashtags = hashtags.filter(hashtag => 
    hashtag.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
    >
      <div className="bg-slate-900 rounded-xl w-full max-w-2xl p-6 shadow-xl">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-white">Filter by Hashtags</h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        </div>

        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
          <Input
            type="text"
            placeholder="Filter hashtags..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 bg-slate-800 border-slate-700 text-white"
          />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 max-h-[60vh] overflow-y-auto p-1">
          {filteredHashtags.map((hashtag) => (
            <Button
              key={hashtag}
              variant="outline"
              className={`
                justify-start text-sm font-medium transition-all
                ${selectedHashtags.includes(hashtag)
                  ? 'bg-amber-400 text-slate-900 hover:bg-amber-500'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'}
              `}
              onClick={() => onSelectHashtag(hashtag)}
            >
              #{hashtag}
            </Button>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

