import Link from "next/link";

const About = () => {
  return (
    <>
      <div>About us page</div>
      <Link href="/login">goto login page</Link>
      <Link href="/">goto home page</Link>
    </>
  );
};

export default About;
