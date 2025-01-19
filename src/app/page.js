'use client'

import { useState, useCallback, useMemo, useEffect } from 'react'
import { Search, Shuffle, Clock, ChevronDown, X, Hash } from 'lucide-react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import './custom-styles.css'
import { CategoryFilter } from './components/CategoryFilter'
import { hashtags } from './data/hashtags'
import { HashtagFilter } from './components/HashtagFilter'
import { ContentGrid } from './components/ContentGrid'
import { getPublishedContents } from '../../lib/api'

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedHashtags, setSelectedHashtags] = useState([])
  const [sortType, setSortType] = useState('newest')
  const [showHashtagFilter, setShowHashtagFilter] = useState(false)
  const [contents, setContents] = useState([])
  const [categories] = useState(['All', 'Technology', 'Design', 'Business', 'Lifestyle'])
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [showCategoryFilter, setShowCategoryFilter] = useState(false)
  const [contentVersion, setContentVersion] = useState(0)

  useEffect(() => {
    const fetchContents = async () => {
      const fetchedContents = await getPublishedContents()
      setContents(fetchedContents)
    }
    fetchContents()
  }, [contentVersion])

  const handleHashtagToggle = useCallback((hashtag) => {
    setSelectedHashtags(prev => 
      prev.includes(hashtag)
        ? prev.filter(h => h !== hashtag)
        : [...prev, hashtag]
    )
  }, [])

  const handleRandomSort = useCallback(() => {
    setContents(prev => [...prev].sort(() => Math.random() - 0.5))
  }, [])

  const handleCategorySelect = (category) => {
    setSelectedCategory(category)
    setShowCategoryFilter(false)
  }

  const refreshContent = useCallback(() => {
    setContentVersion(prev => prev + 1)
  }, [])

  const filteredAndSortedContent = useMemo(() => {
    let filtered = contents.filter(content => {
      const matchesSearch = content.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
      const matchesHashtags = selectedHashtags.length === 0 || 
        selectedHashtags.every(tag => content.hashtags.includes(tag))
      const matchesCategory = selectedCategory === 'All' || content.category === selectedCategory
      return matchesSearch && matchesHashtags && matchesCategory
    })

    switch (sortType) {
      case 'newest':
        return filtered.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      case 'oldest':
        return filtered.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
      default:
        return filtered
    }
  }, [contents, searchQuery, selectedHashtags, selectedCategory, sortType])

  return (
    <div className="min-h-screen neon-background">
      <div className="content-container">
        <header className="pt-8 pb-6 px-4">
          <motion.div 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="max-w-7xl mx-auto text-center"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-red-400 to-red-600 p-1">
                <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                  <span className="text-2xl font-bold text-red-400">Lfg</span>
                </div>
              </div>
              <h1 className="text-3xl font-bold text-white mb-2">
            Libraryofg
              <span className="text-red-400 ml-2">(V1)</span>
            </h1>
            </div>
            
            <div className="max-w-7xl mx-auto text-center">
            
            {/* <Button
              onClick={refreshContent}
              className="mt-4 bg-red-500 hover:bg-red-600 text-white"
            >
              Refresh Content
            </Button> */}
            {/* <Link href="/signup" passHref>
              <Button className="mt-4 bg-red-500 hover:bg-red-600 text-white">
                Admin Sign Up
              </Button> */}
            {/* </Link> */}
          </div>
          </motion.div>
        </header>

        <main className="max-w-7xl mx-auto px-4 pb-20">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            {/* Search and Filter Controls */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search content..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 bg-slate-800 border-slate-700 text-white"
                />
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  onClick={() => setShowHashtagFilter(true)}
                  className="flex items-center gap-2 bg-slate-800 border-slate-700 text-white hover:bg-slate-700"
                >
                  <Hash className="w-4 h-4" />
                  Hashtags
                  {selectedHashtags.length > 0 && (
                    <span className="bg-red-400 text-slate-900 px-1.5 rounded-full text-xs">
                      {selectedHashtags.length}
                    </span>
                  )}
                </Button>
                <Button
                  variant="outline"
                  onClick={handleRandomSort}
                  className="flex items-center gap-2 bg-slate-800 border-slate-700 text-white hover:bg-slate-700"
                >
                  <Shuffle className="w-4 h-4" />
                  Random
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setShowCategoryFilter(true)}
                  className="flex items-center gap-2 bg-slate-800 border-slate-700 text-white hover:bg-slate-700"
                >
                  Category: {selectedCategory}
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="outline"
                      className="flex items-center gap-2 bg-slate-800 border-slate-700 text-white hover:bg-slate-700"
                    >
                      <Clock className="w-4 h-4" />
                      {sortType === 'newest' ? 'Newest' : 'Oldest'}
                      <ChevronDown className="w-4 h-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="bg-slate-800 border-slate-700">
                    <DropdownMenuItem 
                      onClick={() => setSortType('newest')}
                      className="text-white hover:bg-slate-700"
                    >
                      Newest First
                    </DropdownMenuItem>
                    <DropdownMenuItem 
                      onClick={() => setSortType('oldest')}
                      className="text-white hover:bg-slate-700"
                    >
                      Oldest First
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>

            {/* Selected Hashtags */}
            {selectedHashtags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {selectedHashtags.map(tag => (
                  <Button
                    key={tag}
                    variant="secondary"
                    size="sm"
                    onClick={() => handleHashtagToggle(tag)}
                    className="bg-red-400 text-slate-900 hover:bg-red-500"
                  >
                    #{tag}
                    <X className="w-4 h-4 ml-2" />
                  </Button>
                ))}
              </div>
            )}

            {/* Content Grid */}
            <ContentGrid contents={filteredAndSortedContent} />
          </motion.div>
        </main>

        {/* Hashtag Filter Modal */}
        {showHashtagFilter && (
          <HashtagFilter
            hashtags={hashtags}
            selectedHashtags={selectedHashtags}
            onSelectHashtag={handleHashtagToggle}
            onClose={() => setShowHashtagFilter(false)}
          />
        )}
        {showCategoryFilter && (
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={handleCategorySelect}
            onClose={() => setShowCategoryFilter(false)}
          />
        )}
      </div>
    </div>
  )
}

