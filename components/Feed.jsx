"use client"
import {useState, useEffect} from 'react'
import PromptCard from './PromptCard'

const PromptCardList=({data,handleTagClick})=>{
  return(
    <div className='mt-16 prompt_layout'>
    
      {data.map((post)=>(
        <PromptCard key={post._id} post={post} handleTagClick={handleTagClick}
        />
      ))}
    </div>
  )
}



const Feed = () => {
  const [searchText, setSearchText]=useState('');
  
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [post, setPost] = useState([]);

  const handleSearchChange = (e) => {
    const searchTerm = e.target.value;
    setSearchText(searchTerm);

    const filtered = post.filter((postItem) =>
      postItem.prompt.toLowerCase().includes(searchTerm.toLowerCase())|| postItem.tag.toLowerCase().includes(searchTerm.toLowerCase()) || postItem.creator.username.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredPosts(filtered);
  };
  const handleTagClick=(e)=>{
    setSearchText(e);
    const filtered = post.filter((postItem) =>
       postItem.tag.includes(e) 
    );

    setFilteredPosts(filtered);

  }

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('/api/prompt');
      const data = await response.json();
      setPost(data);
      
      setFilteredPosts(data);
    };

    fetchPosts();
  }, []);

  return (
    <section className='feed'>
      <form className='relative w-full flex-center'>
        <input
          type='text'
          placeholder='Search for a tag or a username'
          value={searchText}
          onChange={handleSearchChange}
          required
          className='search_input peer'
        />
      </form>
      <PromptCardList data={filteredPosts} handleTagClick={handleTagClick} />
    </section>
  );
};

export default Feed;