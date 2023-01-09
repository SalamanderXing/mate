const html = await (await fetch("/config.html")).text();
function Home() {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

export default Home;
