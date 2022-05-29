import "../../index.css";
import './header.css'

export default function Header({onKeyPress}) {
  return (
      <header className='header'>
        <div className='name'>КиноПоиск</div>
        <form className='searchForm'>
          <input className='search' type='text' id='search' onKeyPress={onKeyPress}/>
        </form>
      </header>
  );
}
