/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Layout from './components/Layout';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';

export default function App() {
  return (
    <Layout>
      <Home />
      <Projects />
      <About />
      <Contact />
    </Layout>
  );
}
