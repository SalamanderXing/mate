const html = await (await fetch("/project.html")).text();
function Home() {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

export default Home;
