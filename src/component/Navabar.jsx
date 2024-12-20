import React from 'react'

const Navabar = () => {
  return (
    <div>
      <header className="p-3 text-dark container rounded mt-4 font-medium" style={{backgroundColor: "#e3f2fd"}}>
  <div className="container">
    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
      <a
        href="/"
        className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
      >
        <svg
          className="bi me-2"
          width={40}
          height={32}
          role="img"
          aria-label="Bootstrap"
        >
        </svg>
      </a>
      <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
        <li>
          <a href="#" className="nav-link px-2 text-secondary">
            Home
          </a>
        </li>
        
        <li>
          <a href="#" className="nav-link px-2 text-dark">
            About
          </a>
        </li>
      </ul>
      <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
        <input
          type="search"
          className="form-control form-control-dark text-dark"
          placeholder="Search..."
          aria-label="Search"
        />
      </form>
      <div className="text-end">
        <button type="button" className="btn btn-outline-dark me-2">
          Login
        </button>
        <button type="button" className="btn btn-primary">
          Sign-up
        </button>
      </div>
    </div>
  </div>
</header>

    </div>
  )
}

export default Navabar