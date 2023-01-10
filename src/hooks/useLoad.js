import React, { useCallback, useEffect, useState } from "react";

export const useLoad = (page) => {
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState([]);

  const getPhotos = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://picsum.photos/v2/list?page=${page}&limit=10`
      );
      const data = await response.json();
      setPhotos((prev) => [...prev, ...data]);
      setLoading(false);
    } catch (err) {
      console.error(err);
    }
  }, [page]);

  useEffect(() => {
    getPhotos();
  }, [getPhotos]);

  return { loading, photos };
};
