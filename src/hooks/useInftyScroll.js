import React, { useEffect, useState } from "react";
import { fetchConToken } from "../api/fetch";

export const useInftyScroll = (endpoint) => {
  const [items, setItems] = useState([]);

  const [hasMore, sethasMore] = useState(true);

  const [page, setpage] = useState(1);

  useEffect(() => {
    const getComments = async () => {
      const res = await fetchConToken(`${endpoint}/0`);
      if (res.ok) setItems(res.data);
    };

    getComments();
  }, [endpoint]);

  const fetchComments = async () => {
    const res = await fetchConToken(`${endpoint}/${page * 30}`);
    if (res.ok) return res.data;
  };

  const fetchData = async () => {
    const commentsFormServer = await fetchComments();

    setItems([...items, ...commentsFormServer]);
    if (commentsFormServer.length === 0 || commentsFormServer.length < 20) {
      sethasMore(false);
    }
    setpage(page + 1);
  };
  return {
    items,
    hasMore,
    sethasMore,
    setItems,
    setpage,
    page,
    fetchComments,
    fetchData,
  };
};
