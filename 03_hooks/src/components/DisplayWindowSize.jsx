import useWindowSize from "../hooks/useWIndowSize";

const DisplayWindowSize = () => {
  const { width, height } = useWindowSize();

  return (
    <div>
      <p>A largura é {width}</p>
      <p>E a altura é {height}</p>
    </div>
  );
};

export default DisplayWindowSize;
