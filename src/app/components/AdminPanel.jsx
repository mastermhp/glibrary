'use client'

import { useState, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { addContent } from '../../../lib/api'
import { useDropzone } from 'react-dropzone'
// import { refreshContent } from '../app/home'

export default function AdminPanel() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [thumbnail, setThumbnail] = useState(null);
  const [category, setCategory] = useState("");
  const [hashtags, setHashtags] = useState("");
  const [images, setImages] = useState([]);
  const [videos, setVideos] = useState([]);
  const [documents, setDocuments] = useState("");
  const [permissions, setPermissions] = useState("");
  const router = useRouter()

  const onDrop = useCallback((acceptedFiles, type) => {
    if (type === 'thumbnail') {
      setThumbnail(acceptedFiles[0]);
    } else if (type === 'images') {
      setImages(prev => [...prev, ...acceptedFiles]);
    } else if (type === 'videos') {
      setVideos(prev => [...prev, ...acceptedFiles]);
    }
  }, []);

  const { getRootProps: getImageRootProps, getInputProps: getImageInputProps } = useDropzone({
    onDrop: (files) => onDrop(files, 'images'),
    accept: {'image/*': []}
  });

  const { getRootProps: getVideoRootProps, getInputProps: getVideoInputProps } = useDropzone({
    onDrop: (files) => onDrop(files, 'videos'),
    accept: {'video/*': []}
  });

  const { getRootProps: getThumbnailRootProps, getInputProps: getThumbnailInputProps } = useDropzone({
    onDrop: (files) => onDrop(files, 'thumbnail'),
    accept: {'image/*': []},
    maxFiles: 1
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newContent = {
      title,
      description,
      thumbnail,
      category,
      hashtags,
      images,
      videos,
      documents,
      permissions,
    };

    try {
      await addContent(newContent);
      alert('Content added successfully!');
      // refreshContent();
      router.push("/");
    } catch (error) {
      console.error('Error adding content:', error);
      alert('Failed to add content. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 p-8">
      <div className="max-w-2xl mx-auto bg-slate-800 p-8 rounded-xl shadow-xl">
        <h1 className="text-2xl font-bold text-white mb-6">Add New Content</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-300 mb-1">Title</label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="w-full bg-slate-700 text-white border-slate-600"
            />
          </div>
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-300 mb-1">Description</label>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              className="w-full bg-slate-700 text-white border-slate-600"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Thumbnail</label>
            <div {...getThumbnailRootProps()} className="border-2 border-dashed border-gray-300 rounded-md p-4 text-center cursor-pointer">
              <input {...getThumbnailInputProps()} />
              <p className="text-gray-300">Drag 'n' drop a thumbnail image here, or click to select one</p>
              {thumbnail && <p className="text-gray-300 mt-2">{thumbnail.name}</p>}
            </div>
          </div>
          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-300 mb-1">Category</label>
            <Input
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
              className="w-full bg-slate-700 text-white border-slate-600"
            />
          </div>
          <div>
            <label htmlFor="hashtags" className="block text-sm font-medium text-gray-300 mb-1">Hashtags (comma-separated)</label>
            <Input
              id="hashtags"
              value={hashtags}
              onChange={(e) => setHashtags(e.target.value)}
              required
              className="w-full bg-slate-700 text-white border-slate-600"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Images</label>
            <div {...getImageRootProps()} className="border-2 border-dashed border-gray-300 rounded-md p-4 text-center cursor-pointer">
              <input {...getImageInputProps()} />
              <p className="text-gray-300">Drag 'n' drop some images here, or click to select files</p>
              {images.length > 0 && (
                <ul className="mt-2 text-gray-300">
                  {images.map((file, index) => (
                    <li key={index}>{file.name}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Videos</label>
            <div {...getVideoRootProps()} className="border-2 border-dashed border-gray-300 rounded-md p-4 text-center cursor-pointer">
              <input {...getVideoInputProps()} />
              <p className="text-gray-300">Drag 'n' drop some videos here, or click to select files</p>
              {videos.length > 0 && (
                <ul className="mt-2 text-gray-300">
                  {videos.map((file, index) => (
                    <li key={index}>{file.name}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          <div>
            <label htmlFor="documents" className="block text-sm font-medium text-gray-300 mb-1">Documents (comma-separated URLs)</label>
            <Input
              id="documents"
              value={documents}
              onChange={(e) => setDocuments(e.target.value)}
              className="w-full bg-slate-700 text-white border-slate-600"
            />
          </div>
          <div>
            <label htmlFor="permissions" className="block text-sm font-medium text-gray-300 mb-1">Permissions (comma-separated user IDs)</label>
            <Input
              id="permissions"
              value={permissions}
              onChange={(e) => setPermissions(e.target.value)}
              className="w-full bg-slate-700 text-white border-slate-600"
            />
          </div>
          <Button type="submit" className="w-full bg-red-500 hover:bg-red-600 text-white">
            Add Content
          </Button>
        </form>
      </div>
    </div>
  )
}





/*'use client'

import { useState, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Underline from '@tiptap/extension-underline'
import TextStyle from '@tiptap/extension-text-style'
import Color from '@tiptap/extension-color'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
// import { addContent } from '@/lib/api'
import { useDropzone } from 'react-dropzone'
import { EditorToolbar } from './EditorToolbar'
import { addContent } from '../../../lib/api'

export default function AdminPanel() {
  const [title, setTitle] = useState("");
  const [thumbnail, setThumbnail] = useState(null);
  const [category, setCategory] = useState("");
  const [hashtags, setHashtags] = useState("");
  const [images, setImages] = useState([]);
  const [videos, setVideos] = useState([]);
  const [documents, setDocuments] = useState("");
  // const [permissions, setPermissions] = useState("");
  const router = useRouter()

  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      TextStyle,
      Color,
    ],
    content: '',
    editorProps: {
      attributes: {
        class: 'prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto focus:outline-none',
      },
    },
  })

  const onDrop = useCallback((acceptedFiles, type) => {
    if (type === 'thumbnail') {
      setThumbnail(acceptedFiles[0]);
    } else if (type === 'images') {
      setImages(prev => [...prev, ...acceptedFiles]);
    } else if (type === 'videos') {
      setVideos(prev => [...prev, ...acceptedFiles]);
    }
  }, []);

  const { getRootProps: getImageRootProps, getInputProps: getImageInputProps } = useDropzone({
    onDrop: (files) => onDrop(files, 'images'),
    accept: {'image/*': []}
  });

  const { getRootProps: getVideoRootProps, getInputProps: getVideoInputProps } = useDropzone({
    onDrop: (files) => onDrop(files, 'videos'),
    accept: {'video/*': []}
  });

  const { getRootProps: getThumbnailRootProps, getInputProps: getThumbnailInputProps } = useDropzone({
    onDrop: (files) => onDrop(files, 'thumbnail'),
    accept: {'image/*': []},
    maxFiles: 1
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', editor.getHTML());
    formData.append('category', category);
    formData.append('hashtags', hashtags);
    formData.append('documents', documents);
    // formData.append('permissions', permissions);

    if (thumbnail) {
      formData.append('thumbnail', thumbnail);
    }

    images.forEach((image, index) => {
      formData.append(`images[${index}]`, image);
    });

    videos.forEach((video, index) => {
      formData.append(`videos[${index}]`, video);
    });

    await addContent(formData);
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 p-8">
      <div className="max-w-2xl mx-auto bg-slate-800 p-8 rounded-xl shadow-xl">
        <h1 className="text-2xl font-bold text-white mb-6">Add New Content</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-300 mb-1">Title</label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="w-full bg-slate-700 text-white border-slate-600"
            />
          </div>
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-300 mb-1">Description</label>
            <EditorToolbar editor={editor} />
            <EditorContent editor={editor} className="bg-slate-700 text-white rounded-md p-2 min-h-[200px]" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Thumbnail</label>
            <div {...getThumbnailRootProps()} className="border-2 border-dashed border-gray-300 rounded-md p-4 text-center cursor-pointer">
              <input {...getThumbnailInputProps()} />
              <p className="text-gray-300">Drag 'n' drop a thumbnail image here, or click to select one</p>
              {thumbnail && <p className="text-gray-300 mt-2">{thumbnail.name}</p>}
            </div>
          </div>
          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-300 mb-1">Category</label>
            <Input
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
              className="w-full bg-slate-700 text-white border-slate-600"
            />
          </div>
          <div>
            <label htmlFor="hashtags" className="block text-sm font-medium text-gray-300 mb-1">Hashtags (comma-separated)</label>
            <Input
              id="hashtags"
              value={hashtags}
              onChange={(e) => setHashtags(e.target.value)}
              required
              className="w-full bg-slate-700 text-white border-slate-600"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Images</label>
            <div {...getImageRootProps()} className="border-2 border-dashed border-gray-300 rounded-md p-4 text-center cursor-pointer">
              <input {...getImageInputProps()} />
              <p className="text-gray-300">Drag 'n' drop some images here, or click to select files</p>
              {images.length > 0 && (
                <ul className="mt-2 text-gray-300">
                  {images.map((file, index) => (
                    <li key={index}>{file.name}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Videos</label>
            <div {...getVideoRootProps()} className="border-2 border-dashed border-gray-300 rounded-md p-4 text-center cursor-pointer">
              <input {...getVideoInputProps()} />
              <p className="text-gray-300">Drag 'n' drop some videos here, or click to select files</p>
              {videos.length > 0 && (
                <ul className="mt-2 text-gray-300">
                  {videos.map((file, index) => (
                    <li key={index}>{file.name}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          <div>
            <label htmlFor="documents" className="block text-sm font-medium text-gray-300 mb-1">Documents (comma-separated URLs)</label>
            <Input
              id="documents"
              value={documents}
              onChange={(e) => setDocuments(e.target.value)}
              className="w-full bg-slate-700 text-white border-slate-600"
            />
          </div>
          {/* <div>
            <label htmlFor="permissions" className="block text-sm font-medium text-gray-300 mb-1">Permissions (comma-separated user IDs)</label>
            <Input
              id="permissions"
              value={permissions}
              onChange={(e) => setPermissions(e.target.value)}
              className="w-full bg-slate-700 text-white border-slate-600"
            />
          </div> *
          <Button type="submit" className="w-full bg-red-500 hover:bg-red-600 text-white">
            Add Content
          </Button>
        </form>
      </div>
    </div>
  )
}

 */