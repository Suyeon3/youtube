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

    <header className='w-full flex p-4 text-2xl border-b border-zinc-600 mb-4 items-center'>
      <BsYoutube className='text-4xl text-brand ' onClick={backHome} />
      <h1 className="font-bold ml-2 text-3xl">YouTube</h1>
      <form className="w-full flex justify-center items-center">
        <input
          className="w-7/12 p-2 outline-none bh-black text-black"
          placeholder='Search'
          value={keyword}
          onChange={handleKeyword}
          onKeyDown={handleEnter}
        />
        <button className='bg-zinc-600 px-4 py-2'>
          <BiSearch
            className="text-4xl"
            onClick={handleSearch} />
        </button>

      </form>
    </header>
  )
}