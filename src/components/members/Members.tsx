import Member from "./Member";

export default function Members() {
  const cards = Array.from({ length: 6 });
  return (
    <div className="container px-4 mx-auto">
      <div className="grid grid-cols-6 gap-4 ">
        {cards.map((_, index) => (
          <Member key={index} />
        ))}
      </div>
    </div>
  );
}
