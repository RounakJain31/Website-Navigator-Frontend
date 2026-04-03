import React, { useState } from "react";
import Navbar from "./components/Navbar";
import FileUpload from "./components/FileUpload";
import WebViewer from "./components/WebViewer";
import NavButtons from "./components/NavButtons";

function App() {
  const [urls, setUrls] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleUpload = (data) => {
    setUrls(data);
    setCurrentIndex(0);
  };

  const handleNext = () => {
    if (currentIndex < urls.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <>
      <Navbar />
      <FileUpload onUpload={handleUpload} />

      {urls.length > 0 && (
        <>
          <WebViewer currentUrl={urls[currentIndex]} />
          <NavButtons
            currentIndex={currentIndex}
            total={urls.length}
            onNext={handleNext}
            onPrev={handlePrev}
          />
        </>
      )}
    </>
  );
}

export default App;