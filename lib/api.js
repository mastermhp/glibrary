// import { categories } from "@/app/data/categories"
// import { hashtags } from "@/app/data/hashtags"

// let contents = [
//   {
//     id: 1,
//     title: "Content 1",
//     description: "Description for Content 1",
//     date: new Date(2024, 0, 1).toISOString(),
//     status: "Published",
//     thumbnail: "/content1.jpeg",
//     images: ["/placeholder.svg?height=200&width=300&text=Image+1"],
//     videos: ["https://example.com/video1.mp4"],
//     documents: ["https://example.com/document1.pdf"],
//     hashtags: hashtags.slice(0, 3),
//     permissions: ["user1", "user2"],
//     category: "Technology",
//     relatedContent: [
//       {
//         id: 2,
//         title: "Content 2",
//         thumbnail: "/bg2.jpeg",
//       },
//     ],
//     files: [
//       {
//         name: "Image 1",
//         type: "image",
//         url: "/placeholder.svg?height=200&width=300&text=Image+1",
//       },
//       { name: "Video 1", type: "video", url: "https://example.com/video1.mp4" },
//       {
//         name: "Document 1",
//         type: "document",
//         url: "https://example.com/document1.pdf",
//       },
//     ],
//   },

//   {
//     id: 2,
//     title: "Advanced CSS Techniques",
//     description: "Explore advanced CSS techniques to create stunning web designs.",
//     date: "2023-02-20T14:30:00Z",
//     status: "Published",
//     thumbnail: "/bg2.jpeg",
//     category: "Design",
//     hashtags: ["css", "webdesign", "frontend"],
//     permissions: ["all"],
//     relatedContent: [],
//     files: [
//       {
//         name: "Thumbnail",
//         type: "image",
//         url: "https://picsum.photos/seed/css/300/200",
//       },
//       {
//         name: "CSS Tricks",
//         type: "document",
//         url: "https://example.com/css-tricks.pdf",
//       },
//       {
//         name: "CSS Animation Demo",
//         type: "video",
//         url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
//       },
//     ],
//   },
//   {
//     id: 3,
//     title: "Node.js Fundamentals",
//     description: "Get started with Node.js and learn how to build scalable server-side applications.",
//     date: "2023-03-10T09:15:00Z",
//     status: "Published",
//     thumbnail: "/bg3.jpeg",
//     category: "Technology",
//     hashtags: ["nodejs", "javascript", "backend"],
//     permissions: ["all"],
//     relatedContent: [],
//     files: [
//       {
//         name: "Thumbnail",
//         type: "image",
//         url: "https://picsum.photos/seed/nodejs/300/200",
//       },
//       {
//         name: "Node.js Cheatsheet",
//         type: "document",
//         url: "https://example.com/nodejs-cheatsheet.pdf",
//       },
//       {
//         name: "Building a REST API",
//         type: "video",
//         url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
//       },
//     ],
//   },
//   {
//     id: 4,
//     title: "UI/UX Design Principles",
//     description: "Learn the fundamental principles of UI/UX design to create user-friendly interfaces.",
//     date: "2023-04-05T11:45:00Z",
//     status: "Published",
//     thumbnail: "/bg4.jpeg",
//     category: "Design",
//     hashtags: ["uiux", "design", "userexperience"],
//     permissions: ["all"],
//     relatedContent: [],
//     files: [
//       {
//         name: "Thumbnail",
//         type: "image",
//         url: "https://picsum.photos/seed/uiux/300/200",
//       },
//       {
//         name: "UI/UX Best Practices",
//         type: "document",
//         url: "https://example.com/uiux-best-practices.pdf",
//       },
//       {
//         name: "Prototyping Tutorial",
//         type: "video",
//         url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
//       },
//     ],
//   },
//   {
//     id: 5,
//     title: "Python for Data Science",
//     description: "Discover how to use Python for data analysis and machine learning.",
//     date: "2023-05-12T13:20:00Z",
//     status: "Published",
//     thumbnail: "/bg5.jpeg",
//     category: "Technology",
//     hashtags: ["python", "datascience", "machinelearning"],
//     permissions: ["all"],
//     relatedContent: [],
//     files: [
//       {
//         name: "Thumbnail",
//         type: "image",
//         url: "https://picsum.photos/seed/python/300/200",
//       },
//       {
//         name: "Python Data Science Handbook",
//         type: "document",
//         url: "https://example.com/python-data-science.pdf",
//       },
//       {
//         name: "Intro to Machine Learning",
//         type: "video",
//         url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
//       },
//     ],
//   },
//   {
//     id: 6,
//     title: "Responsive Web Design",
//     description: "Learn how to create websites that look great on any device.",
//     date: "2023-06-18T16:00:00Z",
//     status: "Published",
//     thumbnail: "/bg6.jpeg",
//     category: "Design",
//     hashtags: ["responsive", "webdesign", "css"],
//     permissions: ["all"],
//     relatedContent: [],
//     files: [
//       {
//         name: "Thumbnail",
//         type: "image",
//         url: "https://picsum.photos/seed/responsive/300/200",
//       },
//       {
//         name: "Responsive Design Patterns",
//         type: "document",
//         url: "https://example.com/responsive-patterns.pdf",
//       },
//       {
//         name: "Mobile-First Approach",
//         type: "video",
//         url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
//       },
//     ],
//   },
//   {
//     id: 7,
//     title: "GraphQL Basics",
//     description: "Understand the fundamentals of GraphQL and how it differs from REST.",
//     date: "2023-07-22T10:30:00Z",
//     status: "Published",
//     thumbnail: "/bg7.jpeg",
//     category: "Technology",
//     hashtags: ["graphql", "api", "backend"],
//     permissions: ["all"],
//     relatedContent: [],
//     files: [
//       {
//         name: "Thumbnail",
//         type: "image",
//         url: "https://picsum.photos/seed/graphql/300/200",
//       },
//       {
//         name: "GraphQL vs REST",
//         type: "document",
//         url: "https://example.com/graphql-vs-rest.pdf",
//       },
//       {
//         name: "Building a GraphQL API",
//         type: "video",
//         url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
//       },
//     ],
//   },
//   {
//     id: 8,
//     title: "Color Theory in Design",
//     description: "Explore the principles of color theory and how to apply them in design.",
//     date: "2023-08-30T14:45:00Z",
//     status: "Published",
//     thumbnail: "/bg8.jpeg",
//     category: "Design",
//     hashtags: ["colortheory", "design", "art"],
//     permissions: ["all"],
//     relatedContent: [],
//     files: [
//       {
//         name: "Thumbnail",
//         type: "image",
//         url: "https://picsum.photos/seed/colortheory/300/200",
//       },
//       {
//         name: "Color Harmony Guide",
//         type: "document",
//         url: "https://example.com/color-harmony.pdf",
//       },
//       {
//         name: "Choosing Color Palettes",
//         type: "video",
//         url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
//       },
//     ],
//   },
//   {
//     id: 9,
//     title: "Introduction to Docker",
//     description: "Learn the basics of Docker and how to containerize your applications.",
//     date: "2023-09-05T11:00:00Z",
//     status: "Published",
//     thumbnail: "/bg9.jpeg",
//     category: "Technology",
//     hashtags: ["docker", "devops", "containerization"],
//     permissions: ["all"],
//     relatedContent: [],
//     files: [
//       {
//         name: "Thumbnail",
//         type: "image",
//         url: "https://picsum.photos/seed/docker/300/200",
//       },
//       {
//         name: "Docker Cheatsheet",
//         type: "document",
//         url: "https://example.com/docker-cheatsheet.pdf",
//       },
//       {
//         name: "Containerizing a Node.js App",
//         type: "video",
//         url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
//       },
//     ],
//   },
// ]

// export async function getPublishedContents() {
//   await new Promise((resolve) => setTimeout(resolve, 1000))
//   return contents.filter((content) => content.status === "Published")
// }

// export async function getAllContents() {
//   await new Promise((resolve) => setTimeout(resolve, 1000))
//   return contents
// }

// export async function getContentById(id) {
//   await new Promise((resolve) => setTimeout(resolve, 1000))
//   return contents.find((content) => content.id === Number.parseInt(id))
// }

// export async function addContent(formData) {
//   console.log("FormData Contents:")
//   formData.forEach((value, key) => console.log(`${key}:`, value))

//   console.log("Images Files:", formData.getAll("images")) // Debug images input
//   console.log("Videos Files:", formData.getAll("videos")) // Debug videos input

//   const newContent = {
//     id: contents.length + 1,
//     title: formData.get("title"),
//     description: formData.get("description"),
//     thumbnail:
//       formData.get("thumbnail") instanceof File
//         ? URL.createObjectURL(formData.get("thumbnail"))
//         : formData.get("thumbnail"),
//     category: formData.get("category"),
//     hashtags: formData
//       .get("hashtags")
//       .split(",")
//       .map((tag) => tag.trim()),
//     images: Array.from(formData.getAll("images")).map((file) =>
//       file instanceof File ? URL.createObjectURL(file) : file,
//     ),
//     videos: Array.from(formData.getAll("videos")).map((file) =>
//       file instanceof File ? URL.createObjectURL(file) : file,
//     ),
//     documents: formData
//       .get("documents")
//       .split(",")
//       .map((url) => url.trim()),
//     permissions: formData
//       .get("permissions")
//       .split(",")
//       .map((id) => id.trim()),
//     status: "Published",
//     date: new Date().toISOString(),
//     files: [
//       ...Array.from(formData.getAll("images")).map((file) => ({
//         name: file.name || file.split("/").pop(),
//         type: "image",
//         url: file instanceof File ? URL.createObjectURL(file) : file,
//       })),
//       ...Array.from(formData.getAll("videos")).map((file) => ({
//         name: file.name || file.split("/").pop(),
//         type: "video",
//         url: file instanceof File ? URL.createObjectURL(file) : file,
//       })),
//       ...formData
//         .get("documents")
//         .split(",")
//         .map((url) => ({
//           name: url.split("/").pop(),
//           type: "document",
//           url: url.trim(),
//         })),
//     ],
//   }

//   console.log("New Content with Files:", newContent) // Debug the final content object

//   contents.push(newContent)
//   return newContent
// }

// export async function updateContent(id, formData) {
//   console.log("Received Form Data:", formData)

//   const updatedContent = {
//     id,
//     title: formData.get("title"),
//     description: formData.get("description"),
//     thumbnail:
//       formData.get("thumbnail") instanceof File
//         ? URL.createObjectURL(formData.get("thumbnail"))
//         : formData.get("thumbnail"),
//     category: formData.get("category"),
//     hashtags: formData
//       .get("hashtags")
//       .split(",")
//       .map((tag) => tag.trim()),
//     images: Array.from(formData.getAll("images")).map((file) =>
//       file instanceof File ? URL.createObjectURL(file) : file,
//     ),
//     videos: Array.from(formData.getAll("videos")).map((file) =>
//       file instanceof File ? URL.createObjectURL(file) : file,
//     ),
//     documents: formData
//       .get("documents")
//       .split(",")
//       .map((url) => url.trim()),
//     permissions: formData
//       .get("permissions")
//       .split(",")
//       .map((id) => id.trim()),
//     status: "Published",
//     date: new Date().toISOString(),
//     files: [
//       ...(formData.get("thumbnail") instanceof File
//         ? [
//             {
//               name: formData.get("thumbnail").name,
//               type: "image",
//               url: URL.createObjectURL(formData.get("thumbnail")),
//             },
//           ]
//         : []),
//       ...Array.from(formData.getAll("images")).map((file) => ({
//         name: file.name || file.split("/").pop(),
//         type: "image",
//         url: file instanceof File ? URL.createObjectURL(file) : file,
//       })),
//       ...Array.from(formData.getAll("videos")).map((file) => ({
//         name: file.name || file.split("/").pop(),
//         type: "video",
//         url: file instanceof File ? URL.createObjectURL(file) : file,
//       })),
//       ...formData
//         .get("documents")
//         .split(",")
//         .map((url) => ({
//           name: url.split("/").pop(),
//           type: "document",
//           url: url.trim(),
//         })),
//     ],
//   }

//   console.log("Updated Content:", updatedContent)

//   contents = contents.map((content) => (content.id === id ? { ...content, ...updatedContent } : content))

//   return contents.find((content) => content.id === id)
// }

// // Simulate file upload (replace with actual upload logic)
// async function fakeUploadFile(file) {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve("https://fakeurl.com/" + file.name), 500)
//   })
// }

// export async function deleteContent(id) {
//   await new Promise((resolve) => setTimeout(resolve, 1000))
//   contents = contents.filter((content) => content.id !== id)
//   return { success: true }
// }

// export async function getCategories() {
//   await new Promise((resolve) => setTimeout(resolve, 1000))
//   return categories.map((name, index) => ({ id: index + 1, name }))
// }

// export async function addCategory(name) {
//   await new Promise((resolve) => setTimeout(resolve, 1000))
//   categories.push(name)
//   return { success: true }
// }

// export async function updateCategory(id, name) {
//   await new Promise((resolve) => setTimeout(resolve, 1000))
//   categories[id - 1] = name
//   return { success: true }
// }

// export async function deleteCategory(id) {
//   await new Promise((resolve) => setTimeout(resolve, 1000))
//   categories = categories.filter((_, index) => index !== id - 1)
//   return { success: true }
// }

// export async function getHashtags() {
//   await new Promise((resolve) => setTimeout(resolve, 1000))
//   return hashtags.map((name, index) => ({ id: index + 1, name }))
// }

// export async function addHashtag(name) {
//   await new Promise((resolve) => setTimeout(resolve, 1000))
//   hashtags.push(name)
//   return { success: true }
// }

// export async function updateHashtag(id, name) {
//   await new Promise((resolve) => setTimeout(resolve, 1000))
//   hashtags[id - 1] = name
//   return { success: true }
// }

// export async function deleteHashtag(id) {
//   await new Promise((resolve) => setTimeout(resolve, 1000))
//   hashtags = hashtags.filter((_, index) => index !== id - 1)
//   return { success: true }
// }

export async function getContentById(id) {
  try {
    const response = await fetch(`/api/contents/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({
        message: "Failed to fetch content",
      }))
      throw new Error(errorData.message || "Failed to fetch content")
    }

    const data = await response.json()
    if (!data) {
      throw new Error("No content found")
    }

    return data
  } catch (error) {
    console.error("Error fetching content:", error)
    throw error
  }
}







export async function addContent(formData) {
  try {
    const response = await fetch("/api/contents", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || "Failed to add content");
    }

    return response.json();
  } catch (error) {
    console.error("Error adding content:", error);
    throw error;
  }
}

export async function updateContent(id, formData) {
  try {
    const response = await fetch(`/api/contents/${id}`, {
      method: "PUT",
      body: formData,
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || "Failed to update content");
    }

    return response.json();
  } catch (error) {
    console.error("Error updating content:", error);
    throw error;
  }
}

export async function getAllContents() {
  try {
    const response = await fetch("/api/contents");

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || "Failed to fetch contents");
    }

    return response.json();
  } catch (error) {
    console.error("Error fetching contents:", error);
    throw error;
  }
}

export async function deleteContent(id) {
  try {
    const response = await fetch(`/api/contents/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({
        message: "Unknown error occurred",
      }));
      throw new Error(error.message || "Failed to delete content");
    }

    // Check if there's content in the response
    if (response.status === 204) {
      return { success: true, message: "No content returned" };
    }

    return response.json();
  } catch (error) {
    console.error("Error deleting content:", error);
    throw error;
  }
}
