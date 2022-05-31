import "../../index.css";
import './header.css'

export default function Header({onKeyPress}) {
  return (
      <header className='header'>
        <div className='name'>КиноПоиск</div>
        <form className='searchForm' onSubmit={onKeyPress}>
          <input className='search' type='text' id='search'/>
        </form>
      </header>
  );
}
