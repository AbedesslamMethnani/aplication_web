export default function PropertyCard({ item }) {
    return (
      <div className="card">
        <img src={item.image} alt={item.title} />
        <h3>{item.title}</h3>
        <p>{item.location}</p>
        <span>{item.price} DT</span>
      </div>
    );
  }
  