const html = await (await fetch("/mate.html")).text();
function Home() {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

export default Home;
