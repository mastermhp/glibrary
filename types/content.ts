export interface Content {
    id: string | number
    title: string
    description: string
    date: string
    status: 'Published' | 'Draft'
    thumbnail: string
    images: string[]
    videos: string[]
    documents: string[]
    hashtags: string[]
    permissions: string[]
    category: string
  }
  
  export type SortType = 'newest' | 'oldest' | 'random'
  
  