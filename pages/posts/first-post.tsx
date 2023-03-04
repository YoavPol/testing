import Link from 'next/link';
import { useState } from 'react';

export default function FirstPost() {
  const [result, setResult] = useState('')
  async function fetchInfo() {
    const url = `http://localhost:3000/api/hello`
    const response = await fetch(url);
    const json = await response.json();
    setResult(json);
  }
  return (
    <>
      <h1>First Post</h1>
      <button onClick={fetchInfo}>hello world</button>
      <h1>result: {result.age}</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </>
  );
}