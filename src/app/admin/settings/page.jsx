'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"

export default function Settings() {
  const [settings, setSettings] = useState({
    siteName: 'Assets Catalogue',
    allowRegistration: true,
    maintenanceMode: false,
  })

  const handleChange = (key, value) => {
    setSettings(prev => ({ ...prev, [key]: value }))
  }

  const handleSave = () => {
    // Here you would typically save the settings to your backend
    console.log('Saving settings:', settings)
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-white">Settings</h1>
      <div className="space-y-4">
        <div>
          <label htmlFor="siteName" className="block text-sm font-medium text-gray-300 mb-1">
            Site Name
          </label>
          <Input
            id="siteName"
            value={settings.siteName}
            onChange={(e) => handleChange('siteName', e.target.value)}
            className="bg-slate-700 text-white border-slate-600"
          />
        </div>
        <div className="flex items-center justify-between">
          <label htmlFor="allowRegistration" className="text-sm font-medium text-gray-300">
            Allow User Registration
          </label>
          <Switch
            id="allowRegistration"
            checked={settings.allowRegistration}
            onCheckedChange={(checked) => handleChange('allowRegistration', checked)}
          />
        </div>
        <div className="flex items-center justify-between">
          <label htmlFor="maintenanceMode" className="text-sm font-medium text-gray-300">
            Maintenance Mode
          </label>
          <Switch
            id="maintenanceMode"
            checked={settings.maintenanceMode}
            onCheckedChange={(checked) => handleChange('maintenanceMode', checked)}
          />
        </div>
        <Button onClick={handleSave} className="bg-red-500 hover:bg-red-600 text-white">
          Save Settings
        </Button>
      </div>
    </div>
  )
}

