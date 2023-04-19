import clientPromise from "../lib/mongodb";

export default function Top({ dashboard }) {
  return (
    <div >
      {/* <Link href="/movies">movies</Link> */}
      {/* <div className={styles.logo}>Top Teachers of All Time</div> */}
      <div >
        
      </div>
      <style jsx global>{`
        html,
        body {
          background: linear-gradient(135deg, greenyellow, #4070f4);
          padding: 0;
          // margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        @media (max-width: 700px) {
          body{
            margin:0;
          }
      }
      `}</style>
    </div>
  );
}

export async function getServerSideProps() {
  try {
    const client = await clientPromise;
    const db = client.db("bookings");

    const teachers = await db.collection("dashboard").find({}).toArray();

    return {
      props: { dashboard: JSON.parse(JSON.stringify(teachers)) },
    };
  } catch (e) {
    console.error(e);
  }
}
