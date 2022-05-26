import "../../index.css";
import './header.css'

export default function Header({ onSubmit, onInput }) {
  return (
    <>
      <header className='header'>
        <div className='name'>КиноПоиск</div>
        <form className='searchForm' onSubmit={onSubmit}>
          <input className='search' type='text' id='search' onInput={onInput} />
          <button className='submitSearch' type='submit'>
          </button>
        </form>
      </header>
    </>
  );
}
