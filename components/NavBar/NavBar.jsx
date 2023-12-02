import classes from "./NavBar.module.css";

function NavBar() {
  return (
    <div>
      <nav className={classes.nav}>
        <span className={classes.logo}>Keep Clone</span>
      </nav>
    </div>
  );
}

export default NavBar;
