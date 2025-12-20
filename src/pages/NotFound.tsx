import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center">
      <h1>This page is not found !</h1>
      <Link to="/">back to dashboard</Link>
      <a href="https://mjohanbintangp.dev">mjohanbintangp.dev</a>
    </div>
  );
}
