import { paddle } from "@/paddle";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Behold, my paddle!",
  description: "This is all the platypuses in my paddle.",
};

export default function PaddlePage() {
  return (
    <div>
      <h2>Paddle Page</h2>
      <div className="paddle-grid">
        {paddle.map((platypus) => {
          return (
            <div key={platypus.slug}>
              <h3>
                <Link href={`/paddle/${platypus.slug}`}>{platypus.name}</Link>
              </h3>
              <p>{platypus.description}</p>
              <p>Age: {platypus.age}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
