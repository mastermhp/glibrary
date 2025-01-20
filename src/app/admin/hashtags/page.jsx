"use client"

import { useState, useEffect } from "react"
import { Plus, Edit, Trash } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { addHashtag, deleteHashtag, getHashtags, updateHashtag } from "../../../../lib/api"


export default function HashtagManagement() {
  const [hashtags, setHashtags] = useState([])
  const [newHashtag, setNewHashtag] = useState("")
  const [editingHashtag, setEditingHashtag] = useState(null)
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)

  useEffect(() => {
    fetchHashtags()
  }, [])

  const fetchHashtags = async () => {
    const fetchedHashtags = await getHashtags()
    setHashtags(fetchedHashtags)
  }

  const handleAddHashtag = async () => {
    await addHashtag(newHashtag)
    setNewHashtag("")
    setIsAddDialogOpen(false)
    fetchHashtags()
  }

  const handleUpdateHashtag = async () => {
    await updateHashtag(editingHashtag.id, editingHashtag.name)
    setEditingHashtag(null)
    setIsEditDialogOpen(false)
    fetchHashtags()
  }

  const handleDeleteHashtag = async (id) => {
    await deleteHashtag(id)
    fetchHashtags()
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-white">Hashtag Management</h1>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-red-500 hover:bg-red-600 text-white">
              <Plus className="w-4 h-4 mr-2" /> Add Hashtag
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-slate-800 text-white">
            <DialogHeader>
              <DialogTitle>Add New Hashtag</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <Input
                placeholder="Hashtag Name"
                value={newHashtag}
                onChange={(e) => setNewHashtag(e.target.value)}
                className="bg-slate-700 text-white border-slate-600"
              />
              <Button onClick={handleAddHashtag} className="bg-red-500 hover:bg-red-600 text-white">
                Add Hashtag
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
      <Table className="bg-slate-800 text-white">
        <TableHeader>
          <TableRow>
            <TableHead className="text-red-400">Hashtag Name</TableHead>
            <TableHead className="text-red-400">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {hashtags.map((hashtag) => (
            <TableRow key={hashtag.id}>
              <TableCell>{hashtag.name}</TableCell>
              <TableCell>
                <div className="flex space-x-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => {
                      setEditingHashtag(hashtag)
                      setIsEditDialogOpen(true)
                    }}
                  >
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="icon" onClick={() => handleDeleteHashtag(hashtag.id)}>
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
            <DialogTitle>Edit Hashtag</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <Input
              placeholder="Hashtag Name"
              value={editingHashtag?.name || ""}
              onChange={(e) => setEditingHashtag({ ...editingHashtag, name: e.target.value })}
              className="bg-slate-700 text-white border-slate-600"
            />
            <Button onClick={handleUpdateHashtag} className="bg-red-500 hover:bg-red-600 text-white">
              Update Hashtag
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

