import Image from "next/image";

export default function Home() {
  return (
    <div className="p-8">
      <div className="text-left">
        <p className="font-bol text-[50px]">
          Welcome to my portfolio website
        </p>
        <p className="py-60">I'm Ann a second year in Computer Science student in the game development stream.
          <br />I'm excited to begin my adventure into learning how to create fun games and stunning websites!</p>
      </div>
    </div>
  );
}
//nav bar to have no wrap 
//text in button things is no wrap
//width should not be fixed but based on the size of the text
