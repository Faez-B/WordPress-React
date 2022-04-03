import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import * as ReactDOMClient from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Page1 } from "./components/Page1";
import { Page2 } from "./components/Page2";
import { Form } from './components/Form';
import { Accueil } from './components/Accueil';

// const params = document.getElementById('params');
const params = document.getElementById('params').dataset.params.split(",").map(item=>item.trim()); // On récupère tous les champs ACF

// React 17
// ReactDOM.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <Routes>
//           <Route path="/react" element={<App params={ params }/>} >
//               <Route path="accueil" element={<Accueil />} />
//               <Route path="page1" element={<Page1 params={params} />} />
//               <Route path="page2" element={<Page2 params="test 1, test2 en dur" />} />
//               <Route path="form" element={<Form/>} />
//           </Route>
//       </Routes>
//     </BrowserRouter>
//   </React.StrictMode>,
//   document.getElementById('root')
// );


// React 18
const container = document.getElementById('root');

// TESTS

// console.log(params);
// console.log(typeof (params));

// console.log(`'${params}'`);
// console.log(typeof (`'${params}'`));

// console.log(JSON.stringify(`'${params}'`));
// console.log(typeof (JSON.stringify(`'${params}'`)));

// console.log((JSON.parse(JSON.stringify(params))));
// console.log(typeof (JSON.parse(JSON.stringify(`'${params}'`))));

// console.log(JSON.parse(params));

// console.log(params.split(",").map(item=>item.trim()));

// END TESTS

// Create a root.
const root = ReactDOMClient.createRoot(container);

// Initial render: Render an element to the root.
root.render(
  <React.StrictMode>
    <BrowserRouter>

      <Routes>
          <Route path="/react" element={<App params={ params }/>} >
              <Route path="accueil" element={<Accueil />} />
              <Route path="page1" element={<Page1 params={params} />} />
              <Route path="page2" element={<Page2 params={["test", "test2 en dur"]} />} />
              <Route path="form" element={<Form/>} />
          </Route>
      </Routes>

    </BrowserRouter>
  </React.StrictMode>
);

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();






// $(document).foundation();

// $(document).ready(function(){     
//     $('#my-slider').show();
//     $('#my-slider').foundation('_reflow');
// });