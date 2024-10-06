import logo from '../images/youtubelogo.png';
import { BiSearch } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Header() {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState('');
  const handleKeyword = (e) => {
    setKeyword(e.target.value);
  }
  const search = (e) => {
    e.preventDefault();
    if (keyword.trim().length !== 0) {
      const encodedKeyword = encodeURIComponent(keyword);
      navigate(`/results/${encodedKeyword}`, {
        state: { searchVal: keyword }
      })
      setKeyword('');
    }
  };
  const enterKey = (e) => {
    if (e.keyCode === 13) {
      search(e);
    }
  };

  return (

    <header className="header">
      <img src={logo} width={120} height={60}></img>
      <form>
        <input placeholder='Search' value={keyword} onChange={handleKeyword} onKeyDown={enterKey} />
        <BiSearch onClick={search} />
      </form>
    </header>
  )
}