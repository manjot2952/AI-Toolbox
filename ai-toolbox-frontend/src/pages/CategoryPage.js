import { useParams } from "react-router-dom";
import { useEffect, useState, useRef } from "react";

import Header from "../components/layout/Header";
import ToolCard from "../components/common/statscard";

import { getCategoryTools } from "../api/category";

export default function CategoryPage() {

  const { id } = useParams();

  const [tools, setTools] = useState([]);
  const [page, setPage] = useState(0);
  const [lastPage, setLastPage] = useState(false);

  const loaderRef = useRef(null);
  const [category, setCategory] = useState(null);

  useEffect(() => {
      fetch(`http://localhost:8081/api/categories/${id}`)
          .then(res => res.json())
          .then(setCategory);
  }, [id]);

  useEffect(() => {
    setTools([]);
    setPage(0);
    setLastPage(false);
  }, [id]);

  useEffect(() => {
    loadMore();
  }, [page, id]);

  async function loadMore() {

    if (lastPage) return;

    const data = await getCategoryTools(
      id,
      page,
      12
    );

    setTools(prev => [
      ...prev,
      ...data.content
    ]);

    setLastPage(data.last);
  }

  useEffect(() => {

    const observer =
      new IntersectionObserver(
        (entries) => {

          if (
            entries[0].isIntersecting &&
            !lastPage
          ) {
            setPage(prev => prev + 1);
          }
        }
      );

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => observer.disconnect();

  }, [lastPage]);

  return (
    <>
      <Header
      title={category?.categoryName || "Loading..."}
      subtitle={`Explore the best ${category?.categoryName || ""} AI tools.`} 
      icon={category?.icon || ""}
    />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">

        {tools.map(tool => (
          <ToolCard
            key={tool.id}
            tool={tool}
          />
        ))}

      </div>

      {!lastPage && (
        <div
          ref={loaderRef}
          className="h-10 flex justify-center items-center"
        >
          Loading...
        </div>
      )}
    </>
  );
}