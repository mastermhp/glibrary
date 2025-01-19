"use client"
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import React, { useState } from 'react'

export default function content() {
      const [title, setTitle] = useState("");
      const [description, setDescription] = useState("");
      const [thumbnail, setThumbnail] = useState("");
      const [category, setCategory] = useState("");
      const [hashtags, setHashtags] = useState("");
      const [isAuthorized, setIsAuthorized] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newContent = {
          title,
          description,
          thumbnail,
          category,
          hashtags: hashtags.split(",").map((tag) => tag.trim()),
          status: "Published",
          date: new Date().toISOString(),
        };
        await addContent(newContent);
        router.push("/");
      };
    
    //   if (!isAuthorized) {
    //     return <div>Loading...</div>; // Placeholder while checking authorization
    //   }

  return (
    <div className="max-w-2xl mx-auto bg-slate-800 p-8 rounded-xl shadow-xl">
    <h1 className="text-2xl font-bold text-white mb-6">Add New Content</h1>
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-300 mb-1">
          Title
        </label>
        <Input
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="w-full bg-slate-700 text-white border-slate-600"
        />
      </div>
      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-300 mb-1">
          Description
        </label>
        <Textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          className="w-full bg-slate-700 text-white border-slate-600"
        />
      </div>
      <div>
        <label htmlFor="thumbnail" className="block text-sm font-medium text-gray-300 mb-1">
          Thumbnail URL
        </label>
        <Input
          id="thumbnail"
          value={thumbnail}
          onChange={(e) => setThumbnail(e.target.value)}
          required
          className="w-full bg-slate-700 text-white border-slate-600"
        />
      </div>
      <div>
        <label htmlFor="category" className="block text-sm font-medium text-gray-300 mb-1">
          Category
        </label>
        <Input
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
          className="w-full bg-slate-700 text-white border-slate-600"
        />
      </div>
      <div>
        <label htmlFor="hashtags" className="block text-sm font-medium text-gray-300 mb-1">
          Hashtags (comma-separated)
        </label>
        <Input
          id="hashtags"
          value={hashtags}
          onChange={(e) => setHashtags(e.target.value)}
          required
          className="w-full bg-slate-700 text-white border-slate-600"
        />
      </div>
      <Button type="submit" className="w-full bg-red-500 hover:bg-red-600 text-white">
        Add Content
      </Button>
    </form>
  </div>
  )
}
