'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { ContentDetails } from '../../components/ContentDetails'
import { getContentById } from '../../../../lib/api'

export default function ContentPage() {
  const params = useParams();
  const id = params?.id; // Handle cases where id might be undefined
  const [content, setContent] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchContent() {
      if (!id) {
        setError('Content ID is missing or invalid.')
        setIsLoading(false)
        return
      }

      try {
        const fetchedContent = await getContentById(id)
        if (fetchedContent) {
          setContent(fetchedContent)
        } else {
          setError('Content not found.')
        }
      } catch (err) {
        console.error('Error fetching content:', err)
        setError('Failed to fetch content. Please try again later.')
      } finally {
        setIsLoading(false)
      }
    }

    fetchContent()
  }, [id])

  // Loading state
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
        <div className="text-white text-2xl">Loading...</div>
      </div>
    )
  }

  // Error state
  if (error) {
    return (
      <div className="flex justify-center items-center h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
        <div className="text-white text-2xl">{error}</div>
      </div>
    )
  }

  // Content render
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <ContentDetails content={content} />
    </div>
  )
}
