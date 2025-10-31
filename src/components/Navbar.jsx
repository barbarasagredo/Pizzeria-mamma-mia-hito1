function Navbar() {
  const total = 25000;
  const token = false;
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand italian-font" href="#">
            <i class="fas fa-pizza-slice me-1"></i>
            Pizzeria Mamma Mía
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse justify-content-between"
            id="navbarNavAltMarkup"
          >
            <div class="navbar-nav">
              <a class="nav-link active" aria-current="page" href="#">
                <i class="fas fa-home me-1"></i>
                Home
              </a>
              {token ? (
                <a class="nav-link" href="#">
                  <i class="fas fa-user me-1"></i>
                  Profile
                </a>
              ) : (
                <a class="nav-link" href="#">
                  <i class="fas fa-user-plus me-1"></i>
                  Register
                </a>
              )}
              {token ? (
                <a class="nav-link" href="#">
                  <i class="fas fa-sign-out-alt me-1"></i>
                  Logout
                </a>
              ) : (
                <a class="nav-link" href="#">
                  <i class="fas fa-sign-in-alt me-1"></i>
                  Login
                </a>
              )}
            </div>
            <div class="navbar-nav">
              <a class="nav-link">
                <i class="fas fa-shopping-cart me-1"></i>
                Total: $ {total.toLocaleString()}
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
