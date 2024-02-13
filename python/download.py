from pytube import YouTube
from pytube.exceptions import RegexMatchError, VideoUnavailable, PytubeError

def download_video(url: str) -> str:
    try:
        yt = YouTube(url)
        stream = yt.streams.filter(res="720p", progressive=True).first()
        if stream:
            stream.download()
            return "Download was successful"
    except RegexMatchError:
        return "Invalid URL"
    except VideoUnavailable:
        return "Video is unavailable for download"
    except PytubeError as e:
        return f"An error occurred: {e}"