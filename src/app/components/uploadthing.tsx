"use client";

import { UploadButton } from "@/utils/uploadthing";


// Define an interface for the expected response type if necessary
interface UploadResponse {
  url: string; // Adjust based on the actual structure of your response
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <UploadButton
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
            // Do something with the response
            console.log("waiting for response...");
            console.log("Files: ", res);
            alert("Upload Completed");
          }}
          onUploadError={(error: Error) => {
            console.log("error", error);
            // Do something with the error.
            alert(`ERROR! ${error.message}`);
          }}
      />
    </main>
  );
}
