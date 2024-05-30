import React from "react";
import { useState } from "react";
import { useEffect } from "react";

export function ImageSlider({ url, page = 1, limit = 5 }) {
  const [images, setImages] = useState([]);
  const [currentSlide, setCuurentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(false);
  const [loading, setLoading] = useState(false);

  async function fetchImages(geturl) {
    try {
      setLoading(true);

      const response = await fetch(`${geturl}?page=${page}&limit=${limit}`);
      const data = await response.json();

      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (e) {
      setErrorMsg(e.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    if (url != "") fetchImages(url);
  }, [url]);

  console.log(images);

  if (loading) {
    return <div>Loading data ! </div>;
  }

  if (errorMsg !== null) {
    return <div>Error Occured {errorMsg}</div>;
  }

  return (
    <>
      <div className="container"></div>
    </>
  );
}
