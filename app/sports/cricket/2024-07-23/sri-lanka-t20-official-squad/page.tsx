import { Metadata } from "next";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Sri Lanka vs India T20 Series 2024",
  description:
    "Sri Lanka vs India T20 Series 2024 Will be held at Pallekale starting from 27th July 2024",
};

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <Head>
        <title>Sri Lanka vs India T20 Series 2024</title>
        <meta name="description" content="Sri Lanka vs India T20 Series 2024" />
      </Head>
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow text-black">
        <h1 className="text-3xl font-bold mb-6">
          Sri Lanka vs India T20 Series 2024
        </h1>
        <p className="mb-4">
          Excitement is in the air as the Sri Lanka vs India cricket T20 series
          is set to begin on the 27th of July 2024. Cricket fans around the
          world are eagerly waiting to see these two powerhouse teams clash on
          the field. With new captains and fresh squads, this series promises
          thrilling matches and unforgettable moments.
        </p>
        <p className="mb-4">
          The official Sri Lanka T20 squad has been announced, with Charith
          Asalanka taking the helm as the new captain. Here are the players
          representing Sri Lanka:
        </p>
        <h2 className="text-2xl font-semibold mb-4">Sri Lanka T20 Squad:</h2>
        <ul className="list-disc list-inside mb-4">
          <li>Charith Asalanka (c)</li>
          <li>Pathum Nissanka</li>
          <li>Kusal Janith Perera</li>
          <li>Avishka Fernando</li>
          <li>Kusal Mendis</li>
          <li>Dinesh Chandimal</li>
          <li>Kamindu Mendis</li>
          <li>Dasun Shanaka</li>
          <li>Wanindu Hasaranga</li>
          <li>Dunith Wellalage</li>
          <li>Maheesh Theekshana</li>
          <li>Chamindu Wickramasinghe</li>
          <li>Matheesha Pathirana</li>
          <li>Binura Fernando</li>
          <li>Asitha Fernando</li>
          <li className="line-through">Nuwan Thushara</li>
        </ul>
        <p className="mb-4 italic">
          PS: Dushmantha Chameera & Nuwan Thushara has been ruled out of the
          both T20 and ODI series due to injuries. Asitha Fernando and Dilshan
          Madhusanka are included as replacements.
        </p>
        <p className="mb-4">
          The T20 series will kick off on the 27th of July, followed by matches
          on the 28th and 30th of July, starting at 19:00 at Pallekale.
        </p>
        <h2 className="text-2xl font-semibold mb-4">Indian Squads:</h2>
        <h3 className="text-xl font-semibold mb-2">T20I Squad:</h3>
        <ul className="list-disc list-inside mb-4">
          <li>Suryakumar Yadav (c)</li>
          <li>Shubman Gill (vc)</li>
          <li>Yashasvi Jaiswal</li>
          <li>Rinku Singh</li>
          <li>Riyan Parag</li>
          <li>Rishabh Pant (wk)</li>
          <li>Sanju Samson (WK)</li>
          <li>Hardik Pandya</li>
          <li>Shivam Dube</li>
          <li>Axar Patel</li>
          <li>Washington Sundar</li>
          <li>Ravi Bishnoi</li>
          <li>Arshdeep Singh</li>
          <li>Khaleel Ahmed</li>
          <li>Mohammed Siraj</li>
        </ul>
        <h3 className="text-xl font-semibold mb-2">ODI Squad:</h3>
        <ul className="list-disc list-inside mb-4">
          <li>Rohit Sharma (c)</li>
          <li>Shubman Gill (vc)</li>
          <li>Virat Kohli</li>
          <li>KL Rahul (WK)</li>
          <li>Rishabh Pant (wk)</li>
          <li>Shreyas Iyer</li>
          <li>Shivam Dube</li>
          <li>Kuldeep Yadav</li>
          <li>Mohammed Siraj</li>
          <li>Washington Sundar</li>
          <li>Arshdeep Singh</li>
          <li>Riyan Parag</li>
          <li>Axar Patel</li>
          <li>Khaleel Ahmed</li>
          <li>Harshit Rana</li>
        </ul>
      </div>
    </div>
  );
}
