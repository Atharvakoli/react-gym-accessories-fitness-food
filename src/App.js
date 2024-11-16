import categories from "./category.data";
import Directory from "./components/directory/directory.component";

const App = () => {
  return (
    <>
      <Directory categories={categories} />
    </>
  );
};

export default App;
