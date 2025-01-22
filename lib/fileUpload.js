// This is a mock function to simulate file uploads to a storage service
export async function uploadFile(file) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const fakeUrl = `https://fake-storage-service.com/${file.name}`
        resolve(fakeUrl)
      }, 1000) // Simulate a 1-second upload time
    })
  }
  
  