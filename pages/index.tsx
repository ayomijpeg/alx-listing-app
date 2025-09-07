import Card from "../components/common/Card";
import Button from "../components/common/Button";

export default function Home() {
  return (
    <div>
      <h1>Welcome to ALX Listing App</h1>
      <Card title="Sample Property" description="A beautiful house." />
      <Button label="Book Now" />
    </div>
  );
}
