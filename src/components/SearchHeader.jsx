import { BiSearch } from "react-icons/bi";
import { BsYoutube } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function SearchHeader() {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState('');
  const backHome = (e) => {
    navigate('/');
  }
  const handleKeyword = (e) => {
    setKeyword(e.target.value);
  }
  const handleSearch = (e) => {
    e.preventDefault();
    if (keyword.trim().length !== 0) {
      const encodedKeyword = encodeURIComponent(keyword);
      navigate(`/results/${encodedKeyword}`);
      setKeyword('');
    }
  };
  const handleEnter = (e) => {
    if (e.keyCode === 13) {
      handleSearch(e);
    }
  };


  return (

    <header className="header">
      <BsYoutube onClick={backHome} />
      <span>YouTube</span>
      <form>
        <input
          placeholder='Search'
          value={keyword}
          onChange={handleKeyword}
          onKeyDown={handleEnter} />
        <BiSearch onClick={handleSearch} />
      </form>
    </header>
  )
}