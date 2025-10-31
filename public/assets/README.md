# Video Assets

## Hero Video

Place your hero background video in this directory as `hero.mp4`.

### Recommended Video Specifications:
- **Format**: MP4 (H.264 codec)
- **Resolution**: 1920x1080 (Full HD) or higher
- **Aspect Ratio**: 16:9
- **Duration**: 10-30 seconds (will loop automatically)
- **File Size**: Keep under 5MB for optimal loading
- **Frame Rate**: 30fps
- **Bitrate**: 2-4 Mbps for good quality with reasonable file size

### Tips for Best Results:
1. **Compress your video** - Use tools like HandBrake or FFmpeg to optimize
2. **Use subtle motion** - Avoid fast movements that could distract from content
3. **Consider lighting** - Ensure text remains readable over the video
4. **Test on mobile** - Video backgrounds can be resource-intensive on mobile devices

### Converting Your Video:
If you have a `.mb4` file, rename it to `.mp4` or convert it using FFmpeg:
```bash
ffmpeg -i hero.mb4 -c:v libx264 -crf 23 -preset medium -c:a aac -b:a 128k hero.mp4
```

### Current Behavior:
- The hero section will automatically display your video when `hero.mp4` is present
- If the video fails to load or isn't present, the static background image will display as fallback
- Video will autoplay, loop, and be muted (required for autoplay to work in browsers)
