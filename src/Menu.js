function Menu() {
    return (<>
    <div id="menu-wrapper">
    <div id="menu">
      <ul>
        <li className="current_page_item">
          <a href="#">Homepage</a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
        <li>
          <a href="#">Photos</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Links</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </div>
    {/* end #menu */}
  </div>
    </>  );
}

export default Menu;