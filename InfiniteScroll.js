import React, { useState, useEffect, useCallback } from 'react';

const InfiniteScroll = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  // Simulate fetching more data
  const fetchMoreData = async () => {
    if (loading) return; // Prevent multiple fetches
    setLoading(true);

    // Simulating an API request (e.g., fetch more items from a server)
    setTimeout(() => {
      const newItems = Array.from({ length: 10 }, (_, index) => `Item #${items.length + index + 1}`);
      setItems((prevItems) => [...prevItems, ...newItems]);

      // If there are no more items to load, set `hasMore` to false
      if (newItems.length < 10) {
        setHasMore(false);
      }

      setLoading(false);
    }, 1000);
  };

  const handleScroll = useCallback((e) => {
    const bottom = e.target.scrollHeight === e.target.scrollTop + e.target.clientHeight;
    if (bottom && hasMore) {
      fetchMoreData();
    }
  }, [hasMore, loading]);

  useEffect(() => {
    // Initial data fetch
    fetchMoreData();
  }, []);

  return (
    <div
      className="container my-4"
      style={{ height: '400px', overflowY: 'auto', border: '1px solid #ddd', padding: '10px' }}
      onScroll={handleScroll}
    >
      <ul className="list-group">
        {items.map((item, index) => (
          <li key={index} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>

      {loading && (
        <div className="d-flex justify-content-center my-3">
          {/* Bootstrap spinner (no React-Bootstrap dependency) */}
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}

      {!hasMore && (
        <div className="text-center text-muted mt-3">
          <small>No more items to load</small>
        </div>
      )}
    </div>
  );
};

export default InfiniteScroll;
