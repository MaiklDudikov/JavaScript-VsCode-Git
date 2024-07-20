// Detect Print Screen key press
document.addEventListener('keyup', function(e) {
    if (e.key === 'PrintScreen') {
        alert('Screenshotting is not allowed!');
        navigator.clipboard.writeText('');
    }
});

// Detect screen recording
let isRecording = false;
const detectScreenRecording = () => {
    if (navigator.mediaDevices && navigator.mediaDevices.getDisplayMedia) {
        navigator.mediaDevices.getDisplayMedia({ video: true })
            .then(stream => {
                isRecording = true;
                alert('Screen recording detected. Please stop recording.');
                stream.getTracks().forEach(track => track.stop());
            })
            .catch(err => console.log(err));
    }
};

// Periodically check for screen recording
setInterval(detectScreenRecording, 3000);
