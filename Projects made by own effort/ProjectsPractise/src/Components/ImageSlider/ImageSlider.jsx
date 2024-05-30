import React, { useEffect, useState } from "react";

export function ImageSlider(url, page = 1, limit = 10) {
  const [images, setImages] = useState([]);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchImages(geturl) {
    try {
      setLoading(true);
      const response = await fetch(`${geturl}?page=${page}&limit=${limit}`);
      const data = response.json();

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
    if (url !== "") fetchImages(url);
  }, [url]);

  console.log(images);

  if (loading) {
    return <div>Loading plz wait</div>;
  }

  if (errorMsg !== null) {
    return <div>Error occured ! {errorMsg}</div>;
  }

  return <></>;
}
