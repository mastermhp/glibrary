'use client'

import { useState } from 'react'
import { ArrowLeft, Download, File, Image, Video } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'

export function ContentDetails({ content }) {
  const [activeTab, setActiveTab] = useState('description')

  const renderTabContent = () => {
    switch (activeTab) {
      case 'description':
        return <p className="text-slate-300">{content.description}</p>
      case 'related':
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {content.relatedContent.map((item) => (
              <Link key={item.id} href={`/content/${item.id}`} className="block">
                <div className="bg-slate-800 rounded-lg overflow-hidden">
                  <img src={item.thumbnail || "/placeholder.svg"} alt={item.title} className="w-full h-40 object-cover" />
                  <div className="p-3">
                    <h4 className="text-white font-medium">{item.title}</h4>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )
      case 'files':
        return (
          <ul className="space-y-2">
            {content.files.map((file, index) => (
              <li key={index} className="flex items-center justify-between bg-slate-800 p-3 rounded-lg">
                <span className="text-white flex items-center gap-2">
                  {file.type === 'image' && <Image className="w-5 h-5" />}
                  {file.type === 'video' && <Video className="w-5 h-5" />}
                  {file.type === 'document' && <File className="w-5 h-5" />}
                  {file.name}
                </span>
                <Button size="sm" variant="secondary" asChild>
                  <a href={file.url} download>
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </a>
                </Button>
              </li>
            ))}
          </ul>
        )
      default:
        return null
    }
  }

  

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-4xl mx-auto px-4 py-8">
      <Link href="/" className="inline-flex items-center text-amber-400 hover:text-amber-300 mb-6">
        <ArrowLeft className="w-5 h-5 mr-2" />
        Back to Catalogue
      </Link>
      <div className="bg-slate-900 rounded-xl overflow-hidden shadow-xl">
        <div className="aspect-video relative">
          <img src={content.thumbnail || "/placeholder.svg"} alt={content.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h1 className="text-3xl font-bold text-white mb-2">{content.title}</h1>
              <div className="flex flex-wrap gap-2">
                {content.hashtags.map((tag) => (
                  <span key={tag} className="text-sm text-amber-400">#{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="p-6">
          <div className="flex gap-4 mb-6">
            <Button
              variant={activeTab === 'description' ? 'default' : 'outline'}
              onClick={() => setActiveTab('description')}
            >
              Description
            </Button>
            <Button
              variant={activeTab === 'related' ? 'default' : 'outline'}
              onClick={() => setActiveTab('related')}
            >
              Related Content
            </Button>
            <Button
              variant={activeTab === 'files' ? 'default' : 'outline'}
              onClick={() => setActiveTab('files')}
            >
              Files
            </Button>
          </div>
          {renderTabContent()}
        </div>
      </div>
    </div>
    </div>
  )
}

