'use client'

// import { useEffect, useState } from 'react'
// // import { ContentDetails } from '@/components/content-details'
// import { useParams } from 'next/navigation'
// import { getContentById } from '@/lib/api'

// export default function ContentPage() {
//   const { id } = useParams()
//   const [content, setContent] = useState(null)

//   useEffect(() => {
//     const fetchContent = async () => {
//       const fetchedContent = await getContentById(id)
//       setContent(fetchedContent)
//     }
//     fetchContent()
//   }, [id])

//   if (!content) {
//     return <div className="flex justify-center items-center h-screen">Loading...</div>
//   }

//   return <ContentDetails content={content} />
// }

// import { useRouter } from 'next/router'
'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { getContentById } from '../../../../lib/api'
import { ContentDetails } from '../../components/ContentDetails'

export default function ContentPage() {
  const { id } = useParams()
  const [content, setContent] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchContent() {
      if (id) {
        try {
          const fetchedContent = await getContentById(id)
          if (fetchedContent) {
            setContent(fetchedContent)
          } else {
            setError('Content not found')
          }
        } catch (err) {
          setError('Failed to fetch content')
        } finally {
          setIsLoading(false)
        }
      }
    }

    fetchContent()
  }, [id])

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
        <div className="text-white text-2xl">Loading...</div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
        <div className="text-white text-2xl">{error}</div>
      </div>
    )
  }

  return <ContentDetails content={content} />
}

