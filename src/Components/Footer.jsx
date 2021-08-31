import '../styles/defaults.css';

function Footer() {
  let year = new Date().getFullYear();

  return (
    <footer>
      <div className='container'>
        <p>Copyright &copy; {year} Brand. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;