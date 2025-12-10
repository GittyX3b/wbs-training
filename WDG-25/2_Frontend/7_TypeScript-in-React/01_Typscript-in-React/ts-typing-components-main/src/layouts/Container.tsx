type ContainerProps = {
  children: React.ReactNode;
  style?: React.CSSProperties;
};

const Container = ({ children, style }: ContainerProps) => (
  <div
    style={{
      border: '2px dashed #888',
      padding: '1rem',
      borderRadius: '0.5rem',
      backgroundColor: '#f9f9f9',
      fontFamily: 'sans-serif',
      ...style
    }}
  >
    {children}
  </div>
);

export default Container;
