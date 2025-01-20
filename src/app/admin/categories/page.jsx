"use client"

import { useState, useEffect } from "react"
import { Plus, Edit, Trash } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { addCategory, deleteCategory, getCategories, updateCategory } from "../../../../lib/api"


export default function CategoryManagement() {
  const [categories, setCategories] = useState([])
  const [newCategory, setNewCategory] = useState("")
  const [editingCategory, setEditingCategory] = useState(null)
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)

  useEffect(() => {
    fetchCategories()
  }, [])

  const fetchCategories = async () => {
    const fetchedCategories = await getCategories()
    setCategories(fetchedCategories)
  }

  const handleAddCategory = async () => {
    await addCategory(newCategory)
    setNewCategory("")
    setIsAddDialogOpen(false)
    fetchCategories()
  }

  const handleUpdateCategory = async () => {
    await updateCategory(editingCategory.id, editingCategory.name)
    setEditingCategory(null)
    setIsEditDialogOpen(false)
    fetchCategories()
  }

  const handleDeleteCategory = async (id) => {
    await deleteCategory(id)
    fetchCategories()
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-white">Category Management</h1>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-red-500 hover:bg-red-600 text-white">
              <Plus className="w-4 h-4 mr-2" /> Add Category
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-slate-800 text-white">
            <DialogHeader>
              <DialogTitle>Add New Category</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <Input
                placeholder="Category Name"
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
                className="bg-slate-700 text-white border-slate-600"
              />
              <Button onClick={handleAddCategory} className="bg-red-500 hover:bg-red-600 text-white">
                Add Category
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
      <Table className="bg-slate-800 text-white">
        <TableHeader>
          <TableRow>
            <TableHead className="text-red-400">Category Name</TableHead>
            <TableHead className="text-red-400">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {categories.map((category) => (
            <TableRow key={category.id}>
              <TableCell>{category.name}</TableCell>
              <TableCell>
                <div className="flex space-x-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => {
                      setEditingCategory(category)
                      setIsEditDialogOpen(true)
                    }}
                  >
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="icon" onClick={() => handleDeleteCategory(category.id)}>
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
            <DialogTitle>Edit Category</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <Input
              placeholder="Category Name"
              value={editingCategory?.name || ""}
              onChange={(e) => setEditingCategory({ ...editingCategory, name: e.target.value })}
              className="bg-slate-700 text-white border-slate-600"
            />
            <Button onClick={handleUpdateCategory} className="bg-red-500 hover:bg-red-600 text-white">
              Update Category
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

