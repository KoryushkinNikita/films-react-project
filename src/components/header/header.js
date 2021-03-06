import './header.css'
/**
* Создание реакт элемента хэдера
*/
export default function Header({onKeyPress}) {
  return (
      <header className='header'>
        <div className='name'>КиноПоиск</div>
        <form className='searchForm' onSubmit={onKeyPress}>
          <input className='search' type='text' id='search' name="search"/>
        </form>
      </header>
  );
}
