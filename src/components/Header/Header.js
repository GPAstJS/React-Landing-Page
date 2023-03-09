export default function Header() {
  return (
    <header
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between" 
      }}
    >
      <div>
        <h1>LOGO HERE</h1>
      </div>

      <div>
        <button>Products</button>
        <button>Solution</button>
        <button>Pricing</button>
      </div>

      <div>
        <button>Sign Up</button>
        <button>Start Free</button>
      </div>
    </header>
  );
}
