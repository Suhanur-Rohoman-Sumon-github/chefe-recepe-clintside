import html2canvas from "html2canvas";
import jspdf from "jspdf";

export default function Html() {
  return (
    <div className="w-9/12 mx-auto">
      <div  id="jspdf">
        <h1 className="text-teal-300 text-3xl font-bold my-2">1) Tell us the differences between uncontrolled and controlled components</h1>
        <p className="ml-4 my-2 text-teal-500 font-bold">Ans: Uncontrolled components are components whose state is managed by the DOM itself, while controlled components are components whose state is managed by React. In uncontrolled components, you rely on the DOM to maintain and update the state, while in controlled components, you handle the state yourself through props and event handlers.</p>
        <h1 className="text-teal-300 text-3xl font-bold my-2">1) How to validate React props using PropTypes?</h1>
        <p className="ml-4 my-2 text-teal-500  font-bold">Ans: How to validate React props using PropTypes?",
        "answer": "PropTypes is a built-in library in React that allows you to specify the expected types of props for a component. To use PropTypes, you need to import it from the 'prop-types' package and then define the prop types for your component using the 'propTypes' object. For example, if you have a prop called 'name' that you want to validate as a string, you would define it like this: MyComponent.propTypes =  name: PropTypes.string.isRequired .</p>
        <h1 className="text-teal-300 text-3xl font-bold my-2">1) Tell us the difference between Node.js and Express.js.</h1>
        <p className="ml-4 my-2 text-teal-500  font-bold">Ans: Node.js is a runtime environment that allows you to run JavaScript code outside of a web browser. It's built on top of the V8 engine and provides a way to execute JavaScript on the server-side. Express.js, on the other hand, is a framework that's built on top of Node.js. It provides a set of tools and conventions for building web applications and APIs with Node.js..</p>
        <h1 className="text-teal-300 text-3xl font-bold my-2">1) What is a custom hook, and why will you create a custom hook?</h1>
        <p className="ml-4 my-2 text-teal-500  font-bold">Ans: A custom hook is a function that uses one or more built-in React hooks to encapsulate reusable logic that can be shared across multiple components. Custom hooks allow you to abstract away complex logic into reusable pieces of code that can be easily shared and reused in different components. You would create a custom hook when you find yourself repeating the same code across multiple components or when you want to create a reusable piece of logic that can be easily shared between components.</p>

      </div>
      <button className="btn btn-success"
        onClick={() => {
          const check = document.getElementById("jspdf");
          html2canvas(check, {}).then((canvas) => {
            const imgData = canvas.toDataURL("image/png");
            const height = (canvas.height * 210) / canvas.width;

            const pdf = new jspdf("p", "mm", "a4");
            pdf.addImage(imgData, "PNG", 0, 0, 210, height);
            pdf.save("export.pdf");
          });
        }}
      >
        Download
      </button>
    </div>
  );
}