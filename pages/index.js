import { useState, useEffect } from 'react';

export default function Home() {
  const [referralData, setReferralData] = useState(null);
  const [gameData, setGameData] = useState(null);

  useEffect(() => {
    fetch('/api/referral')
      .then((res) => res.json())
      .then((data) => setReferralData(data));

    fetch('/api/game')
      .then((res) => res.json())
      .then((data) => setGameData(data));
  }, []);

  return (
    <div>
      <h1>Welcome to Neon21 by Syndicate Supremacy</h1>
      {referralData && (
        <div>
          <h2>Referral Status</h2>
          <pre>{JSON.stringify(referralData)}</pre>
        </div>
      )}
      {gameData && (
        <div>
          <h2>Game API</h2>
          <pre>{JSON.stringify(gameData)}</pre>
        </div>
      )}
    </div>
  );
}
