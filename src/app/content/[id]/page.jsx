'use client'

import { useEffect, useState } from 'react'
// import { ContentDetails } from '@/components/content-details'
import { useParams } from 'next/navigation'
import { ContentDetails } from '@/app/components/ContentDetails'

// This would be replaced with a real API call in a production app
const fetchContent = async (id) => {
  // Simulating an API call
  await new Promise(resolve => setTimeout(resolve, 500))
  return {
    id,
    title: `Content Title ${id}`,
    description: `This is a detailed description for content ${id}. It provides in-depth information about the content, its context, and its significance.`,
    thumbnail: `/placeholder.svg?height=400&width=600`,
    hashtags: ['tag1', 'tag2', 'tag3'],
    relatedContent: [
      { id: 'related1', title: 'Related Content 1', thumbnail: '/placeholder.svg?height=200&width=300' },
      { id: 'related2', title: 'Related Content 2', thumbnail: '/placeholder.svg?height=200&width=300' },
      { id: 'related3', title: 'Related Content 3', thumbnail: '/placeholder.svg?height=200&width=300' },
      { id: 'related4', title: 'Related Content 4', thumbnail: '/placeholder.svg?height=200&width=300' },
    ],
    files: [
      { name: 'Image 1', type: 'image', url: '/placeholder.svg?height=100&width=100' },
      { name: 'Video 1', type: 'video', url: '#' },
      { name: 'Document 1', type: 'document', url: '#' },
    ]
  }
}

export default function ContentPage() {
  const { id } = useParams()
  const [content, setContent] = useState(null)

  useEffect(() => {
    fetchContent(id).then(setContent)
  }, [id])

  if (!content) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>
  }

  return <ContentDetails content={content} />
}

