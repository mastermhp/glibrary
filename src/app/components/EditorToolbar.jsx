import { Button } from "@/components/ui/button"
import { Bold, Italic, Underline } from 'lucide-react'

export function EditorToolbar({ editor }) {
  if (!editor) {
    return null
  }

  return (
    <div className="flex flex-wrap gap-2 mb-2">
      <Button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={editor.isActive('bold') ? 'is-active bg-slate-600' : 'bg-slate-700'}
        size="icon"
      >
        <Bold className="h-4 w-4" />
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={editor.isActive('italic') ? 'is-active bg-slate-600' : 'bg-slate-700'}
        size="icon"
      >
        <Italic className="h-4 w-4" />
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        className={editor.isActive('underline') ? 'is-active bg-slate-600' : 'bg-slate-700'}
        size="icon"
      >
        <Underline className="h-4 w-4" />
      </Button>
      <select
        onChange={(e) => editor.chain().focus().setColor(e.target.value).run()}
        className="bg-slate-700 text-white border border-slate-600 rounded px-2 py-1"
      >
        <option value="#ffffff">White</option>
        <option value="#ff0000">Red</option>
        <option value="#00ff00">Green</option>
        <option value="#0000ff">Blue</option>
        <option value="#ffff00">Yellow</option>
      </select>
    </div>
  )
}

