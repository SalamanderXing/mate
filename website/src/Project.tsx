const html = await (await fetch('/project.html')).text()
console.log(html)
function Home() {
  return <div dangerouslySetInnerHTML={{ __html: html }} />
}

export default Home;
