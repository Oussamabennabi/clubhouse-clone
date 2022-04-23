const Spinner = () => {
  return (
    <div style={{
      position: "fixed",
      inset: "0",
      display: "flex",
      zIndex: "2",
      pointerEvents: "none",
      alignItems: "center",
      justifyContent: "center"
    }}>
      <img src='/images/loader.gif' alt='loader' />
    </div>
  )
}

export default Spinner