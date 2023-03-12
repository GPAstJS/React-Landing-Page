import './style.css'

export default function Card({
  plan,
  label,
  width,
  price,
  bg,
  advice,
  features,
  buttonText,
}) {
  return (
    <div className='card'>
      <h3 className='plan'
        style={{
          marginBottom: "15px",
          fontSize: "30px",
          fontWeight: "bold",
        }}
      >
        {plan}
      </h3>
      <p className='label' style={{
        width: width
      }}
      >
        {label}
      </p>
      <p className='price'
      >
        {price}
      </p>
      <p className='advice'>{advice}</p>
      <div className='features-div' style={{
        background: bg
      }}
      >
        {features.map((e) => (
          <p className='features'
            style={{
              marginLeft: "30px",
              marginTop: "15px",
              marginBottom: "20px",
              fontSize: "16px",
              color: "#000",
            }}
          >
            {e}
          </p>
        ))}
        <div
          style={{  
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        ><button className='feature-button'>{buttonText}</button>
          
        </div>
      </div>
    </div>
  );
}