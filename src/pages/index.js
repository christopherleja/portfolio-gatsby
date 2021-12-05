import React, { useState } from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Projects from "../components/Projects";
import AppContext from "../context";
import Resume from "../components/Resume";
import Footer from "../components/Footer";
// markup
const IndexPage = () => {
  const [selected, setSelected] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const modalValues = {
    selected,
    setSelected,
    modalVisible,
    setModalVisible,
  };

  return (
    <AppContext.Provider value={modalValues}>
      <main>
        <Navbar />
        <Header />
        <div className="px-10">
          <About />
          <Projects />
          <Resume />
        </div>
        <Footer />
      </main>
    </AppContext.Provider>
  );
};

export default IndexPage;
