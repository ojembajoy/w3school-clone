import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Elements.module.css";

const Elements = () => {
  const card = {
    title: "Explore Tutorials",
    to: "/tutorialpage"
  };
  const navigate = useNavigate();

  return (
    <div className={styles.containerPage}>
      <div className={styles.text}>
        <h1>NjSchools Elements</h1>
        <p>
          HTML elements are the building blocks of web pages. They are
          represented by tags in the HTML code and define the structure and
          content of a webpage.
        </p>
        <h2>Common HTML Elements</h2>
      </div>

      <ul>
        <li><strong>&lt;div&gt;</strong>: A container element used to group other elements.</li>
        <li><strong>&lt;h1&gt; to &lt;h6&gt;</strong>: Heading elements used to define headings of different levels.</li>
        <li><strong>&lt;p&gt;</strong>: A paragraph element used to define a block of text.</li>
        <li><strong>&lt;a&gt;</strong>: An anchor element used to create hyperlinks.</li>
        <li><strong>&lt;img&gt;</strong>: An image element used to embed images.</li>
      </ul>

      <h2>Example</h2>
      <p>Here is an example of a simple HTML structure using various elements:</p>

      <pre>
        &lt;div&gt;
          &lt;h1&gt;Welcome to NjSchools&lt;/h1&gt;
          &lt;p&gt;Your one-stop solution for all educational resources.&lt;/p&gt;
          &lt;a href="https://www.njschool-learn-better.com"&gt;Visit NjSchools&lt;/a&gt;
        &lt;/div&gt;
      </pre>

      <h2>Learn More</h2>
      <p>
        To learn more about HTML elements and how to use them effectively,
        explore our tutorials and examples on NjSchools!
      </p>

      <button onClick={() => navigate(card.to)} className={styles.btn}>
        {card.title}
      </button>
    </div>
  );
};

export default Elements;

