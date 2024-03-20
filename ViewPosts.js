import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './viewpost.css';
import Navbar from './Navbar';

export default function ViewPosts() {
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [apiError, setApiError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/post');
        setApiData(response.data);
        setLoading(false);
      } catch (error) {
        setApiError(true);
      }
    };

    if (localStorage.getItem('jwtToken')) {
      fetchData();
    } else {
      navigate('/login');
    }
  }, [navigate]);

  if (apiError) {
    return <h1>Something went wrong...</h1>;
  }

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <Navbar />
      <div className="posts-container">
        <h1>Posts</h1>
        <ul className="posts-list">
          {apiData.map((post) => (
            <li key={post.id} className="post-item">
              <h3 className="post-title">{post.title}</h3>
              <p className="post-content">{post.content}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
