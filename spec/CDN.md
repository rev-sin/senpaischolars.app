# BunnyCDN Video Upload and Transcoding Workflow

This document outlines the recommended workflow for handling video uploads, 
transcoding, and database updates using BunnyCDN. The process is designed to be 
robust, efficient, and scalable.

The core strategy is the **"Transcoding Complete" Pattern**, which relies on a 
single webhook from BunnyCDN after all video processing is finished.

## Step 1: Client-Side Upload Request

1.  The admin user selects a video file to upload for a specific `Content` 
    entity in the browser.
2.  The client makes an API call to the backend (e.g., 
    `POST /api/admin/courses/[courseId]/videos/upload-request`).
3.  The backend endpoint:
    a. Creates a `VideoMetadata` record in the database, linked to the 
       `Content` ID. All URL fields are `null` and `transcoded` is `false`.
    b. Communicates with the BunnyCDN API to get a secure, time-limited 
       upload URL. The new `VideoMetadata` ID is passed as a `meta` tag to 
       BunnyCDN.
4.  The API returns the secure upload URL to the client.

## Step 2: Direct Client-to-BunnyCDN Upload

1.  The client's browser uploads the video file directly to the secure URL 
    provided by BunnyCDN.
2.  This is highly scalable as the large video file does not pass through the 
    application server, saving bandwidth and processing power.

## Step 3: BunnyCDN Transcodes the Video

1.  Once the upload is complete, BunnyCDN automatically starts the transcoding 
    process based on the settings in the video library (e.g., 1080p, 720p).

## Step 4: BunnyCDN Sends a Single "Transcoding Complete" Webhook

1.  When all formats are generated, BunnyCDN sends a single POST request to a 
    pre-configured webhook URL (e.g., 
    `/api/webhooks/bunny/transcoding-complete`).
2.  The webhook payload contains the status, a list of all output URLs, and 
    the `VideoMetadata` ID that was set as a `meta` tag in Step 1. This ID is 
    the key to linking the webhook back to the correct database record.

## Step 5: Webhook Handler Updates the Database

1.  The Next.js API route for the webhook receives the request.
2.  It validates the webhook's authenticity (e.g., via a signature header).
3.  It parses the request body to extract the `VideoMetadata` ID and output URLs.
4.  It performs a **single `prisma.videoMetadata.update()`** operation to fill 
    in all the video format URLs, the duration, and sets `transcoded` to `true`.

## Handling Thumbnails

Thumbnails are simpler as they do not require transcoding.

1.  Request a secure upload URL from the backend.
2.  Client uploads the thumbnail image directly to BunnyCDN.
3.  A simple notification (client-side or a storage webhook) triggers a 
    backend update.
4.  The backend updates the `thumbnailUrl` on the `Course` or `Content` model.

## Advantages of this Approach

*   **Efficiency:** One webhook and one database update per video.
*   **Atomicity:** The database is updated in a single transaction, preventing 
    inconsistent states.
*   **Robustness:** The logic is simpler and less prone to errors from missed 
    webhooks or race conditions.
*   **Scalability:** Direct client-to-CDN uploads are essential for performance.
