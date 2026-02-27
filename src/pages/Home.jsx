import PropertyCard from "../components/common/PropertyCard";

const data = [
  {
    id: 1,
    title: "Villa moderne",
    location: "Tunis",
    price: 250000,
    image: "https://via.placeholder.com/300"
  },
  {
    id: 2,
    title: "Appartement S+2",
    location: "Sousse",
    price: 140000,
    image: "https://via.placeholder.com/300"
  }
];

export default function Home() {
  return (
    <div className="container">
      <h2>Annonces en vedette</h2>
      <div className="grid">
        {data.map(item => (
          <PropertyCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
