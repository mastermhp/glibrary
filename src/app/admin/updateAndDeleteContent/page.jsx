"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { Plus, Edit, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
// import { getAllContents, addContent, updateContent, deleteContent } from "@/lib/api"
import { useDropzone } from "react-dropzone";
import {
  getAllContents,
  addContent,
  updateContent,
  deleteContent,
} from "../../../../lib/api";

export default function Update() {
  const [contents, setContents] = useState([]);
  const [newContent, setNewContent] = useState({
    title: "",
    description: "",
    thumbnail: null,
    category: "",
    hashtags: "",
    images: [],
    videos: [],
    documents: "",
    permissions: "",
  });
  const [editingContent, setEditingContent] = useState(null);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    fetchContents();
  }, []);

  const fetchContents = async () => {
    const fetchedContents = await getAllContents();
    setContents(fetchedContents);
  };

  const onDrop = useCallback((acceptedFiles, type, isEditing = false) => {
    if (type === "thumbnail") {
      if (isEditing) {
        setEditingContent((prev) => ({ ...prev, thumbnail: acceptedFiles[0] }));
      } else {
        setNewContent((prev) => ({ ...prev, thumbnail: acceptedFiles[0] }));
      }
    } else if (type === "images") {
      if (isEditing) {
        setEditingContent((prev) => ({
          ...prev,
          images: [...prev.images, ...acceptedFiles],
        }));
      } else {
        setNewContent((prev) => ({
          ...prev,
          images: [...prev.images, ...acceptedFiles],
        }));
      }
    } else if (type === "videos") {
      if (isEditing) {
        setEditingContent((prev) => ({
          ...prev,
          videos: [...prev.videos, ...acceptedFiles],
        }));
      } else {
        setNewContent((prev) => ({
          ...prev,
          videos: [...prev.videos, ...acceptedFiles],
        }));
      }
    }
  }, []);

  const { getRootProps: getImageRootProps, getInputProps: getImageInputProps } =
    useDropzone({
      onDrop: (files) => onDrop(files, "images"),
      accept: { "image/*": [] },
    });

  const { getRootProps: getVideoRootProps, getInputProps: getVideoInputProps } =
    useDropzone({
      onDrop: (files) => onDrop(files, "videos"),
      accept: { "video/*": [] },
    });

  const {
    getRootProps: getThumbnailRootProps,
    getInputProps: getThumbnailInputProps,
  } = useDropzone({
    onDrop: (files) => onDrop(files, "thumbnail"),
    accept: { "image/*": [] },
    maxFiles: 1,
  });

  const handleAddContent = async () => {
    const formData = new FormData();
    Object.keys(newContent).forEach((key) => {
      if (key === "hashtags") {
        formData.append(
          key,
          newContent[key]
            .split(",")
            .map((tag) => tag.trim())
            .join(",")
        );
      } else if (key === "images" || key === "videos") {
        newContent[key].forEach((file) => {
          formData.append(key, file);
        });
      } else if (key === "thumbnail" && newContent[key]) {
        formData.append(key, newContent[key]);
      } else {
        formData.append(key, newContent[key]);
      }
    });

    console.log("Submitting FormData:", [...formData.entries()]); // Debug FormData

    await addContent(formData);
    setNewContent({
      title: "",
      description: "",
      thumbnail: null,
      category: "",
      hashtags: "",
      images: [],
      videos: [],
      documents: "",
      permissions: "",
    });
    setIsAddDialogOpen(false);
    fetchContents();
  };

  const handleUpdateContent = async () => {
    const formData = new FormData();

    // Log before appending to confirm the values
    console.log("Editing Content:", editingContent);

    Object.keys(editingContent).forEach((key) => {
      if (key === "hashtags") {
        formData.append(
          key,
          Array.isArray(editingContent[key])
            ? editingContent[key].join(",")
            : editingContent[key]
        );
      } else if (key === "images" || key === "videos") {
        newContent[key].forEach((file) => {
          formData.append(key, file);
        });
      } else if (key === "thumbnail" && editingContent[key]) {
            formData.append(key, editingContent[key]);
      } else {
        console.log(`Appending ${key}:`, editingContent[key]); // Log other data
        formData.append(key, editingContent[key]);
      }
    });

    // Check FormData entries
    for (let pair of formData.entries()) {
      console.log(pair[0] + ": " + pair[1]); // Log all keys and values in FormData
    }

    // Send to backend
    await updateContent(editingContent.id, formData);
    setEditingContent(null);
    setIsEditDialogOpen(false);
    fetchContents();
  };

  const handleDeleteContent = async (id) => {
    await deleteContent(id);
    fetchContents();
  };

  const renderForm = (content, setContent, isEditing = false) => (
    <div className="space-y-4">
      <Input
        placeholder="Title"
        value={content.title}
        onChange={(e) => setContent({ ...content, title: e.target.value })}
        className="bg-slate-700 text-white border-slate-600"
      />
      <Textarea
        placeholder="Description"
        value={content.description}
        onChange={(e) =>
          setContent({ ...content, description: e.target.value })
        }
        className="bg-slate-700 text-white border-slate-600"
      />
      {/* <div>
        <label className="block text-sm font-medium text-gray-300 mb-1">
          Thumbnail
        </label>
        <div
          {...getThumbnailRootProps()}
          className="border-2 border-dashed border-gray-300 rounded-md p-4 text-center cursor-pointer"
        >
          <input {...getThumbnailInputProps()} />
          <p className="text-gray-300">
            Drag 'n' drop a thumbnail image here, or click to select one
          </p>
          {content.thumbnail && (
            <p className="text-gray-300 mt-2">
              {content.thumbnail.name || content.thumbnail}
            </p>
          )}
        </div>
      </div> */}
      <Input
        placeholder="Category"
        value={content.category}
        onChange={(e) => setContent({ ...content, category: e.target.value })}
        className="bg-slate-700 text-white border-slate-600"
      />
      <Input
        placeholder="Hashtags (comma-separated)"
        value={content.hashtags}
        onChange={(e) => setContent({ ...content, hashtags: e.target.value })}
        className="bg-slate-700 text-white border-slate-600"
      />
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1">
          Images
        </label>
        <div
          {...getImageRootProps()}
          className="border-2 border-dashed border-gray-300 rounded-md p-4 text-center cursor-pointer"
        >
          <input {...getImageInputProps()} />
          <p className="text-gray-300">
            Drag 'n' drop some images here, or click to select files
          </p>
          {content.images && content.images.length > 0 && (
            <ul className="mt-2 text-gray-300">
              {content.images.map((file, index) => (
                <li key={index}>{file instanceof File ? file.name : file}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1">
          Videos
        </label>
        <div
          {...getVideoRootProps()}
          className="border-2 border-dashed border-gray-300 rounded-md p-4 text-center cursor-pointer"
        >
          <input {...getVideoInputProps()} />
          <p className="text-gray-300">
            Drag 'n' drop some videos here, or click to select files
          </p>
          {content.videos && content.videos.length > 0 && (
            <ul className="mt-2 text-gray-300">
              {content.videos.map((file, index) => (
                <li key={index}>{file instanceof File ? file.name : file}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <Input
        placeholder="Documents (comma-separated URLs)"
        value={content.documents}
        onChange={(e) => setContent({ ...content, documents: e.target.value })}
        className="bg-slate-700 text-white border-slate-600"
      />
      <Input
        placeholder="Permissions (comma-separated user IDs)"
        value={content.permissions}
        onChange={(e) =>
          setContent({ ...content, permissions: e.target.value })
        }
        className="bg-slate-700 text-white border-slate-600"
      />
      <Button
        onClick={isEditing ? handleUpdateContent : handleAddContent}
        className="bg-red-500 hover:bg-red-600 text-white"
      >
        {isEditing ? "Update Content" : "Add Content"}
      </Button>
    </div>
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-white">Content Management</h1>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-red-500 hover:bg-red-600 text-white">
              <Plus className="w-4 h-4 mr-2" /> Add Content
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-slate-800 text-white">
            <DialogHeader>
              <DialogTitle>Add New Content</DialogTitle>
            </DialogHeader>
            {renderForm(newContent, setNewContent)}
          </DialogContent>
        </Dialog>
      </div>
      <Table className="bg-slate-800 text-white">
        <TableHeader>
          <TableRow>
            <TableHead className="text-red-400">Title</TableHead>
            <TableHead className="text-red-400">Category</TableHead>
            <TableHead className="text-red-400">Status</TableHead>
            <TableHead className="text-red-400">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {contents.map((content) => (
            <TableRow key={content.id}>
              <TableCell>{content.title}</TableCell>
              <TableCell>{content.category}</TableCell>
              <TableCell>{content.status}</TableCell>
              <TableCell>
                <div className="flex space-x-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => {
                      setEditingContent(content);
                      setIsEditDialogOpen(true);
                    }}
                  >
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleDeleteContent(content.id)}
                  >
                    <Trash className="w-4 h-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="bg-slate-800 text-white">
          <DialogHeader>
            <DialogTitle>Edit Content</DialogTitle>
          </DialogHeader>
          {editingContent &&
            renderForm(editingContent, setEditingContent, true)}
        </DialogContent>
      </Dialog>
    </div>
  );
}
