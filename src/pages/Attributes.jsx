import React from 'react';
import styles from './Attributes.module.css';
import { useNavigate } from 'react-router-dom';


const Attributes = () => {
        const card = {
            title:"Explore Tutorials",
            to:"/tutorialpage"
        };
    const navigate = useNavigate();

    return (
       <>
        <div className={styles.containerPage}>
            <h1>NjSchools Attributes</h1>
            <p>Attributes provide additional information about HTML elements. They are always included in the opening tag and usually come in name/value pairs like name="value".</p>
            <h2>Common Attributes</h2>
            <ul>
                <li><strong>class</strong>: Specifies one or more class names for an element.</li>
                <li><strong>id</strong>: Specifies a unique id for an element.</li>
                <li><strong>style</strong>: Specifies inline CSS styles for an element.</li>
            </ul>
            <h2>Example</h2>
            <p>Here is an example of an HTML element with attributes:</p>
            <pre>
                &lt;a href="https://www.njschool-learn-better.com" target="_blank"&gt;Visit NjSchools&lt;/a&gt;
            </pre>
            <p>In this example, the <code>href</code> attribute specifies the URL of the link, and the <code>target</code> attribute specifies that the link should open in a new tab.</p>
            <h2>Learn More</h2>
            <p>To learn more about HTML attributes and how to use them effectively, explore our tutorials and examples on NjSchools!</p>
            <button onClick={() => navigate(card.to)} className={styles.btn}>{card.title}</button>

        </div>
       </>
    );
}

export default Attributes;

