export function Fireflies() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {[...Array(15)].map((_, i) => (
        <div key={i} className="firefly" />
      ))}
    </div>
  );
}
