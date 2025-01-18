import React from 'react'
import { motion } from 'framer-motion'
import { X } from 'lucide-react'
import { Button } from "@/components/ui/button"

export function CategoryFilter({ categories, selectedCategory, onSelectCategory, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-slate-800 rounded-lg p-6 w-full max-w-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-white">Select Category</h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-6 w-6 text-slate-400" />
          </Button>
        </div>
        <div className="md:grid grid-cols-2 gap-2 max-h-[60vh] overflow-y-auto">
          {categories.map(category => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => onSelectCategory(category)}
              className={`m-1
                ${selectedCategory === category 
                  ? 'bg-amber-400 text-slate-900 hover:bg-amber-500' 
                  : 'text-slate-900 hover:bg-slate-700 hover:text-white'}
                truncate
              `}
            >
              {category}
            </Button>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}