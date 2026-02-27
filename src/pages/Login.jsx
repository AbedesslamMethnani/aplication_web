export default function Login() {
    return (
      <div className="container">
        <h2>Connexion</h2>
        <form className="login-form">
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Mot de passe" />
          <button>Login</button>
        </form>
      </div>
    );
  }
  