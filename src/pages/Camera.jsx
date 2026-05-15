import React, { useRef, useEffect, useState } from 'react';


const Camera = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [isCameraOn, setIsCameraOn] = useState(false);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: 'environment' }
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          setIsCameraOn(true);
        }
      } catch (error) {
        console.error('카메라 접근 실패:', error);
        alert('카메라 접근 권한이 필요합니다.');
      }
    };

    startCamera();

    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        videoRef.current.srcObject.getTracks().forEach(track => track.stop());
        setIsCameraOn(false);
      }
    };
  }, []);

  const capturePhoto = () => {
    if (canvasRef.current && videoRef.current && isCameraOn) {
      const context = canvasRef.current.getContext('2d');
      canvasRef.current.width = videoRef.current.videoWidth;
      canvasRef.current.height = videoRef.current.videoHeight;
      
      context.drawImage(videoRef.current, 0, 0);
      const photoData = canvasRef.current.toDataURL('image/jpeg');
      
      setPhotos([...photos, photoData]);
      alert('촬영되었습니다!');
    }
  };

  const deletePhoto = (index) => {
    setPhotos(photos.filter((_, i) => i !== index));
  };

  const downloadPhoto = (photoData, index) => {
    const link = document.createElement('a');
    link.href = photoData;
    link.download = `photo_${index + 1}.jpg`;
    link.click();
  };

  return (
    <div className="camera-container">
      <h1>카메라 촬영</h1>
      
      <div className="video-container">
        <video 
          ref={videoRef} 
          autoPlay 
          playsInline 
          muted
          className="video-stream"
        />
        <canvas ref={canvasRef} style={{ display: 'none' }} />
      </div>

      <div className="controls">
        <button 
          onClick={capturePhoto} 
          disabled={!isCameraOn}
          className="btn-capture"
        >
          📸 촬영
        </button>
      </div>

      <div className="photos-gallery">
        <h2>촬영한 사진 ({photos.length})</h2>
        <div className="photos-grid">
          {photos.map((photo, index) => (
            <div key={index} className="photo-card">
              <img src={photo} alt={`촬영 ${index + 1}`} />
              <div className="photo-actions">
                <button 
                  onClick={() => downloadPhoto(photo, index)}
                  className="btn-download"
                >
                  ⬇️
                </button>
                <button 
                  onClick={() => deletePhoto(index)}
                  className="btn-delete"
                >
                  ✕
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Camera;