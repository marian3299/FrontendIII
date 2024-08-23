const Message = ({costumer}) => {
  return (
    <>
      <h4>Muchas gracias, {costumer.name}</h4>
      <h4>En 30min llegara tu pedido a la direccion: {costumer.address}</h4>
    </>
  );
};

export default Message;
