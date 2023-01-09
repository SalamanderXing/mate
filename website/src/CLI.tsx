const html = await (await fetch("/cli.html")).text();
function Home() {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

export default Home;
