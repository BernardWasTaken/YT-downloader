# YT-downloader

YT-downloader is a project born out of an afternoon's boredom :). Used to easily download youtube videos with one click.

# Setup and Usage

To set up and use YT-downloader, follow these steps:

1. Ensure you have a browser that supports Chrome extensions.
2. Start the API using "uvicorn api:app --reload".
3. Navigate to the extensions page in your browser and enable developer mode.
4. Click on "Load unpacked" and select the folder containing the YT-downloader files.
5. Visit YouTube and play any video.
6. While watching the video, click on the extension icon and then press the download button.
7. The video should be downloaded to the project folder.
# How it Works

Upon clicking the download button, a JavaScript function calls the API endpoint /download, passing the video's URL as a parameter. The video is then downloaded using the Pytube library and saved to the project folder.


It took me years to master my designing skills.

Feel free to contribute if anything is missing!
