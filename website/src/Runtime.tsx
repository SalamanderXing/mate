const html = await (await fetch('/mate.html')).text()
console.log(html)
function Home() {
  return <div dangerouslySetInnerHTML={{ __html: html }} />
}

export default Home;
