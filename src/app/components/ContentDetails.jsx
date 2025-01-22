"use client";

import { useState } from "react";
import { ArrowLeft, Download, File, Image, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function ContentDetails({ content }) {
  if (!content) {
    return <div className="text-center text-white">Content not found</div>;
  }

  console.log("Content Details:", content); // Debugging the content prop

  const [activeTab, setActiveTab] = useState("description");

  const renderTabContent = () => {
    switch (activeTab) {
      case "description":
        return (
          <div>
            <p className="text-slate-300 mb-4">
              {content.description || "No description available."}
            </p>
            <div>
              <h3 className="text-white font-bold mb-2">Category:</h3>
              <p className="text-slate-300">{content.category || "N/A"}</p>
            </div>
          </div>
        );
      case "related":
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {content.hashtags && content.hashtags.length > 0 ? (
              content.hashtags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-amber-400 text-black rounded-full px-3 py-1 text-sm"
                >
                  #{tag}
                </span>
              ))
            ) : (
              <p className="text-slate-300">No related content available.</p>
            )}
          </div>
        );
      case "files":
        return (
          <ul className="space-y-4">
            {/* Display Images */}
            {content.images && (
              <li className="bg-slate-800 p-3 rounded-lg">
                <div className="flex items-center gap-4">
                  <Image className="w-6 h-6 text-amber-400" />
                  <a
                    href={content.images}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-400 hover:underline"
                  >
                    View Image
                  </a>
                </div>
              </li>
            )}

            {/* Display Videos */}
            {content.videos && (
              <li className="bg-slate-800 p-3 rounded-lg">
                <div className="flex items-center gap-4">
                  <Video className="w-6 h-6 text-amber-400" />
                  <a
                    href={content.videos}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-400 hover:underline"
                  >
                    Watch Video
                  </a>
                </div>
              </li>
            )}

            {/* Display Documents */}
            {content.documents && (
              <li className="bg-slate-800 p-3 rounded-lg">
                <div className="flex items-center gap-4">
                  <File className="w-6 h-6 text-amber-400" />
                  <a
                    href={content.documents}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-400 hover:underline"
                  >
                    View Document
                  </a>
                </div>
              </li>
            )}

            {/* Display Permissions */}
            {content.permissions && content.permissions.length > 0 ? (
              content.permissions.map((perm, index) => (
                <li key={index} className="bg-slate-800 p-3 rounded-lg">
                  <div className="flex items-center gap-4">
                    <File className="w-6 h-6 text-amber-400" />
                    <span className="text-white">{perm}</span>
                  </div>
                </li>
              ))
            ) : (
              <li className="text-slate-300">No permissions available.</li>
            )}
          </ul>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Link href="/" className="inline-flex items-center text-amber-400 hover:text-amber-300 mb-6">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Catalogue
        </Link>
        <div className="bg-slate-900 rounded-xl overflow-hidden shadow-xl">
          <div className="aspect-video relative">
            <img
              src={content.thumbnail || "/placeholder.svg"}
              alt={content.title || "Untitled"}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h1 className="text-3xl font-bold text-white mb-2">
                  {content.title || "Untitled"}
                </h1>
                <div className="text-white text-sm">{new Date(content.date).toLocaleDateString()}</div>
              </div>
            </div>
          </div>
          <div className="p-6">
            <div className="flex gap-4 mb-6">
              <Button
                variant={activeTab === "description" ? "default" : "outline"}
                onClick={() => setActiveTab("description")}
              >
                Description
              </Button>
              <Button
                variant={activeTab === "related" ? "default" : "outline"}
                onClick={() => setActiveTab("related")}
              >
                Related Content
              </Button>
              <Button
                variant={activeTab === "files" ? "default" : "outline"}
                onClick={() => setActiveTab("files")}
              >
                Files
              </Button>
            </div>
            {renderTabContent()}
          </div>
        </div>
      </div>
    </div>
  );
}
