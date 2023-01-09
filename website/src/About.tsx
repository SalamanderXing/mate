// imports bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";

const html = await (await fetch("/index.html")).text();
export default () => {
  // sets the html as innerhtml of the component
  return (
    <div className="container">
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
};
