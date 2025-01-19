let contents = [
  {
    id: 1,
    title: "Introduction to React",
    description: "Learn the basics of React, a popular JavaScript library for building user interfaces.",
    date: "2023-01-15T10:00:00Z",
    status: "Published",
    thumbnail: "/bg.jpg",
    category: "Technology",
    hashtags: ["react", "javascript", "frontend"],
    permissions: ["all"],
    relatedContent: [],
    files: [
      { name: "Thumbnail", type: "image", url: "https://fastly.picsum.photos/id/496/300/200.jpg?hmac=tV3-6J8a3kBimv4u9qurzeWeTUcVBJFZ4YAkyvzsQyY" },
      { name: "React Basics", type: "document", url: "https://example.com/react-basics.pdf" },
      { name: "React Tutorial", type: "video", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" }
    ]
  },
  {
    id: 2,
    title: "Advanced CSS Techniques",
    description: "Explore advanced CSS techniques to create stunning web designs.",
    date: "2023-02-20T14:30:00Z",
    status: "Published",
    thumbnail: "/bg2.jpeg",
    category: "Design",
    hashtags: ["css", "webdesign", "frontend"],
    permissions: ["all"],
    relatedContent: [],
    files: [
      { name: "Thumbnail", type: "image", url: "https://picsum.photos/seed/css/300/200" },
      { name: "CSS Tricks", type: "document", url: "https://example.com/css-tricks.pdf" },
      { name: "CSS Animation Demo", type: "video", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" }
    ]
  },
  {
    id: 3,
    title: "Node.js Fundamentals",
    description: "Get started with Node.js and learn how to build scalable server-side applications.",
    date: "2023-03-10T09:15:00Z",
    status: "Published",
    thumbnail: "/bg3.jpeg",
    category: "Technology",
    hashtags: ["nodejs", "javascript", "backend"],
    permissions: ["all"],
    relatedContent: [],
    files: [
      { name: "Thumbnail", type: "image", url: "https://picsum.photos/seed/nodejs/300/200" },
      { name: "Node.js Cheatsheet", type: "document", url: "https://example.com/nodejs-cheatsheet.pdf" },
      { name: "Building a REST API", type: "video", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" }
    ]
  },
  {
    id: 4,
    title: "UI/UX Design Principles",
    description: "Learn the fundamental principles of UI/UX design to create user-friendly interfaces.",
    date: "2023-04-05T11:45:00Z",
    status: "Published",
    thumbnail: "/bg4.jpeg",
    category: "Design",
    hashtags: ["uiux", "design", "userexperience"],
    permissions: ["all"],
    relatedContent: [],
    files: [
      { name: "Thumbnail", type: "image", url: "https://picsum.photos/seed/uiux/300/200" },
      { name: "UI/UX Best Practices", type: "document", url: "https://example.com/uiux-best-practices.pdf" },
      { name: "Prototyping Tutorial", type: "video", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" }
    ]
  },
  {
    id: 5,
    title: "Python for Data Science",
    description: "Discover how to use Python for data analysis and machine learning.",
    date: "2023-05-12T13:20:00Z",
    status: "Published",
    thumbnail: "/bg5.jpeg",
    category: "Technology",
    hashtags: ["python", "datascience", "machinelearning"],
    permissions: ["all"],
    relatedContent: [],
    files: [
      { name: "Thumbnail", type: "image", url: "https://picsum.photos/seed/python/300/200" },
      { name: "Python Data Science Handbook", type: "document", url: "https://example.com/python-data-science.pdf" },
      { name: "Intro to Machine Learning", type: "video", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" }
    ]
  },
  {
    id: 6,
    title: "Responsive Web Design",
    description: "Learn how to create websites that look great on any device.",
    date: "2023-06-18T16:00:00Z",
    status: "Published",
    thumbnail: "/bg6.jpeg",
    category: "Design",
    hashtags: ["responsive", "webdesign", "css"],
    permissions: ["all"],
    relatedContent: [],
    files: [
      { name: "Thumbnail", type: "image", url: "https://picsum.photos/seed/responsive/300/200" },
      { name: "Responsive Design Patterns", type: "document", url: "https://example.com/responsive-patterns.pdf" },
      { name: "Mobile-First Approach", type: "video", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" }
    ]
  },
  {
    id: 7,
    title: "GraphQL Basics",
    description: "Understand the fundamentals of GraphQL and how it differs from REST.",
    date: "2023-07-22T10:30:00Z",
    status: "Published",
    thumbnail: "/bg7.jpeg",
    category: "Technology",
    hashtags: ["graphql", "api", "backend"],
    permissions: ["all"],
    relatedContent: [],
    files: [
      { name: "Thumbnail", type: "image", url: "https://picsum.photos/seed/graphql/300/200" },
      { name: "GraphQL vs REST", type: "document", url: "https://example.com/graphql-vs-rest.pdf" },
      { name: "Building a GraphQL API", type: "video", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" }
    ]
  },
  {
    id: 8,
    title: "Color Theory in Design",
    description: "Explore the principles of color theory and how to apply them in design.",
    date: "2023-08-30T14:45:00Z",
    status: "Published",
    thumbnail: "/bg8.jpeg",
    category: "Design",
    hashtags: ["colortheory", "design", "art"],
    permissions: ["all"],
    relatedContent: [],
    files: [
      { name: "Thumbnail", type: "image", url: "https://picsum.photos/seed/colortheory/300/200" },
      { name: "Color Harmony Guide", type: "document", url: "https://example.com/color-harmony.pdf" },
      { name: "Choosing Color Palettes", type: "video", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" }
    ]
  },
  {
    id: 9,
    title: "Introduction to Docker",
    description: "Learn the basics of Docker and how to containerize your applications.",
    date: "2023-09-05T11:00:00Z",
    status: "Published",
    thumbnail: "/bg9.jpeg",
    category: "Technology",
    hashtags: ["docker", "devops", "containerization"],
    permissions: ["all"],
    relatedContent: [],
    files: [
      { name: "Thumbnail", type: "image", url: "https://picsum.photos/seed/docker/300/200" },
      { name: "Docker Cheatsheet", type: "document", url: "https://example.com/docker-cheatsheet.pdf" },
      { name: "Containerizing a Node.js App", type: "video", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" }
    ]
  }
];

export async function addContent(content) {
  await new Promise(resolve => setTimeout(resolve, 1000))
  const newContent = { 
    ...content, 
    id: contents.length + 1,
    date: new Date().toISOString(),
    status: 'Published',
    hashtags: content.hashtags.split(',').map(tag => tag.trim()),
    permissions: content.permissions ? content.permissions.split(',').map(permission => permission.trim()) : [],
    relatedContent: [],
    files: [
      ...(content.thumbnail ? [{ name: 'Thumbnail', type: 'image', url: URL.createObjectURL(content.thumbnail) }] : []),
      ...(content.images ? content.images.map(img => ({ name: img.name, type: 'image', url: URL.createObjectURL(img) })) : []),
      ...(content.videos ? content.videos.map(video => ({ name: video.name, type: 'video', url: URL.createObjectURL(video) })) : []),
      ...(content.documents ? content.documents.split(',').map(doc => ({ name: doc.trim(), type: 'document', url: doc.trim() })) : [])
    ]
  }
  contents.push(newContent)
  return newContent
}

export async function getPublishedContents() {
  await new Promise(resolve => setTimeout(resolve, 1000))
  return [...contents.filter(content => content.status === 'Published')]
}

export async function getContentById(id) {
  await new Promise(resolve => setTimeout(resolve, 1000)) // Simulating API delay
  return contents.find(content => content.id === parseInt(id))
}

